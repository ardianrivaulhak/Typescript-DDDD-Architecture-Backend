import { UnmarshalledUserHasModule } from '../../../domain/models/user-module'
import { Model, DataTypes } from 'sequelize'
import { sequelize } from '../sequelize'

interface UserModuleAttributes {
  user_id: string
  module_id: string[]
}

// type UserModuleCreationAttributes = Optional<UserModuleAttributes>

interface UserModuleInstance
  extends Model<UserModuleAttributes>,
    UserModuleAttributes {
  created_at: Date
  updated_at: Date
  deleted_at: Date
}

const UserModule = sequelize.define<
  UserModuleInstance,
  UnmarshalledUserHasModule
>(
  'user_has_module',
  {
    user_id: {
      type: DataTypes.STRING,
    },
    module_id: {
      type: DataTypes.STRING,
    },
  },
  {
    underscored: true,
    paranoid: true,
  },
)

export { UserModule }
