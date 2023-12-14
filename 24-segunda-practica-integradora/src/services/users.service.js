import UserDao from '../dao/user.mongodb.dao.js';

export default class UserService {
  static get(filter = {}) {
    return UserDao.get(filter);
  }
  static async getOne(filter = {}) {
    const [user] = await UserDao.get(filter);
    return user;
  }
  static create(data) {
    return UserDao.create(data);
  }
}