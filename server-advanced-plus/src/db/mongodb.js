import mongoose from 'mongoose';

import config from '../config/config.js'; 

export const init = async () => {
  if (config.persistenceType !== 'mongodb') {
    return;
  }
  try {
    const URI = config.mongodbUri;
    await mongoose.connect(URI);
    console.log('Database connected 🚀');
  } catch (error) {
    console.error('Error to connect to database', error.message);
  }
};
