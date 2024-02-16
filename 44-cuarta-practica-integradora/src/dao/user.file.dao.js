import UserDao from './user.dao.js';

export default class UserFileDao extends UserDao {
  get(filter = {}, opts = {}) { throw new Error('Method not implemented 😱.'); }
  create(data) { throw new Error('Method not implemented 😱.'); }
  getById(uid) { throw new Error('Method not implemented 😱.'); }
  updateById(uid, data) { throw new Error('Method not implemented 😱.'); }
  deleteById(uid) { throw new Error('Method not implemented 😱.'); }
}