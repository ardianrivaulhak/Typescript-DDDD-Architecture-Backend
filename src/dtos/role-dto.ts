export interface RoleBaseDto {
  name: string
  description?: string
}
export type RoleCreateDto = RoleBaseDto
export type RoleUpdateDto = RoleBaseDto

export interface RoleDto {
  id: string
  name: string
  description?: string
}

export interface UserRoleBaseDto {
  user_id: string
  role_id: string[]
}

export type UserRoleCreateDto = UserRoleBaseDto

export type UserRoleRemoveDto = UserRoleBaseDto

export type UserRoleDto = UserRoleBaseDto
