import config from '../config/config.js';

export let StudentDao = null;

switch (config.PERSITENCE) {
  case 'file':
  case 'memory':
    throw new Error('Not implements 😱');
  default:
    StudentDao = (await import('./student.dao.mongo.js')).default; 
}