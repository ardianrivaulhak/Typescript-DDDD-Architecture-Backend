import { UnmarshalledPermission } from '../../../domain/models/permission'
import { Model, Optional, DataTypes } from 'sequelize'
import { sequelize } from '../sequelize'

interface PermissionAttributes {
  id: string
  name: string
  description?: string
}

type PermissionCreationAttributes = Optional<PermissionAttributes, 'id'>

interface PermissionInstance
  extends Model<PermissionAttributes, PermissionCreationAttributes>,
    PermissionAttributes {
  created_at: Date
  updated_at: Date
  deleted_at: Date
}

const Permission = sequelize.define<PermissionInstance, UnmarshalledPermission>(
  'permission',
  {
    id: {
      allowNull: false,
      autoIncrement: false,
      primaryKey: true,
      type: DataTypes.STRING,
      unique: true,
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    description: {
      allowNull: true,
      type: DataTypes.STRING,
    },
  },
)

export { Permission, PermissionInstance }
