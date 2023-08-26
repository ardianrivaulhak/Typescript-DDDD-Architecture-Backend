import { Role as EntityRole, UnmarshalledRole } from '../../domain/models/role'
import { IRoleRepository } from '../../domain/service/interface-role-repository'
import { injectable } from 'inversify'
import { RoleMapper } from '../../dtos/mappers/role-mapper'
import { Role, RoleInstance } from '../../infrastructure/database/models'
import { AppError, HttpCode } from '../../libs/exceptions/app-error'
@injectable()
export class RoleSequelizeRepository implements IRoleRepository {
  async findAll(): Promise<EntityRole[]> {
    const roles = await Role.findAll({
      attributes: ['id', 'name', 'description'],
    })

    return roles.map((role) => RoleMapper.unmarshalledToDomain(role))
  }

  async findById(id: string): Promise<EntityRole> {
    const role = await Role.findByPk<RoleInstance>(id)
    if (!role) {
      throw new AppError({
        statusCode: HttpCode.NOT_FOUND,
        description: 'Role was not found',
      })
    }
    return RoleMapper.unmarshalledToDomain(role)
  }

  async create(roleDomain: EntityRole): Promise<EntityRole> {
    try {
      const role = await Role.create(roleDomain.unmarshal())
      const entity = RoleMapper.unmarshalledToDomain(role)
      return entity
    } catch (e) {
      throw new AppError({
        statusCode: HttpCode.BAD_REQUEST,
        description: 'Failed to create Role',
        error: e,
      })
    }
  }

  async update(id: string, roleDomain: UnmarshalledRole): Promise<EntityRole> {
    const role = await Role.findByPk(id)
    if (!role) {
      throw new AppError({
        statusCode: HttpCode.NOT_FOUND,
        description: 'Role was not found',
      })
    }
    await role.update(roleDomain)
    await role.reload()
    const entity = RoleMapper.unmarshalledToDomain(role)

    return entity
  }
}
