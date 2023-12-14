import UserModel from '../models/user.model.js';

export default class UserDao {
  static get(criteria = {}) {
    return UserModel.find(criteria);
  }
  static create(data) {
    return UserModel.create(data);
  }
}