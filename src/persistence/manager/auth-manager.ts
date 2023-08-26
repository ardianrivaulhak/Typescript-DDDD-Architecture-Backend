import { IAuthManager } from './auth-interface'
import { injectable } from 'inversify'
import * as jwt from 'jsonwebtoken'
import { AuthForLoginDto, UserAuthDto } from '../../dtos/user-dto'
import { User, UserInstance } from '../../infrastructure/database/models/user'
import { Role } from '../../infrastructure/database/models/role'

import { JWT_SECRET } from '../../libs/utils'
import { User as EntityUser } from '../../domain/models/user'
import { UserMapper } from '../../dtos/mappers/user-mapper'
import { Permission } from '../../infrastructure/database/models'
import { HttpCode, AppError } from '../../libs/exceptions/app-error'

@injectable()
export class AuthManager implements IAuthManager {
  async authentication(authDto: AuthForLoginDto): Promise<UserAuthDto> {
    if (!authDto.email && !authDto.username) {
      throw new AppError({
        statusCode: HttpCode.VALIDATION_ERROR,
        description: 'Email or Username is required',
      })
    }
    const user = await User.findOne({
      where: {
        [authDto.email ? 'email' : 'username']:
          authDto.email || authDto.username,
      },
    })
    if (user != null) {
      if (JWT_SECRET) {
        const secretOrKey: string = JWT_SECRET
        const compare = await user.comparePassword(authDto.password)
        const userDomain = await this.me(user.id)
        const _user = UserMapper.domainToDto(userDomain)
        const token = jwt.sign(
          {
            id: user.id,
            username: user.username,
          },
          secretOrKey,
          { expiresIn: '1h' },
        )
        if (compare) {
          return {
            token: `jwt ${token}`,
            data: _user,
          }
        } else {
          throw new AppError({
            statusCode: HttpCode.BAD_REQUEST,
            description: 'Invalid password',
          })
        }
      } else {
        throw new AppError({
          statusCode: HttpCode.UNAUTHORIZED,
          description: 'Secret key is not defined',
        })
      }
    } else {
      throw new AppError({
        statusCode: HttpCode.BAD_REQUEST,
        description: 'Invalid username not found',
      })
    }
  }

  async me(id: string): Promise<EntityUser> {
    const user = await User.findByPk<UserInstance>(id, {
      include: [
        {
          model: Role,
          attributes: ['name'],
          through: {
            attributes: [],
          },
          include: [
            {
              model: Permission,
              attributes: ['name'],
              through: {
                attributes: [],
              },
            },
          ],
        },
      ],
    })
    if (!user) {
      throw new AppError({
        statusCode: HttpCode.BAD_REQUEST,
        description: 'User not found',
      })
    }
    return UserMapper.unmarshalledToDomain(user)
  }
}
