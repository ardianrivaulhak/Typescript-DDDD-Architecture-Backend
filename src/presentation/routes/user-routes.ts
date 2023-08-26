import { Router } from 'express'
import { inject, injectable } from 'inversify'
import asyncWrap from '../../libs/asyncWrapper'
import { container } from '../../container'
import UserController from '../controllers/user-controller'
import { TYPES } from '../../types'
import { AuthMiddleware } from '../middlewares/check-jwt'
import { PermissionMiddleware } from '../middlewares/check-permission'
@injectable()
export class UserRoutes {
  public route = '_/users'
  UserControllerInstance = container.get<UserController>(UserController)

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
      //   this._permissionMiddleware.checkPermission(['can_read_users']),
      // ],
      asyncWrap(
        this.UserControllerInstance.listUsers.bind(this.UserControllerInstance),
      ),
    )
    router.get(
      `/${this.route}/:id`,
      // [
      //   this._authMiddleware.checkJwt,
      //   this._permissionMiddleware.checkPermission(['can_read_user']),
      // ],
      asyncWrap(
        this.UserControllerInstance.findUserById.bind(
          this.UserControllerInstance,
        ),
      ),
    )
    router.put(
      `/${this.route}/:id`,
      // [
      //   this._authMiddleware.checkJwt,
      //   this._permissionMiddleware.checkPermission(['can_update_user']),
      // ],
      asyncWrap(
        this.UserControllerInstance.updateUser.bind(
          this.UserControllerInstance,
        ),
      ),
    )

    router.post(
      `/${this.route}`,
      // [
      //   this._authMiddleware.checkJwt,
      //   this._permissionMiddleware.checkPermission(['can_create_user']),
      // ],
      asyncWrap(
        this.UserControllerInstance.createUser.bind(
          this.UserControllerInstance,
        ),
      ),
    )

    router.delete(
      `/${this.route}/:id`,
      // [
      //   this._authMiddleware.checkJwt,
      //   this._permissionMiddleware.checkPermission(['can_delete_user']),
      // ],
      asyncWrap(
        this.UserControllerInstance.deleteUser.bind(
          this.UserControllerInstance,
        ),
      ),
    )
  }
}