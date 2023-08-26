interface PermissionBaseDto {
  name: string
  description?: string
}
export type PermissionCreateDto = PermissionBaseDto
export type PermissionUpdateDto = PermissionBaseDto

export interface PermissionDto extends PermissionBaseDto {
  id: string
}

export interface RolePermissionBaseDto {
  role_id: string
  permission_id: string[]
}

export type RolePermissionCreateDto = RolePermissionBaseDto
export type RolePermissionRemoveDto = RolePermissionBaseDto

export type RolePermissionDto = RolePermissionBaseDto
