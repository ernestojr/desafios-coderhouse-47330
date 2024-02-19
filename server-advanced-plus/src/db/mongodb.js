import mongoose from 'mongoose';

import config from '../config/config.js';
import { logger } from '../config/logger.config.js';

export const init = async () => {
  if (config.persistenceType !== 'mongodb') {
    return;
  }
  try {
    const URI = config.mongodbUri;
    await mongoose.connect(URI);
    logger.info('Database connected 🚀');
  } catch (error) {
    logger.error('Error to connect to database', error.message);
  }
};
