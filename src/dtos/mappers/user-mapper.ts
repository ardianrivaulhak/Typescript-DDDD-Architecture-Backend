import { UserCreateDto, UserDto, UserUpdateDto } from '../user-dto'
import { UnmarshalledUser, User } from '../../domain/models/user'
// import { UserSession } from '../../libs/authorization'

export class UserMapper {
  public static requestCreateToDto(raw: UserRequest): UserCreateDto {
    return {
      username: raw.username,
      email: raw.email,
      password: raw.password,
    }
  }

  public static requestUpdateToDto(raw: UserRequest): UserUpdateDto {
    return {
      username: raw.username,
      email: raw.email,
      password: raw.password,
    }
  }

  public static dtoCreateToDomain(raw: UserCreateDto): User {
    return User.create({
      username: raw.username,
      email: raw.email,
      password: raw.password,
    })
  }

  public static dtoUpdateToDomain(raw: UserUpdateDto): User {
    return User.create({
      username: raw.username,
      email: raw.email,
      password: raw.password,
    })
  }

  public static domainToDto(raw: User): UserDto {
    return {
      id: raw.id,
      username: raw.username,
      email: raw.email,
      roles: raw.roles,
    }
  }

  public static unmarshalledToDomain(raw: UnmarshalledUser): User {
    return User.create({
      id: raw.id,
      username: raw.username,
      email: raw.email,
      password: raw.password,
      roles: raw.roles,
    })
  }

}

interface UserRequest {
  username: string
  password: string
  email: string
}
