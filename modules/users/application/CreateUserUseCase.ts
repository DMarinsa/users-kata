import { UseCase } from "../../shared/domain/UseCase";
import { InitializeUserParams, User } from "../domain/User";
import { UserRepository } from "../domain/UserRepository";

export class CreateUserUseCase implements UseCase<InitializeUserParams, User> {
  constructor(
    private userRepository: UserRepository,
  ) {}

  async execute(request: InitializeUserParams): Promise<User> {
    const user = User.create(request);
    return this.userRepository.create(user);
  }
}
