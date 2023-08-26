import { Router } from 'express'
import { injectable } from 'inversify'
import asyncWrap from '../../libs/asyncWrapper'
import { container } from '../../container'
import AccessControll from '../controllers/access-controll-controller'
@injectable()
export class AccessControllRoutes {
  public route = '_/access-controll'
  AccessControllControllerInstance =
    container.get<AccessControll>(AccessControll)
  public setRoutes(router: Router) {
    router.put(
      `/${this.route}/add-role-user`,
      asyncWrap(
        this.AccessControllControllerInstance.addRoleUser.bind(
          this.AccessControllControllerInstance,
        ),
      ),
    )
    router.put(
      `/${this.route}/add-module-user`,
      asyncWrap(
        this.AccessControllControllerInstance.addModuleUser.bind(
          this.AccessControllControllerInstance,
        ),
      ),
    )

    router.put(
      `/${this.route}/add-permission-role`,
      asyncWrap(
        this.AccessControllControllerInstance.addPermisisonRole.bind(
          this.AccessControllControllerInstance,
        ),
      ),
    )

    router.put(
      `/${this.route}/remove-role-user`,
      asyncWrap(
        this.AccessControllControllerInstance.removeRoleUser.bind(
          this.AccessControllControllerInstance,
        ),
      ),
    )

    router.put(
      `/${this.route}/remove-module-user`,
      asyncWrap(
        this.AccessControllControllerInstance.removeModuleUser.bind(
          this.AccessControllControllerInstance,
        ),
      ),
    )

    router.put(
      `/${this.route}/remove-permission-role`,
      asyncWrap(
        this.AccessControllControllerInstance.removePermissionRole.bind(
          this.AccessControllControllerInstance,
        ),
      ),
    )
  }
}
