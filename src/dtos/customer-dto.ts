import { User, UnmarshalledUser } from 'domain/models/user'

export interface CustomerBaseDto {
  id: string
  fullname: string
  address: string
  telp: string
  user_id: string
}

export type CustomerCreateDto = CustomerBaseDto
export type CustomerUpdateDto = CustomerBaseDto

export interface CustomerDto {
  id: string
  fullname: string
  address: string
  telp: string
  createdBy?: User[]
}

export interface CustomerDetailDto {
  token: string
  data: CustomerDto
}
