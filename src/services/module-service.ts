import { inject, injectable } from 'inversify'
import { TYPES } from '../types'
import { IModuleRepository } from '../domain/service/interface-module-repository'
import { ModuleCreateDto, ModuleDto } from '../dtos/module-dto'
import { ModuleMapper } from '../dtos/mappers/module-mapper'

@injectable()
export class ModuleService {
  constructor(
    @inject(TYPES.ModuleRepository) private _repository: IModuleRepository,
  ) {}

  public async findAll(): Promise<ModuleDto[]> {
    const modules = await this._repository.findAll()
    const moduleDtos = modules.map((module) => ModuleMapper.domainToDto(module))
    return moduleDtos
  }

  public async findById(id: string): Promise<ModuleDto> {
    const module = await this._repository.findById(id)
    const moduleDto = ModuleMapper.domainToDto(module)
    return moduleDto
  }

  public async create(_module: ModuleCreateDto): Promise<ModuleDto> {
    const moduleDomain = ModuleMapper.dtoCreateToDomain(_module)
    const module = await this._repository.create(moduleDomain)
    const moduleDto = ModuleMapper.domainToDto(module)
    return moduleDto
  }

  public async update(
    id: string,
    _module: ModuleCreateDto,
  ): Promise<ModuleDto> {
    const moduleDomain = ModuleMapper.dtoUpdateToDomain(_module)
    const module = await this._repository.update(id, moduleDomain)
    const moduleDto = ModuleMapper.domainToDto(module)
    return moduleDto
  }
}
