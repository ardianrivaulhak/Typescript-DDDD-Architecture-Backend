import { Module as EntityModule } from '../../domain/models/module'
import { IModuleRepository } from '../../domain/service/interface-module-repository'
import { injectable } from 'inversify'
import { ModuleMapper } from '../../dtos/mappers/module-mapper'
import { Module, ModuleInstance } from '../../infrastructure/database/models'
import { AppError, HttpCode } from '../../libs/exceptions/app-error'

@injectable()
export class ModuleSequelizeRepository implements IModuleRepository {
  async findAll(): Promise<EntityModule[]> {
    const modules = await Module.findAll({
      attributes: ['id', 'name', 'icon', 'url', 'active'],
    })

    return modules.map((module) => ModuleMapper.unmarshalledToDomain(module))
  }

  async findById(id: string): Promise<EntityModule> {
    const module = await Module.findByPk<ModuleInstance>(id)
    if (!module) {
      throw new AppError({
        statusCode: HttpCode.NOT_FOUND,
        description: 'Module was not found',
      })
    }

    return ModuleMapper.unmarshalledToDomain(module)
  }

  async create(moduleDomain: EntityModule): Promise<EntityModule> {
    try {
      const module = await Module.create(moduleDomain.unmarshal())
      const entity = ModuleMapper.unmarshalledToDomain(module)
      return entity
    } catch (e) {
      throw new AppError({
        statusCode: HttpCode.BAD_REQUEST,
        description: 'Failed To create module',
        error: e,
      })
    }
  }

  async update(id: string, moduleDomain: EntityModule): Promise<EntityModule> {
    const module = await Module.findByPk(id)
    if (!module) {
      throw new AppError({
        statusCode: HttpCode.NOT_FOUND,
        description: 'Module was not found',
      })
    }
    await module.update(moduleDomain.unmarshal())
    await module.reload()
    const entity = ModuleMapper.unmarshalledToDomain(module)

    return entity
  }
}
