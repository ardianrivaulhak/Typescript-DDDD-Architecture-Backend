import {
  PermissionCreateDto,
  PermissionDto,
  PermissionUpdateDto,
} from '../permission-dto'
import {
  UnmarshalledPermission,
  Permission,
} from '../../domain/models/permission'

export class PermissionMapper {
  public static requestCreateToDto(
    raw: permissionRequest,
  ): PermissionCreateDto {
    return {
      name: raw.name,
      description: raw.description,
    }
  }
  public static requestUpdateToDto(
    raw: permissionRequest,
  ): PermissionUpdateDto {
    return {
      name: raw.name,
      description: raw.description,
    }
  }
  public static dtoCreateToDomain(
    raw: PermissionCreateDto,
  ): UnmarshalledPermission {
    return Permission.create({
      name: raw.name,
      description: raw.description,
    })
  }

  public static dtoUpdateToDomain(
    raw: PermissionCreateDto,
  ): UnmarshalledPermission {
    return Permission.create({
      name: raw.name,
      description: raw.description,
    })
  }

  public static domainToDto(raw: Permission): PermissionDto {
    return {
      id: raw.id,
      name: raw.name,
      description: raw.description,
    }
  }
  public static unmarshalledToDomain(raw: UnmarshalledPermission): Permission {
    return Permission.create({
      id: raw.id,
      name: raw.name,
      description: raw.description,
    })
  }
}

interface permissionRequest {
  name: string
  description?: string
}
