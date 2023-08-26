import { Router } from 'express'
import { inject, injectable } from 'inversify'
import asyncWrap from '../../libs/asyncWrapper'
import { container } from '../../container'
import ModuleController from '../controllers/module-controller'
import { TYPES } from '../../types'
import { AuthMiddleware } from '../middlewares/check-jwt'
import { PermissionMiddleware } from '../middlewares/check-permission'

@injectable()
export class ModuleRoutes {
  public route = '_/modules'
  ModuleControllerInstance = container.get<ModuleController>(ModuleController)

  constructor(
    @inject(TYPES.AuthMiddleware) private _authMiddleware: AuthMiddleware,
    @inject(TYPES.PermissionMiddleware)
    private _permissionMiddleware: PermissionMiddleware,
  ) {}
  public setRoutes(router: Router) {
    router.get(
      `/${this.route}`,
      [
        this._authMiddleware.checkJwt,
        // this._permissionMiddleware.checkPermission(['can_read_modules']),
      ],
      asyncWrap(
        this.ModuleControllerInstance.listModules.bind(
          this.ModuleControllerInstance,
        ),
      ),
    )
    router.get(
      `/${this.route}/:id`,
      [
        this._authMiddleware.checkJwt,
        // this._permissionMiddleware.checkPermission(['can_read_module']),
      ],
      asyncWrap(
        this.ModuleControllerInstance.findModuleById.bind(
          this.ModuleControllerInstance,
        ),
      ),
    )
    router.put(
      `/${this.route}/:id`,
      [
        this._authMiddleware.checkJwt,
        // this._permissionMiddleware.checkPermission(['can_update_module']),
      ],
      asyncWrap(
        this.ModuleControllerInstance.updateModule.bind(
          this.ModuleControllerInstance,
        ),
      ),
    )

    router.post(
      `/${this.route}`,
      [
        this._authMiddleware.checkJwt,
        // this._permissionMiddleware.checkPermission(['can_delete_module']),
      ],
      asyncWrap(
        this.ModuleControllerInstance.createModule.bind(
          this.ModuleControllerInstance,
        ),
      ),
    )
  }
}
