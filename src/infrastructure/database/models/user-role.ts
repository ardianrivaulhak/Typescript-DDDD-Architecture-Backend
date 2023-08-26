import { UnmarshalledUserHasRole } from '../../../domain/models/user-role'
import { Model, DataTypes } from 'sequelize'
import { sequelize } from '../sequelize'

interface UserRoleAttributes {
  user_id: string
  role_id: string[]
}

interface UserRoleInstance
  extends Model<UserRoleAttributes>,
    UserRoleAttributes {
  created_at: Date
  updated_at: Date
  deleted_at: Date
}

const UserRole = sequelize.define<UserRoleInstance, UnmarshalledUserHasRole>(
  'user_has_role',
  {
    user_id: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    role_id: {
      allowNull: false,
      type: DataTypes.STRING,
    },
  },
)

UserRole.removeAttribute('id')

export { UserRole }
