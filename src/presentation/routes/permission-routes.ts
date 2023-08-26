import { Router } from 'express'
import { inject, injectable } from 'inversify'
import asyncWrap from '../../libs/asyncWrapper'
import { container } from '../../container'
import PermissionController from '../controllers/permission-controller'
import { TYPES } from '../../types'
import { AuthMiddleware } from '../middlewares/check-jwt'
import { PermissionMiddleware } from '../middlewares/check-permission'

@injectable()
export class PermissionRoutes {
  public route = 'Permission'
  PermissionControllerInstance =
    container.get<PermissionController>(PermissionController)

  constructor(
    @inject(TYPES.AuthMiddleware) private _authMiddleware: AuthMiddleware,
    @inject(TYPES.PermissionMiddleware)
    private _permissionMiddleware: PermissionMiddleware,
  ) {}

  public setRoutes(router: Router) {
    router.get(
      `/${this.route}`,
      // [
      //   this._authMiddleware.checkJwt,
      //   this._permissionMiddleware.checkPermission(['can_read_permissions']),
      // ],
      asyncWrap(
        this.PermissionControllerInstance.listPermissions.bind(
          this.PermissionControllerInstance,
        ),
      ),
    )
    router.get(
      `/${this.route}/:id`,
      // [
      //   this._authMiddleware.checkJwt,
      //   this._permissionMiddleware.checkPermission(['can_read_permission']),
      // ],
      asyncWrap(
        this.PermissionControllerInstance.findPermissionById.bind(
          this.PermissionControllerInstance,
        ),
      ),
    )
    router.put(
      `/${this.route}/:id`,
      // [
      //   this._authMiddleware.checkJwt,
      //   this._permissionMiddleware.checkPermission(['can_update_permission']),
      // ],
      asyncWrap(
        this.PermissionControllerInstance.updatePermission.bind(
          this.PermissionControllerInstance,
        ),
      ),
    )

    router.post(
      `/${this.route}`,
      // [
      //   this._authMiddleware.checkJwt,
      //   this._permissionMiddleware.checkPermission(['can_create_permission']),
      // ],
      asyncWrap(
        this.PermissionControllerInstance.createPermission.bind(
          this.PermissionControllerInstance,
        ),
      ),
    )
  }
}
