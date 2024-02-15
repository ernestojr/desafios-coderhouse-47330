import UserDto from '../dto/user.dto.js';
export default class UserRepository {
  constructor(dao) {
    this.dao = dao;
  }

  async get(filter = {}, opts = {}) {
    const users = await this.dao.get(filter, opts);
    return users.map(user => new UserDto(user));
  }
  
  getRaw(filter = {}, opts = {}) {
    return this.dao.get(filter, opts);
  }

  async getById(uid) {
    const user = await this.dao.getById(uid);
    return user ? new UserDto(user) : null;
  }

  async create(data) {
    const user = await this.dao.create(data);
    return new UserDto(user);
  }

  updateById(uid, data) {
    return this.dao.updateById(uid, data);
  }

  deleteById(uid) {
    return this.dao.deleteById(uid);
  }
}