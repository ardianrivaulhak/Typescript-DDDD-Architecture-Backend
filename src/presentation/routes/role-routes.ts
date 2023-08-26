import { Router } from 'express'
import { inject, injectable } from 'inversify'
import asyncWrap from '../../libs/asyncWrapper'
import { container } from '../../container'
import RoleController from '../controllers/role-controller'
import { TYPES } from '../../types'
import { AuthMiddleware } from '../middlewares/check-jwt'
import { PermissionMiddleware } from '../middlewares/check-permission'

@injectable()
export class RoleRoutes {
  public route = '_/roles'
  RoleControllerInstance = container.get<RoleController>(RoleController)

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
      //   this._permissionMiddleware.checkPermission(['can_read_roles']),
      // ],
      asyncWrap(
        this.RoleControllerInstance.listRoles.bind(this.RoleControllerInstance),
      ),
    )
    router.get(
      `/${this.route}/:id`,
      // [
      //   this._authMiddleware.checkJwt,
      //   this._permissionMiddleware.checkPermission(['can_read_role']),
      // ],
      asyncWrap(
        this.RoleControllerInstance.findRoleById.bind(
          this.RoleControllerInstance,
        ),
      ),
    )
    router.put(
      `/${this.route}/:id`,
      // [
      //   this._authMiddleware.checkJwt,
      //   this._permissionMiddleware.checkPermission(['can_update_role']),
      // ],
      asyncWrap(
        this.RoleControllerInstance.updateRole.bind(
          this.RoleControllerInstance,
        ),
      ),
    )

    router.post(
      `/${this.route}`,
      // [
      //   this._authMiddleware.checkJwt,
      //   this._permissionMiddleware.checkPermission(['can_create_role']),
      // ],
      asyncWrap(
        this.RoleControllerInstance.createRole.bind(
          this.RoleControllerInstance,
        ),
      ),
    )
  }
}
