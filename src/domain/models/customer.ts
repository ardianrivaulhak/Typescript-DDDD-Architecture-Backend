import { Entity } from './entity'
import { UnmarshalledUser, User } from './user'
export interface UnmarshallCustomer {
  id?: string
  fullname: string
  address: string
  telp: string
  user_id: string
  createdBy?: UnmarshalledUser
}

export class Customer extends Entity<UnmarshallCustomer> {
  private constructor(props: UnmarshallCustomer) {
    const { id, ...data } = props
    super(data, id)
  }

  public static create(props: UnmarshallCustomer): Customer {
    const instance = new Customer(props)

    return instance
  }

  get id(): string {
    return this._id
  }

  get fullname(): string {
    return this.props.fullname
  }

  get address(): string {
    return this.props.address
  }

  get telp(): string {
    return this.props.telp
  }

  get user_id(): string {
    return this.props.user_id
  }
}
