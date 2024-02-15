import config from '../config/config.js';

export let userDao;

switch (config.persistenceType) {
  case 'mongodb':
    const UserMongoDbDao = (await import('./user.mongodb.dao.js')).default;
    userDao = new UserMongoDbDao();
    break;
  case 'file':
    const UserFileDao = (await import('./user.file.dao.js')).default;
    userDao = new UserFileDao();
    break;
  default:
    const UserMemoryDao = (await import('./user.memory.dao.js')).default;
    userDao = new UserMemoryDao();
    break;
}