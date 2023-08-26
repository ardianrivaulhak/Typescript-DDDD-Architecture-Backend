import { Module, UnmarshalledModule } from '../../domain/models/module'

export interface IModuleRepository {
  findAll(): Promise<Module[]>
  findById(id: string): Promise<Module>
  create(user: UnmarshalledModule): Promise<Module>
  update(id: string, user: UnmarshalledModule): Promise<Module>
  // delete(id: string): Promise<boolean>
}
