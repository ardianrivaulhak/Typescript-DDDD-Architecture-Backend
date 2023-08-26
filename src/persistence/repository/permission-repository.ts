import { Permission as EntityPermission } from '../../domain/models/permission'
import { IPermissionRepository } from '../../domain/service/interface-permission-repository'
import { injectable } from 'inversify'
import { PermissionMapper } from '../../dtos/mappers/permission-mapper'
import {
  Permission,
  PermissionInstance,
} from '../../infrastructure/database/models'
import { AppError, HttpCode } from '../../libs/exceptions/app-error'

@injectable()
export class PermissionSequelizeRepository implements IPermissionRepository {
  async findAll(): Promise<EntityPermission[]> {
    const permissions = await Permission.findAll({
      attributes: ['id', 'name', 'description'],
    })

    return permissions.map((permission) =>
      PermissionMapper.unmarshalledToDomain(permission),
    )
  }

  async findById(id: string): Promise<EntityPermission> {
    const permission = await Permission.findByPk<PermissionInstance>(id)
    if (!permission) {
      throw new AppError({
        statusCode: HttpCode.NOT_FOUND,
        description: 'Permission was not found',
      })
    }

    return PermissionMapper.unmarshalledToDomain(permission)
  }

  async create(permissionDomain: EntityPermission): Promise<EntityPermission> {
    try {
      const permission = await Permission.create(permissionDomain.unmarshal())
      const entity = PermissionMapper.unmarshalledToDomain(permission)
      return entity
    } catch (e) {
      throw new AppError({
        statusCode: HttpCode.BAD_REQUEST,
        description: 'Failed to create permission',
        error: e,
      })
    }
  }

  async update(
    id: string,
    permissionDomain: EntityPermission,
  ): Promise<EntityPermission> {
    const permission = await Permission.findByPk(id)
    if (!permission) {
      throw new AppError({
        statusCode: HttpCode.NOT_FOUND,
        description: 'Permission was not found',
      })
    }
    await permission.update(permissionDomain)
    await permission.reload()
    const entity = PermissionMapper.unmarshalledToDomain(permission)

    return entity
  }
}
