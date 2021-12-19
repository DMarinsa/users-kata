import bcrypt from 'bcryptjs';

export interface InitializeUserParams {
  name: string;
  surname: string;
  email: string;
  password: string;
  country: string;
}

export class User {
  private password: string;
  constructor(
    private name: string,
    private surname: string,
    private email: string,
    password: string,
    private country: string,
    private phone?: string,
    private postalCode?: string,
  ) {
    const salt = bcrypt.genSaltSync(5);
    this.password = bcrypt.hashSync(password, salt);
  }

  static create(params: InitializeUserParams) {
    return new this(
      params.name,
      params.surname,
      params.email,
      params.password,
      params.country
    );
  }
}
