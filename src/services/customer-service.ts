import { inject, injectable } from 'inversify'
import { TYPES } from '../types'
import { ICustomerRepository } from '../domain/service/interface-customer-repository'
import {
  CustomerDto,
  CustomerCreateDto,
  CustomerUpdateDto,
  CustomerDetailDto,
} from '../dtos/customer-dto'
import { CustomerMapper } from '../dtos/mappers/customer-mapper'

@injectable()
export class CustomerService {
  constructor(
    @inject(TYPES.UserRepository) private _cust: ICustomerRepository,
  ) {}

  public async findAll(): Promise<CustomerDto[]> {
    try {
      const cust = await this._cust.findAll()
      const custDto = cust.map((user) => CustomerMapper.domainToDto(user))
      return custDto
    } catch (error) {
      console.log(error)
      throw error
    }
  }

  public async createCustomer(_cust: CustomerCreateDto): Promise<CustomerDto> {
    try {
      const custDomain = CustomerMapper.requestCreateCust(_cust)
      const cust = await this._cust.create(custDomain)
      const custDto = CustomerMapper.domainToDto(cust)
      return custDto
    } catch (error) {
      console.log(error)
      throw error
    }
  }
}
