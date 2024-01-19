import mongoose from 'mongoose';
import config from '../config/config.js';

export default class Mongodb {
  static #instance = null;
  constructor(connection) {
    this.connection = connection;
  }
  static async getIntance() {
    if (!Mongodb.#instance) {
      try {
        const connection = await mongoose.connect(config.MONGO_URI);
        console.log('Database connected 🚀');
        Mongodb.#instance = new Mongodb(connection);
      } catch (error) {
        console.error('Error to connect to database', error.message);
      }
    }
    return Mongodb.#instance;
  }
}

/* export const init = async () => {
  try {
    const URI = config.MONGO_URI;
    await mongoose.connect(URI);
    console.log('Database connected 🚀');
  } catch (error) {
    console.error('Error to connect to database', error.message);
  }
};
 */