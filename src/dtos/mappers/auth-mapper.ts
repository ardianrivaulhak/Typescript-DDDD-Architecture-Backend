import { UserSession } from '../../libs/authorization'
import { AuthDetailDto, AuthForLoginDto, UserAuthDto, UserDto } from '../user-dto'

export class AuthDtoMapper {
  public static toDto(raw: authRequest): AuthForLoginDto {
    return {
      email: raw.email,
      username: raw.username,
      password: raw.password,
    }
  }

  public static dtoToMiddleware(raw: UserDto): UserSession {
    return {
      id: raw.id,
      role: raw.roles,
      permission: raw.permissions,
    }
  }

  public static dtoToSession(raw: UserAuthDto): AuthDetailDto {
    return {
      token: raw.token,
      data: {
        id : raw.data.id,
        email : raw.data.email,
        username : raw.data.username,
        permissions : raw.data.permissions,
        roles : raw.data.roles,
      }
    }
  }
}

interface authRequest {
  username?: string | null | undefined
  email?: string | null | undefined
  password: string
}
