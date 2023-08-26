import { ModuleCreateDto, ModuleDto, ModuleUpdateDto } from '../module-dto'
import { UnmarshalledModule, Module } from '../../domain/models/module'
export class ModuleMapper {
  public static requestCreateToDto(raw: ModuleRequest): ModuleCreateDto {
    return {
      name: raw.name,
      icon: raw.icon,
      url: raw.url,
      active: raw.active,
      parent_id: raw.parent_id,
    }
  }

  public static requestUpdateToDto(raw: ModuleRequest): ModuleUpdateDto {
    return {
      name: raw.name,
      icon: raw.icon,
      url: raw.url,
      active: raw.active,
      parent_id: raw.parent_id,
    }
  }

  public static dtoCreateToDomain(raw: ModuleCreateDto): Module {
    return Module.create({
      name: raw.name,
      icon: raw.icon,
      url: raw.url,
      active: raw.active,
      parent_id: raw.parent_id,
    })
  }

  public static dtoUpdateToDomain(raw: ModuleUpdateDto): Module {
    return Module.create({
      name: raw.name,
      icon: raw.icon,
      url: raw.url,
      active: raw.active,
      parent_id: raw.parent_id,
    })
  }

  public static domainToDto(raw: Module): ModuleDto {
    return {
      id: raw.id,
      name: raw.name,
      icon: raw.icon,
      url: raw.url,
      active: raw.active,
      parent_id: raw.parent_id,
    }
  }

  public static unmarshalledToDomain(raw: UnmarshalledModule): Module {
    return Module.create({
      id: raw.id,
      name: raw.name,
      icon: raw.icon,
      url: raw.url,
      active: raw.active,
      parent_id: raw.parent_id,
    })
  }
}

interface ModuleRequest {
  name: string
  icon: string
  url?: string
  active: boolean
  parent_id?: string
}
