import { Entity } from './entity'

export interface UnmarshalledModule {
  id?: string
  name: string
  icon: string
  url?: string
  active: boolean
  parent_id?: string
}

export class Module extends Entity<UnmarshalledModule> {
  private constructor(props: UnmarshalledModule) {
    const { id, ...data } = props
    super(data, id)
  }

  public static create(props: UnmarshalledModule): Module {
    const instance = new Module(props)
    return instance
  }

  public unmarshal(): UnmarshalledModule {
    return {
      id: this.id,
      name: this.name,
      icon: this.icon,
      url: this.url,
      active: this.active,
      parent_id: this.parent_id,
    }
  }

  get id(): string {
    return this._id
  }

  get name(): string {
    return this.props.name
  }

  get icon(): string {
    return this.props.icon
  }

  get url(): string | undefined {
    return this.props.url
  }

  get active(): boolean {
    return this.props.active
  }

  get parent_id(): string | undefined {
    return this.props.parent_id
  }
}
