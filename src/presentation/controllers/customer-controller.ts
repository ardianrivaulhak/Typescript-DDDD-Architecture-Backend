import { Request, Response } from 'express'
import { inject, injectable } from 'inversify'
import { TYPES } from '../../types'
import { HttpCode, AppError } from '../../libs/exceptions/app-error'
import { CustomerService } from '../../services/customer-service'

@injectable()
export default class CustomerController {
  constructor(
    @inject(TYPES.CustomerService) private _custServ: CustomerService,
  ) {}

  public async listCustomers(
    req: Request,
    res: Response,
  ): Promise<Response<any, Record<string, any>>> {
    return this._custServ
      .findAll()
      .then((x) => {
        return res.status(200).json({
          message: 'success',
          data: x.map((val) => val),
        })
      })
      .catch((err) => {
        return res.status(500).json({
          message: 'Internal Server Error',
          error: err,
        })
      })
  }
}
