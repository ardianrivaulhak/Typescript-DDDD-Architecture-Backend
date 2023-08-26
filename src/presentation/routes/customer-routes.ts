import { Router } from 'express'
import { inject, injectable } from 'inversify'
import CustomerController from '../controllers/customer-controller'
import { AuthMiddleware } from '../middlewares/check-jwt'
import { TYPES } from '../../types'
import { PermissionMiddleware } from '../middlewares/check-permission'
import asyncWrap from '../../libs/asyncWrapper'
import { container } from '../../container'

@injectable()
export class CustomerRoutes {
  public route = 'cust'
  CustomerControllerInstance =
    container.get<CustomerController>(CustomerController)

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
        this.CustomerControllerInstance.listCustomers.bind(
          this.CustomerControllerInstance,
        ),
      ),
    )
  }
}
