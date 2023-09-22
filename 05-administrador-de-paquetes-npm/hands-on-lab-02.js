
const fs = require('fs');
const crypto = require('crypto');

const SALT = 'shhhh'; // Recuerda que esto está para hacer más sencillo el ejercicio. Pero por seguridad, el valor de la salt no puede estar en el código fuente.

class UsersManager {
  constructor(path) {
    this.path = path;
  }

  async create(user) {
    const { firstName, lastName, email, age, cours, password } = user;
    if (!firstName || !lastName || !email || !age || !cours || !password) {
      throw new Error('Todos los campos son obligatorios.');
    } 
    const users = await getJSONFromFile(this.path);
    const id = users.length + 1;
    const newUser = {
      id,
      firstName,
      lastName,
      email,
      age,
      cours,
      password: encriptarPassword(password),
    };
    users.push(newUser);
    return saveJSONToFile(this.path, users);
  }

  get() {
    return getJSONFromFile(this.path);
  }

  async login(email, password) {
    const users = await getJSONFromFile(this.path);
    const user = users.find((user) => user.email === email);

    if (!user) {
      throw new Error('Usuario no encontrado')
    }

    if (!validarPassword(password, user.password)) {
      throw new Error('Contrseña incorrecta.')
    }

    return true;
  }
}

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

const encriptarPassword = (passwordPlain) => {
  let passwordEncrypted;
  
  passwordEncrypted = crypto.pbkdf2Sync(passwordPlain, SALT, 100000, 64, 'sha512').toString('hex');
  return passwordEncrypted;
}

const validarPassword = (passwordPlain, passwordEncrypted) => {
  const result = crypto.pbkdf2Sync(passwordPlain, SALT, 100000, 64, 'sha512').toString('hex');

  return result === passwordEncrypted;
}




async function test() {
  const usersManager = new UsersManager('./users.json');

  await usersManager.create({
    firstName: 'John',
    lastName: 'Doe',
    email: 'jd2@email.com',
    age: 25,
    cours: ['Node.js', 'JavaScript', 'HTML', 'CSS'],
    password: 'coderhouse4422*',
  });

  const users = await usersManager.get();
  console.log('😎 Acá los usuarios:', users);

  let result = await usersManager.login('jd2@email.com', 'coderhouse4422*');

  console.log(`Resultado del login (jd2@email.com, coderhouse4422*): ${result}`);

  try {
    await usersManager.login('jd@email.com', 'coderhouse4422*');
  } catch (error) {
    console.log('Ocurrio un error (jd@email.com, coderhouse4422*):', error.message)
  }

}

test();