import { inject, injectable } from 'inversify'
import { TYPES } from '../types'
import { IAccessControll } from '../domain/service/interface-access-controll'
import { UserRoleCreateDto, UserRoleRemoveDto } from '../dtos/role-dto'
import {
  RoleHasPermissionMapper,
  UserHasModuleMapper,
  UserHasRoleMapper,
} from '../dtos/mappers/access-controll-mapper'
import {
  RolePermissionCreateDto,
  RolePermissionRemoveDto,
} from '../dtos/permission-dto'
import { UserModuleCreateDto, UserModuleRemoveDto } from 'dtos/module-dto'

@injectable()
export class AccessControllService {
  constructor(
    @inject(TYPES.AccessControllManager)
    private _accessControll: IAccessControll,
  ) {}

  public async addRoleUser(_userHasRole: UserRoleCreateDto): Promise<string> {
    const userDomain = UserHasRoleMapper.dtoCreateToDomain(_userHasRole)
    const role = await this._accessControll.addRoleToUser(userDomain)
    return role
  }

  public async addModuleUser(
    _userHasModule: UserModuleCreateDto,
  ): Promise<string> {
    const userDomain = UserHasModuleMapper.dtoCreateToDomain(_userHasModule)
    const role = await this._accessControll.addModuleToUser(userDomain)
    return role
  }

  public async removeRoleUser(
    _userHasRole: UserRoleRemoveDto,
  ): Promise<string> {
    const userDomain = UserHasRoleMapper.dtoRemoveToDomain(_userHasRole)
    const role = await this._accessControll.removeRoleFromUser(userDomain)
    return role
  }

  public async addPermisisonRole(
    _roleHasPermission: RolePermissionCreateDto,
  ): Promise<string> {
    const roleDomain =
      RoleHasPermissionMapper.dtoCreateToDomain(_roleHasPermission)
    const role = await this._accessControll.addPermissionToRole(roleDomain)
    return role
  }

  public async removePermisisonRole(
    _roleHasPermission: RolePermissionRemoveDto,
  ): Promise<string> {
    const roleDomain =
      RoleHasPermissionMapper.dtoCreateToDomain(_roleHasPermission)
    const role = await this._accessControll.removePermissionFromRole(roleDomain)
    return role
  }

  public async removeModuleUser(
    _userHasModule: UserModuleRemoveDto,
  ): Promise<string> {
    const userDomain = UserHasModuleMapper.dtoRemoveToDomain(_userHasModule)
    const role = await this._accessControll.removeModuleFromUser(userDomain)
    return role
  }
}
