const fs = require('fs');

// Hands On Lab

class UsersManager {
  constructor(path) {
    this.path = path;
  }

  async create(user) {
    const { firstName, lastName, age, cours } = user;
    if (!firstName || !lastName || !age || !cours) {
      throw new Error('Todos los campos son obligatorios.');
    }
    const users = await getJSONFromFile(this.path);
    const id = Math.random();
    const newUser = { id, firstName, lastName, age, cours };
    users.push(newUser);
    return saveJSONToFile(this.path, users);
  }

  get() {
    return getJSONFromFile(this.path);
  }
}

// Utilities

const existFile = async (path) => {
  try {
    await fs.promises.access(path);
    return true;
  } catch (error) {
    return false;
  }
};

const getJSONFromFile = async (path) => {
  if (!await existFile(path)) {
    return [];
  }

  let content;

  try {
    content = await fs.promises.readFile(path, 'utf-8');
  } catch (error) {
    throw new Error(`El archivo ${path} no pudo ser leido.`);
  }

  try {
    return JSON.parse(content);
  } catch (error) {
    throw new Error(`El archivo ${path} no tiene un formato JSON válido.`);
  }
};

const saveJSONToFile = async (path, data) => {
  const content = JSON.stringify(data, null, '\t');
  try {
    await fs.promises.writeFile(path, content, 'utf-8');
  } catch (error) {
    throw new Error(`El archivo ${path} no pudo ser escrito.`);
  }
};

(async function (run) {

  if (!run) return;

  const usersManager = new UsersManager('./users.json');

  await usersManager.create({
    firstName: 'John',
    lastName: 'Doe',
    age: 25,
    cours: ['Node.js', 'JavaScript', 'HTML', 'CSS'],
  });

  const users = await usersManager.get();
  console.log('😎 Acá los usuarios:', users);

})(false);

(async (run) => { // IIFE

  if (!run) return;

  const result = await existFile('./test.txt');
  console.log(result);
})(false);

