import { UnmarshalledModule } from '../../../domain/models/module'
import * as Sequelize from 'sequelize'
import { sequelize } from '../sequelize'

interface ModuleAttributes {
  id: string
  name: string
  icon: string
  url?: string
  active: boolean
  parent_id?: string
}

type ModuleCreationAttributes = Sequelize.Optional<ModuleAttributes, 'id'>

interface ModuleInstance
  extends Sequelize.Model<ModuleAttributes, ModuleCreationAttributes>,
    ModuleAttributes {
  created_at: Date
  updated_at: Date
  deleted_at: Date
}

const Module = sequelize.define<ModuleInstance, UnmarshalledModule>(
  'module',
  {
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
    icon: {
      allowNull: false,
      type: Sequelize.DataTypes.TEXT,
    },
    url: {
      allowNull: false,
      type: Sequelize.DataTypes.STRING,
    },
    active: {
      allowNull: false,
      type: Sequelize.DataTypes.BOOLEAN,
    },
    parent_id: {
      allowNull: true,
      type: Sequelize.DataTypes.STRING,
    },
  },
  {
    underscored: true,
    paranoid: true,
  },
)

export { Module, ModuleInstance }
