import { AuthDtoMapper } from '../../dtos/mappers/auth-mapper'
import { Request, Response } from 'express'
import { inject, injectable } from 'inversify'
import { AuthService } from '../../services/auth-service'
import { TYPES } from '../../types'
import { authValidation } from '../../presentation/validation/auth-validation'
import { AppError, HttpCode } from '../../libs/exceptions/app-error'
@injectable()
export default class AuthController {
  constructor(@inject(TYPES.AuthService) private _authService: AuthService) {}

  public async login(req: Request, res: Response): Promise<void> {
    const parseBody = authValidation.safeParse(req.body)
    if (!parseBody.success) {
      throw new AppError({
        statusCode: HttpCode.BAD_REQUEST,
        description: 'Request validation error',
        data: parseBody.error.flatten(),
      })
    }
    const authDto = AuthDtoMapper.toDto(parseBody.data)
    const authDetail = await this._authService.authentication(authDto)
    res.status(200).json({
      message: 'success',
      ...authDetail
    })
  }

  public async me(req: Request, res: Response): Promise<void> {
    const authDetail = await this._authService.me((await res.locals.Authorization)?.props.id)
    res.json({
      message: 'success',
      data: authDetail,
    })
  }
}
