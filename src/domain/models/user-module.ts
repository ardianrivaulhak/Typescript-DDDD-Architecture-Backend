export interface UnmarshalledUserHasModule {
  user_id: string
  module_id: string[]
}

export class UserHasModule {
  protected props: UnmarshalledUserHasModule

  private constructor(props: UnmarshalledUserHasModule) {
    this.props = props
  }

  public static create(props: UnmarshalledUserHasModule): UserHasModule {
    const instance = new UserHasModule(props)
    return instance
  }

  public unmarshal(): UnmarshalledUserHasModule {
    return {
      user_id: this.user,
      module_id: this.module,
    }
  }

  get user(): string {
    return this.props.user_id
  }

  get module(): string[] {
    return this.props.module_id
  }
}
