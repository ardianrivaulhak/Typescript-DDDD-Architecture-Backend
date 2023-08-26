import {
  // UnmarshalledUserHasModule,
  UserHasModule,
} from '../../domain/models/user-module'
import { RoleHasPermission } from '../../domain/models/role-permission'
import { UserHasRole } from '../../domain/models/user-role'

export interface IAccessControll {
  addRoleToUser(_userHasRole: UserHasRole): Promise<string>
  removeRoleFromUser(_userHasRole: UserHasRole): Promise<string>
  addPermissionToRole(_roleHasPermission: RoleHasPermission): Promise<string>
  removePermissionFromRole(
    _roleHasPermission: RoleHasPermission,
  ): Promise<string>

  addModuleToUser(_userHasModule: UserHasModule): Promise<string>
  removeModuleFromUser(_userHasRole: UserHasModule): Promise<string>
}
