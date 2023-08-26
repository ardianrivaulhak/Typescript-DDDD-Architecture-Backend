export interface ModuleBaseDto {
  name: string
  icon: string
  url?: string
  active: boolean
  parent_id?: string
}

export type ModuleCreateDto = ModuleBaseDto
export type ModuleUpdateDto = ModuleBaseDto

export interface ModuleDto {
  id: string
  name: string
  icon: string
  url?: string
  active: boolean
  parent_id?: string
}

export interface UserModuleBase {
  user_id: string
  module_id: string[]
}
export type UserModuleCreateDto = UserModuleBase

export type UserModuleRemoveDto = UserModuleBase

export type UserModuleDto = UserModuleBase
