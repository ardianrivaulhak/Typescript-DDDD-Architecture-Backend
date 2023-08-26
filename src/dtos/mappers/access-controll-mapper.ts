import { UserRoleCreateDto, UserRoleDto, UserRoleRemoveDto } from '../role-dto'
import {
  RolePermissionCreateDto,
  RolePermissionDto,
  RolePermissionRemoveDto,
} from '../permission-dto'
import {
  UnmarshalledUserHasRole,
  UserHasRole,
} from '../../domain/models/user-role'
import {
  RoleHasPermission,
  UnmarshalledRoleHasPermission,
} from '../../domain/models/role-permission'
import {
  UserModuleCreateDto,
  UserModuleDto,
  UserModuleRemoveDto,
} from '../../dtos/module-dto'
import {
  UnmarshalledUserHasModule,
  UserHasModule,
} from '../../domain/models/user-module'

export class UserHasRoleMapper {
  public static requestUserRoleCreateToDto(
    raw: userRoleRequest,
  ): UserRoleCreateDto {
    return {
      user_id: raw.user_id,
      role_id: raw.role_id,
    }
  }

  public static requestUserRoleRemoveToDto(
    raw: userRoleRequest,
  ): UserRoleRemoveDto {
    return {
      user_id: raw.user_id,
      role_id: raw.role_id,
    }
  }
  public static dtoCreateToDomain(raw: UserRoleCreateDto): UserHasRole {
    return UserHasRole.create({
      user_id: raw.user_id,
      role_id: raw.role_id,
    })
  }

  public static dtoRemoveToDomain(raw: UserRoleCreateDto): UserHasRole {
    return UserHasRole.create({
      user_id: raw.user_id,
      role_id: raw.role_id,
    })
  }

  public static domainToDto(raw: UserHasRole): UserRoleDto {
    return {
      user_id: raw.user,
      role_id: raw.role,
    }
  }

  public static unmarshalledToDomain(
    raw: UnmarshalledUserHasRole,
  ): UserHasRole {
    return UserHasRole.create({
      user_id: raw.user_id,
      role_id: raw.role_id,
    })
  }
}

export class RoleHasPermissionMapper {
  public static requestCreateRolePermissionToDto(
    raw: rolePermissionRequest,
  ): RolePermissionCreateDto {
    return {
      role_id: raw.role_id,
      permission_id: raw.permission_id,
    }
  }

  public static requestRemoveRolePermissionToDto(
    raw: rolePermissionRequest,
  ): RolePermissionRemoveDto {
    return {
      role_id: raw.role_id,
      permission_id: raw.permission_id,
    }
  }

  public static dtoCreateToDomain(
    raw: RolePermissionCreateDto,
  ): RoleHasPermission {
    return RoleHasPermission.create({
      role_id: raw.role_id,
      permission_id: raw.permission_id,
    })
  }

  public static dtoRemoveoDomain(
    raw: RolePermissionRemoveDto,
  ): RoleHasPermission {
    return RoleHasPermission.create({
      role_id: raw.role_id,
      permission_id: raw.permission_id,
    })
  }

  public static domainToDto(raw: RoleHasPermission): RolePermissionDto {
    return {
      role_id: raw.role,
      permission_id: raw.permission,
    }
  }

  public static unmarshalledToDomain(
    raw: UnmarshalledRoleHasPermission,
  ): RoleHasPermission {
    return RoleHasPermission.create({
      role_id: raw.role_id,
      permission_id: raw.permission_id,
    })
  }
}

export class UserHasModuleMapper {
  public static requestUserModuleCreateToDto(
    raw: userModuleRequest,
  ): UserModuleCreateDto {
    return {
      user_id: raw.user_id,
      module_id: raw.module_id,
    }
  }

  public static requestUserModuleRemoveToDto(
    raw: userModuleRequest,
  ): UserModuleRemoveDto {
    return {
      user_id: raw.user_id,
      module_id: raw.module_id,
    }
  }
  public static dtoCreateToDomain(raw: UserModuleCreateDto): UserHasModule {
    return UserHasModule.create({
      user_id: raw.user_id,
      module_id: raw.module_id,
    })
  }

  public static dtoRemoveToDomain(raw: UserModuleCreateDto): UserHasModule {
    return UserHasModule.create({
      user_id: raw.user_id,
      module_id: raw.module_id,
    })
  }

  public static domainToDto(raw: UserHasModule): UserModuleDto {
    return {
      user_id: raw.user,
      module_id: raw.module,
    }
  }

  public static unmarshalledToDomain(
    raw: UnmarshalledUserHasModule,
  ): UserHasModule {
    return UserHasModule.create({
      user_id: raw.user_id,
      module_id: raw.module_id,
    })
  }
}
interface userRoleRequest {
  user_id: string
  role_id: string[]
}

interface userModuleRequest {
  user_id: string
  module_id: string[]
}

interface rolePermissionRequest {
  role_id: string
  permission_id: string[]
}
