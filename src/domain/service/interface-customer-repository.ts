import { Customer, UnmarshallCustomer } from '../models/customer'

export interface ICustomerRepository {
  findAll(): Promise<Customer[]>
  findById(id: string): Promise<Customer>
  create(customer: UnmarshallCustomer): Promise<Customer>
  update(id: string, customer: UnmarshallCustomer): Promise<Customer>
  delete(id: string): Promise<boolean>
}
