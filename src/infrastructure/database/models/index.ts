// Core Model Import
import { Role } from './role'
import { Permission } from './permission'
import { RolePermission } from './role-permission'
import { User } from './user'
import { UserRole } from './user-role'
import { Module } from './module'
import { UserModule } from './user-module'
import { UserPermission } from './user-permission'
import { Customer } from './customer'

// Apps Model Import

/**import all apps model here */

// Core Sequelize Model Synchronization
User.sync({ alter: { drop: false } })
Role.sync({ alter: { drop: false } })
Permission.sync({ alter: { drop: false } })
Module.sync({ alter: { drop: false } })
RolePermission.sync({ alter: { drop: false } })
UserRole.sync({ alter: { drop: false } })
UserPermission.sync({ alter: { drop: false } })
UserModule.sync({ alter: { drop: false } })
Customer.sync({ alter: { drop: false } })
// Apps Sequelize Model Synchronization
/** synchronize all apps sequelize model here */

// Core Sequelize Model Assosiation
Permission.belongsToMany(Role, {
  through: RolePermission,
  foreignKey: 'permission_id',
  otherKey: 'role_id',
})
Role.belongsToMany(Permission, {
  through: RolePermission,
  foreignKey: 'role_id',
  otherKey: 'permission_id',
})
Role.belongsToMany(User, {
  through: UserRole,
  foreignKey: 'role_id',
  otherKey: 'user_id',
})
User.belongsToMany(Role, {
  through: UserRole,
  foreignKey: 'user_id',
  otherKey: 'role_id',
})
Module.belongsToMany(User, {
  through: UserModule,
  foreignKey: 'module_id',
  otherKey: 'user_id',
})

Customer.belongsTo(User, {
  foreignKey: 'user_id',
  as: 'createdBy',
})

// Apps Sequelize Model Assosiation
/** associate all apps model here */

export * from './user'
export * from './role'
export * from './module'
export * from './permission'
export * from './role-permission'
export * from './customer'
