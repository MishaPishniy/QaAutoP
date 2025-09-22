// "базовий" користувач
import { faker } from '@faker-js/faker';

export const baseUser = {
  name: faker.person.fullName(),
  lastName: 'Dou',
  password: 'Qwerty12345',
  repeatPassword: 'Qwerty12345',
};
