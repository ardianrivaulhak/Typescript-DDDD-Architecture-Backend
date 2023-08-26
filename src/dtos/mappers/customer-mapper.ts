import { Customer, UnmarshallCustomer } from 'domain/models/customer'
import {
  CustomerCreateDto,
  CustomerUpdateDto,
  CustomerBaseDto,
  CustomerDto,
} from '../customer-dto'

export class CustomerMapper {
  public static requestCreateCust(raw: CustomerRequest): CustomerCreateDto {
    return {
      id: raw.id,
      fullname: raw.fullname,
      address: raw.address,
      telp: raw.telp,
      user_id: raw.user_id,
    }
  }

  public static RequestUpdateCust(raw: CustomerRequest): CustomerUpdateDto {
    return {
      id: raw.id,
      fullname: raw.fullname,
      address: raw.address,
      telp: raw.telp,
      user_id: raw.user_id,
    }
  }

  public static domainToDto(raw: Customer): CustomerDto {
    return {
      id: raw.id,
      fullname: raw.fullname,
      address: raw.address,
      telp: raw.telp,
      createdBy: [],
    }
  }
}

interface CustomerRequest {
  id: string
  fullname: string
  address: string
  telp: string
  user_id: string
}
