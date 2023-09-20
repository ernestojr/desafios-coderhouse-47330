const { promises: fs } = require('fs');

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
    const id = users.length + 1;
    const newUser = { id, firstName, lastName, age, cours };
    users.push(newUser);
    await saveJSONToFile(this.path, users);
  }

  get() {
    return getJSONFromFile(this.path);
  }
}

const getJSONFromFile = async (path) => {
  try {
    await fs.access(path);
  } catch (error) {
    return [];
  }
  const content = await fs.readFile(path, 'utf-8');
  try {
    return JSON.parse(content);
  } catch (error) {
    throw new Error(`El archivo ${path} no tiene un formato JSON válido.`);
  }
}
  
const saveJSONToFile = async (path, data) => {
  const content = JSON.stringify(data, null, '\t');
  try {
    await fs.writeFile(path, content, 'utf-8');
  } catch (error) {
    throw new Error(`El archivo ${path} no pudo ser escrito.`);
  }
}

const handsOnLab = async () => {
  try {
    const usersManager = new UsersManager('./users.json');
    await usersManager.create({
      firstName: 'John',
      lastName: 'Doe',
      age: 25,
      cours: ['Node.js', 'JavaScript', 'HTML', 'CSS'],
    });
    const users = await usersManager.get();
    console.log('😎 Acá los usuarios:', users);
  } catch (error) {
    console.error('😱 Ha ocurrido un error', error.message);
  }
};

handsOnLab()