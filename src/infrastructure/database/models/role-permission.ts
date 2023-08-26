import { UnmarshalledRoleHasPermission } from '../../../domain/models/role-permission'
import { Model, DataTypes } from 'sequelize'
import { sequelize } from '../sequelize'

interface RolePermissionAttributes {
  role_id: string
  permission_id: string
}

interface RolePermissionInstance
  extends Model<RolePermissionAttributes>,
    RolePermissionAttributes {
  created_at: Date
  updated_at: Date
  deleted_at: Date
}

const RolePermission = sequelize.define<
  RolePermissionInstance,
  UnmarshalledRoleHasPermission
>('role_has_Permission', {
  role_id: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  permission_id: {
    allowNull: false,
    type: DataTypes.STRING,
  },
})
RolePermission.removeAttribute('id')

export { RolePermission }
