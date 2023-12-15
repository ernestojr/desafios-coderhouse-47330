import UserService from '../dao/user.mongodb.dao.js';

import { NotFoundException } from '../utils.js';

export default class UsersController {
  static getAll = () => {
   return UserService.getAll();
  };

  static create = (data) => {
    return UserService.create(data);
  };

  static getById = async (uid) => {
    const user = await UserService.getById(uid);
    if (!user) {
      throw new NotFoundException('Not found');
    }
    return user;
  };

  static updateById = (uid, data) => {
    return UserService.updateById(uid, data);
  };
}