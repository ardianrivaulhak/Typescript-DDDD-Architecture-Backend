export interface UserBaseDto {
  email: string
  username: string
  password: string
}

export type UserCreateDto = UserBaseDto
export type UserUpdateDto = UserBaseDto

interface Permission {
  id: string
  name: string
}

interface Role {
  id: string
  name: string
  permissions: Permission[]
}

export interface UserDto {
  id: string
  email: string
  username: string
  roles?: Role[]
  permissions?: Permission[]
}

export interface UserAuthDto {
  token : string,
  data : UserDto
}

export interface AuthForLoginDto {
  email: string | null | undefined
  username: string | null | undefined
  password: string
}

export interface AuthDetailDto {
  token: string
  data: UserDto
}
