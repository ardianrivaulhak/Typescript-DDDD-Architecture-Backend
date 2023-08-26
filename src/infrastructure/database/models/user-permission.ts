import { Model, Optional, DataTypes } from 'sequelize'
import { sequelize } from '../sequelize'

interface UserPermissionAttributes {
  user_id: string
  permission_id: string
}

interface UserPermissionInstance
  extends Model<UserPermissionAttributes>,
    UserPermissionAttributes {
  created_at: Date
  updated_at: Date
  deleted_at: Date
}

const UserPermission = sequelize.define<UserPermissionInstance>(
  'user_has_Permission',
  {
    user_id: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    permission_id: {
      allowNull: false,
      type: DataTypes.STRING,
    },
  },
  {
    underscored: true,
    paranoid: true,
  },
)

export { UserPermission }
