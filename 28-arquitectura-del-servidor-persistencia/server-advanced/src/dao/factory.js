import config from "../config/config.js";

export let ContactDao;

switch (config.presistence) {
  case 'mongodb':
    ContactDao = (await import('./contact.mongodb.dao.js')).default;
    break;
  default:
    ContactDao = (await import('./contact.memory.dao.js')).default;
    break;
}