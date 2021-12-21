import { Id } from "../../modules/shared/domain/types";
import { User } from "../../modules/users/domain/User";
import { UserRepository } from "../../modules/users/domain/UserRepository";

export function userRequestFactory(user?: Partial<User>) {
  const DEFAULT_DATA = {
    name: 'someName',
    surname: 'someSurname',
    email: 'someEmail@email.com',
    password: 'somePassword',
    country: 'someCountry',
  };

  return {
    ...user,
    ...DEFAULT_DATA,
  }
}

class UserMockRepository implements UserRepository {
  public users: User[] = [];
  constructor() {}

  async create(user: User){
    this.users.push(user);
    return user;
  }

  async updateOne(user: User): Promise<User | null> {
    return user;
  }

  async deleteOne(id: Id): Promise<void>{}

  clear() {
    this.users = [];
  }
}

const repository = new UserMockRepository();

export default repository;
