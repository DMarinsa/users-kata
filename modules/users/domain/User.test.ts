import { User } from "./User";

function userRequestFactory(user?: Partial<User>) {
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

describe('User', () => {
  it('should create a User', () => {
    const userRequest = userRequestFactory();

    const user = User.create(userRequest);

    expect(user).toBeInstanceOf(User);
  });

  it('should store the password hashed', () => {
    const userRequest = userRequestFactory();

    const user = User.create(userRequest).serialize();

    expect(user.password).not.toEqual(userRequest.password);
  })

  it('should serialize into a plain object', () => {
    const userRequest = userRequestFactory();
    const user = User.create(userRequest);

    const serializedUser = user.serialize();

    const expectedKeys = [
      'name',
      'surname',
      'email',
      'password',
      'country',
      'phone',
      'postalCode',
    ];
    expect(Object.keys(serializedUser)).toEqual(expectedKeys)
  })
});
