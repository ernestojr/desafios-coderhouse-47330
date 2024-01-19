import { StudentDao } from '../dao/factory.js';

export default class StudentsService {
  static get(filter = {}, opts = {}) {
    return StudentDao.get(filter, opts);
  }
  static getById(sid) {
    return StudentDao.getById(sid);
  }
  static create(data) {
    return StudentDao.create(data);
  }
  static updateById(sid, data) {
    return StudentDao.updateById(sid, data);
  }
  static deleteById(sid) {
    return StudentDao.deleteById(sid);
  }
}