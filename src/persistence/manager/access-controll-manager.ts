import { injectable } from 'inversify'
import { IAccessControll } from '../../domain/service/interface-access-controll'
import { UserHasRole } from '../../domain/models/user-role'
import { RoleHasPermission } from '../../domain/models/role-permission'
import { Role, User } from '../../infrastructure/database/models'
import { UserHasModule } from '../../domain/models/user-module'

@injectable()
export class AccessControllManager implements IAccessControll {
  async addRoleToUser(_userHasRole: UserHasRole): Promise<string> {
    try {
      const user = await User.findByPk(_userHasRole.unmarshal().user_id)
      if (!user) {
        throw {
          statusCode: 404,
          message: 'User was not found',
        }
      }
      await user.addRole(_userHasRole.unmarshal().role_id)
    } catch (e) {
      console.error(e)
      throw {
        statusCode: 500,
        message: e,
      }
    }

    return 'success'
  }

  async removeRoleFromUser(_userHasRole: UserHasRole): Promise<string> {
    try {
      const user = await User.findByPk(_userHasRole.unmarshal().user_id)
      if (!user) {
        throw {
          statusCode: 404,
          message: 'User was not found',
        }
      }
      await user.removeRole(_userHasRole.unmarshal().role_id)
    } catch (e) {
      console.error(e)
      throw {
        statusCode: 500,
        message: e,
      }
    }

    return 'success'
  }

  async addModuleToUser(_userHasModule: UserHasModule): Promise<string> {
    try {
      const user = await User.findByPk(_userHasModule.unmarshal().user_id)
      if (!user) {
        throw {
          statusCode: 404,
          message: 'User was not found',
        }
      }
      await user.addModule(_userHasModule.unmarshal().module_id)
    } catch (e) {
      console.error(e)
      throw {
        statusCode: 500,
        message: e,
      }
    }

    return 'success'
  }

  async removeModuleFromUser(_userHasModule: UserHasModule): Promise<string> {
    try {
      const user = await User.findByPk(_userHasModule.unmarshal().user_id)
      if (!user) {
        throw {
          statusCode: 404,
          message: 'User was not found',
        }
      }
      await user.removeRole(_userHasModule.unmarshal().module_id)
    } catch (e) {
      console.error(e)
      throw {
        statusCode: 500,
        message: e,
      }
    }

    return 'success'
  }

  async addPermissionToRole(
    _roleHasPermission: RoleHasPermission,
  ): Promise<string> {
    try {
      const role = await Role.findByPk(_roleHasPermission.unmarshal().role_id)

      if (!role) {
        throw {
          statusCode: 404,
          message: 'Role was not found',
        }
      }
      await role.addPermission(_roleHasPermission.unmarshal().permission_id)
    } catch (e) {
      console.error(e)
      throw {
        statusCode: 500,
        message: e,
      }
    }

    return 'success'
  }

  async removePermissionFromRole(
    _roleHasPermission: RoleHasPermission,
  ): Promise<string> {
    try {
      const role = await Role.findByPk(_roleHasPermission.unmarshal().role_id)

      if (!role) {
        throw {
          statusCode: 404,
          message: 'Role was not found',
        }
      }
      await role.removePermission(_roleHasPermission.unmarshal().permission_id)
    } catch (e) {
      console.error(e)
      throw {
        statusCode: 500,
        message: e,
      }
    }

    return 'success'
  }
}
