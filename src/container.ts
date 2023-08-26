import 'reflect-metadata'
import { Container } from 'inversify'
import { TYPES } from './types'

// Routes
import { Routes } from './presentation/routes/routes'
import { UserRoutes } from './presentation/routes/user-routes'
import { AccessControllRoutes } from './presentation/routes/access-controll-routes'
import { AuthRoutes } from './presentation/routes/auth-routes'
import { AuthMiddleware } from './presentation/middlewares/check-jwt'
import { PermissionMiddleware } from './presentation/middlewares/check-permission'
import { CustomerRoutes } from './presentation/routes/customer-routes'

// Domain Service
import { IUserRepository } from './domain/service/interface-user-repository'
import { IRoleRepository } from './domain/service/interface-role-repository'
import { IPermissionRepository } from './domain/service/interface-permission-repository'
import { IModuleRepository } from './domain/service/interface-module-repository'
import { IAuthManager } from './persistence/manager/auth-interface'

// Domain Service / Infrastructur implementation
import { UserSequelizeRepository } from './persistence/repository/user-repository'
import { RoleSequelizeRepository } from './persistence/repository/role-repository'
import { PermissionSequelizeRepository } from './persistence/repository/permission-repository'
import { ModuleSequelizeRepository } from './persistence/repository/module-repository'
import { AuthManager } from './persistence/manager/auth-manager'

// Service Implementation
import { UserService } from './services/user-service'
import { RoleService } from './services/role-service'
import { PermissionService } from './services/permission-service'
import { ModuleService } from './services/module-service'
import { AuthService } from './services/auth-service'
import { CustomerService } from './services/customer-service'

// Controller
import AuthController from './presentation/controllers/auth-controller'
import UserController from './presentation/controllers/user-controller'
import AccessControllController from './presentation/controllers/access-controll-controller'
import RoleController from './presentation/controllers/role-controller'
import PermissionController from './presentation/controllers/permission-controller'
import ModuleController from './presentation/controllers/module-controller'
import CustomerController from './presentation/controllers/customer-controller'

// Bootstrap / kernel
import { IServer, Server } from './presentation/server'
import { RoleRoutes } from './presentation/routes/role-routes'
import { PermissionRoutes } from './presentation/routes/permission-routes'
import { ModuleRoutes } from './presentation/routes/module-routes'
import { AccessControllService } from './services/access-controll'
import { IAccessControll } from './domain/service/interface-access-controll'
import { AccessControllManager } from './persistence/manager/access-controll-manager'

const container = new Container()

// Kernel Bootstrap
container.bind<IServer>(TYPES.Server).to(Server).inSingletonScope()

// Middleware And Router
container
  .bind<AuthMiddleware>(TYPES.AuthMiddleware)
  .to(AuthMiddleware)
  .inSingletonScope()
container
  .bind<PermissionMiddleware>(TYPES.PermissionMiddleware)
  .to(PermissionMiddleware)
  .inSingletonScope()
container.bind<Routes>(Routes).toSelf().inSingletonScope()
container.bind<UserRoutes>(UserRoutes).toSelf().inSingletonScope()
container.bind<AuthRoutes>(AuthRoutes).toSelf().inSingletonScope()
container.bind<RoleRoutes>(RoleRoutes).toSelf().inSingletonScope()
container.bind<PermissionRoutes>(PermissionRoutes).toSelf().inSingletonScope()
container.bind<ModuleRoutes>(ModuleRoutes).toSelf().inSingletonScope()
container
  .bind<AccessControllRoutes>(AccessControllRoutes)
  .toSelf()
  .inSingletonScope()
container.bind<CustomerRoutes>(CustomerRoutes).toSelf().inSingletonScope()

// Service Layer
container.bind(TYPES.UserService).to(UserService)
container.bind(TYPES.AuthService).to(AuthService)
container.bind(TYPES.RoleService).to(RoleService)
container.bind(TYPES.PermissionService).to(PermissionService)
container.bind(TYPES.ModuleService).to(ModuleService)
container.bind(TYPES.AccessControllService).to(AccessControllService)
container.bind(TYPES.CustomerService).to(CustomerService)

// Controller
container.bind(UserController).to(UserController)
container.bind(AuthController).to(AuthController)
container.bind(RoleController).to(RoleController)
container.bind(PermissionController).to(PermissionController)
container.bind(ModuleController).to(ModuleController)
container.bind(AccessControllController).to(AccessControllController)
container.bind(CustomerController).to(CustomerController)

// implement infrastructur

container.bind<IAuthManager>(TYPES.AuthManager).to(AuthManager)
container
  .bind<IUserRepository>(TYPES.UserRepository)
  .to(UserSequelizeRepository)
container
  .bind<IRoleRepository>(TYPES.RoleRepository)
  .to(RoleSequelizeRepository)
container
  .bind<IPermissionRepository>(TYPES.PermissionRepository)
  .to(PermissionSequelizeRepository)
container
  .bind<IModuleRepository>(TYPES.ModuleRepository)
  .to(ModuleSequelizeRepository)
container
  .bind<IAccessControll>(TYPES.AccessControllManager)
  .to(AccessControllManager)
export { container }
