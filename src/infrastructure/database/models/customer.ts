import * as Sequelize from 'sequelize'
import { sequelize } from '../sequelize'
import { UnmarshallCustomer } from '../../../domain/models/customer'

interface CustomerAttributes {
  id: string
  fullname: string
  address: string
  telp: string
  user_id: string
}

type CustomerCreationAttributes = Sequelize.Optional<CustomerAttributes, 'id'>
interface CustomerInstance
  extends Sequelize.Model<CustomerInstance, CustomerCreationAttributes>,
    CustomerAttributes {
  created_at: Date
  updated_at: Date
  deleted_at: Date
}

const Customer = sequelize.define<CustomerInstance, UnmarshallCustomer>(
  'customer',
  {
    id: {
      type: Sequelize.STRING,
      primaryKey: true,
    },
    fullname: Sequelize.STRING,
    address: Sequelize.STRING,
    telp: Sequelize.STRING,
    user_id: Sequelize.STRING,
  },
  {
    underscored: true,
    paranoid: true,
  },
)

export { Customer, CustomerInstance }
