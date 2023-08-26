import { Request, Response } from 'express'
import { inject, injectable } from 'inversify'
import {
  UserHasRoleMapper,
  RoleHasPermissionMapper,
  UserHasModuleMapper,
} from '../../dtos/mappers/access-controll-mapper'
import { AccessControllService } from '../../services/access-controll'
import { TYPES } from '../../types'
@injectable()
export default class AccessControllController {
  constructor(
    @inject(TYPES.AccessControllService)
    private _accessControll: AccessControllService,
  ) {}
  public async addRoleUser(req: Request, res: Response): Promise<Response> {
    const userRoleCreateDto = UserHasRoleMapper.requestUserRoleCreateToDto(
      req.body,
    )
    const accessControll = await this._accessControll.addRoleUser(
      userRoleCreateDto,
    )
    return res.status(200).json({
      message: accessControll,
    })
  }

  public async addPermisisonRole(
    req: Request,
    res: Response,
  ): Promise<Response> {
    const rolePermissionCreateDto =
      RoleHasPermissionMapper.requestCreateRolePermissionToDto(req.body)
    const accessControll = await this._accessControll.addPermisisonRole(
      rolePermissionCreateDto,
    )
    return res.status(200).json({
      message: accessControll,
    })
  }

  public async addModuleUser(req: Request, res: Response): Promise<Response> {
    const userModuleCreateDto =
      UserHasModuleMapper.requestUserModuleCreateToDto(req.body)
    const accessControll = await this._accessControll.addModuleUser(
      userModuleCreateDto,
    )
    return res.status(200).json({
      message: accessControll,
    })
  }

  public async removeRoleUser(req: Request, res: Response): Promise<Response> {
    const userRoleRemoveDto = UserHasRoleMapper.requestUserRoleRemoveToDto(
      req.body,
    )
    const accessControll = await this._accessControll.removeRoleUser(
      userRoleRemoveDto,
    )
    return res.status(200).json({
      message: accessControll,
    })
  }

  public async removePermissionRole(
    req: Request,
    res: Response,
  ): Promise<Response> {
    const rolePermissionRemoveDto =
      RoleHasPermissionMapper.requestRemoveRolePermissionToDto(req.body)
    const accessControll = await this._accessControll.removePermisisonRole(
      rolePermissionRemoveDto,
    )

    return res.status(200).json({
      message: accessControll,
    })
  }

  public async removeModuleUser(
    req: Request,
    res: Response,
  ): Promise<Response> {
    const userModuleRemoveDto =
      UserHasModuleMapper.requestUserModuleRemoveToDto(req.body)
    const accessControll = await this._accessControll.removeModuleUser(
      userModuleRemoveDto,
    )
    return res.status(200).json({
      message: accessControll,
    })
  }
}
