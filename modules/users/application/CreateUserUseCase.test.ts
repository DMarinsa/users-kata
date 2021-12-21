import { CreateUserUseCase } from "./CreateUserUseCase";
import userRepository, { userRequestFactory } from '../../../test/mocks/UserRepositoryMock';
import { User } from "../domain/User";

describe('CreateUserUseCase', () => {
  beforeEach(() => {
    userRepository.clear();
  })
  
  it('should insert a user', () => {
    const useCase = new CreateUserUseCase(userRepository);
    jest.spyOn(userRepository, 'create');
    const user = User.create(userRequestFactory());

    useCase.execute(userRequestFactory());

    expect(userRepository.create).toBeCalledTimes(1);
    expect(userRepository.users.length).toBe(1);
  });
});
