import * as Sequelize from 'sequelize'
import { sequelize } from '../sequelize'
import { Permission } from '../../../domain/models/permission'

interface RoleAttributes {
  id: string
  name: string
  description?: string
}

type RoleCreationAttributes = Sequelize.Optional<RoleAttributes, 'id'>

interface RoleInstance
  extends Sequelize.Model<RoleAttributes, RoleCreationAttributes>,
    RoleAttributes {
  created_at: Date
  updated_at: Date
  deleted_at: Date
  addPermission: Sequelize.BelongsToManyAddAssociationMixin<
    Permission,
    string[]
  >
  removePermission: Sequelize.BelongsToManyRemoveAssociationMixin<
    Permission,
    string[]
  >
}

const Role = sequelize.define<RoleInstance>('role', {
  id: {
    allowNull: false,
    autoIncrement: false,
    primaryKey: true,
    type: Sequelize.DataTypes.STRING,
    unique: true,
  },
  name: {
    allowNull: false,
    type: Sequelize.DataTypes.STRING,
  },
  description: {
    allowNull: true,
    type: Sequelize.DataTypes.STRING,
  },
})

export { Role, RoleInstance }
