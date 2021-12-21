import bcrypt from 'bcryptjs';

export interface InitializeUserParams {
  name: string;
  surname: string;
  email: string;
  password: string;
  country: string;
}

export interface UpdateUserParams {
  name: string;
  surname: string;
  email: string;
  password: string;
  country: string;
  phone: number;
  postalCode: number;
}

export class User {
  private password: string;
  constructor(
    private name: string,
    private surname: string,
    public email: string,
    password: string,
    private country: string,
    private phone?: string,
    private postalCode?: string,
  ) {
    this.password = this.hashPassword(password);
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

  private hashPassword(password: string): string {
    const salt = bcrypt.genSaltSync(5);
    return bcrypt.hashSync(password, salt);
  }

  serialize() {
    return {
      name: this.name,
      surname: this.surname,
      email: this.email,
      password: this.password,
      country: this.country,
      phone: this.phone,
      postalCode: this.postalCode,
    }
  }
}
