import { User } from '../../domain/models/user'
import { AuthForLoginDto, UserAuthDto } from '../../dtos/user-dto'
export interface IAuthManager {
  authentication(authDto: AuthForLoginDto): Promise<UserAuthDto>
  me(id: string): Promise<User>
}
