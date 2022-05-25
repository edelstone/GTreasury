export class User {
  iconSource: string;
  initials: string;

  constructor(obj?: Partial<User>) {
    Object.assign(this, obj);
  }
}
