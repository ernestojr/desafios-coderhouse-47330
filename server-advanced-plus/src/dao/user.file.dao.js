import UserDao from './user.dao.js';

export default class UserFileDao extends UserDao {
  static get(filter = {}, opts = {}) { throw new Error('Method not implemented 😱.'); }
  static create(data) { throw new Error('Method not implemented 😱.'); }
  static getById(uid) { throw new Error('Method not implemented 😱.'); }
  static updateById(uid, data) { throw new Error('Method not implemented 😱.'); }
  static deleteById(uid) { throw new Error('Method not implemented 😱.'); }
}