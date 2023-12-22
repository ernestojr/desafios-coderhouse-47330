import path from 'path';
import { fileURLToPath } from 'url';
import { faker } from '@faker-js/faker';

const __filename = fileURLToPath(import.meta.url);

export const __dirname = path.dirname(__filename);

export const generateUser = () => {
  const products = [];
  const limit = faker.number.int({ min: 2, max: 8 });
  for (let index = 0; index < limit; index++) {
    products.push(generateProduct());
  }
  return {
    id: faker.database.mongodbObjectId(),
    name: faker.person.firstName(),
    last_name: faker.person.lastName(),
    birthDate: faker.date.birthdate(),
    avatar: faker.internet.avatar(),
    email: faker.internet.email(),
    role: faker.datatype.boolean() ? 'client' : 'seller',
    premium: faker.datatype.boolean(),
    ocupation: faker.person.jobTitle(),
    products,
  };
};

export const generateProduct = () => {
  return {
    id: faker.database.mongodbObjectId(),
    title: faker.commerce.productName(),
    description: faker.lorem.paragraph(),
    code: faker.string.alphanumeric({ length: 10 }),
    price: faker.commerce.price(),
    department: faker.commerce.department(),
    stock: faker.number.int({ min: 10000, max: 99999 }),
    image: faker.image.url(),
  };
};