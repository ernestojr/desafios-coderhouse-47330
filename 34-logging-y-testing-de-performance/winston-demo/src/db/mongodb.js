import mongoose from 'mongoose';
import config from '../config/config.js';
import { logger } from '../config/logger.js';

export const init = async () => {
  try {
    const URI = config.MONGO_URI;
    await mongoose.connect(URI);
    logger.info('Database connected 🚀');
  } catch (error) {
    logger.error('Error to connect to database', error.message);
  }
};
