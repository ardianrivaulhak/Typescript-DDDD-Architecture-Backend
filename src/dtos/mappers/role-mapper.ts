import { RoleCreateDto, RoleDto, RoleUpdateDto } from '../role-dto'
import { UnmarshalledRole, Role } from '../../domain/models/role'
export class RoleMapper {
  public static requestCreateToDto(raw: roleRequest): RoleCreateDto {
    return {
      name: raw.name,
      description: raw.description,
    }
  }

  public static requestUpdateToDto(raw: roleRequest): RoleUpdateDto {
    return {
      name: raw.name,
      description: raw.description,
    }
  }

  public static dtoCreateToDomain(raw: RoleCreateDto): Role {
    return Role.create({
      name: raw.name,
      description: raw.description,
    })
  }
  public static dtoUpdateToDomain(raw: RoleUpdateDto): Role {
    return Role.create({
      name: raw.name,
      description: raw.description,
    })
  }
  public static domainToDto(raw: Role): RoleDto {
    return {
      id: raw.id,
      name: raw.name,
      description: raw.description,
    }
  }

  public static unmarshalledToDomain(raw: UnmarshalledRole): Role {
    return Role.create({
      id: raw.id,
      name: raw.name,
      description: raw.description,
    })
  }
}

interface roleRequest {
  name: string
  description?: string
}
