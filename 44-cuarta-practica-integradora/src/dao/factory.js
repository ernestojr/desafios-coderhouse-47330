import config from '../config/config.js';

export let userDao;
/* export let productDao;
export let cartDao; */

switch (config.persistenceType) {
  case 'mongodb':
    const UserMongoDbDao = (await import('./user.mongodb.dao.js')).default;
    userDao = new UserMongoDbDao();
    /* const ProductMongoDbDao = (await import('./product.mongodb.dao.js')).default;
    productDao = new ProductMongoDbDao();
    const CartMongoDbDao = (await import('./cart.mongodb.dao.js')).default;
    cartDao = new CartMongoDbDao(); */
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