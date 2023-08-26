import { Request, Response } from 'express'
import { inject, injectable } from 'inversify'
import { TYPES } from '../../types'
import { ModuleService } from '../../services/module-service'
import { ModuleMapper } from '../../dtos/mappers/module-mapper'
import {
  moduleCreateScheme,
  moduleUpdateScheme,
} from '../../presentation/validation/module-validation'
import { HttpCode, AppError } from '../../libs/exceptions/app-error'

@injectable()
export default class ModuleController {
  constructor(
    @inject(TYPES.ModuleService) private _moduleService: ModuleService,
  ) {}

  public async listModules(req: Request, res: Response): Promise<void> {
    const modules = await this._moduleService.findAll()
    res.status(200).json({
      message: 'success',
      data: modules.map((val) => val),
    })
  }

  public async findModuleById(req: Request, res: Response): Promise<void> {
    const module = await this._moduleService.findById(req.params.id)
    res.status(200).json({
      message: 'success',
      data: module,
    })
  }

  public async createModule(req: Request, res: Response): Promise<void> {
    const parseBody = moduleCreateScheme.safeParse(req.body)
    if (!parseBody.success) {
      throw new AppError({
        statusCode: HttpCode.BAD_REQUEST,
        description: 'Request validation error',
        data: parseBody.error.flatten(),
      })
    }
    const module = ModuleMapper.requestCreateToDto(parseBody.data)
    const moduleService = await this._moduleService.create(module)
    res.status(200).json({
      message: 'success',
      data: moduleService,
    })
  }

  public async updateModule(req: Request, res: Response): Promise<void> {
    const parseBody = moduleUpdateScheme.safeParse(req.body)
    if (!parseBody.success) {
      throw new AppError({
        statusCode: HttpCode.BAD_REQUEST,
        description: 'Request validation error',
        data: parseBody.error.flatten(),
      })
    }
    const module = ModuleMapper.requestUpdateToDto(parseBody.data)
    const moduleService = await this._moduleService.update(
      req.params.id,
      module,
    )
    res.status(200).json({
      message: 'success',
      data: moduleService,
    })
  }
}
