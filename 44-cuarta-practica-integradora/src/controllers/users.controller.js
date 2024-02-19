import UsersService from '../services/users.service.js';
import { createPasswordHash } from '../utils/utils.js';
import { getFilterAndOpts } from '../utils/utils.js';
import { NotFoundException } from '../utils/exception.js';

export default class UsersController {
  static get(query = {}) {
    const { filter, opts } = getFilterAndOpts(query);
    return UsersService.get(filter, opts);
  }

  static async create(data) {
    return UsersService.create({
      ...data,
      password: await createPasswordHash(password),
    });
  }

  static async getById(uid) {
    const user = await UsersService.getById(uid);
    if (!user) {
      throw new NotFoundException(`User ${uid} not found 😱.`);
    }
    return user;
  }

  static updateById(uid, data) {
    return UsersService.updateById(uid, data);
  }

  static deleteById(uid) {
    return UsersService.deleteById(uid);
  }

  static uploadFile(uid, typeFile, file) {
    const data = {};
    if (typeFile === 'avatar') {
      Object.assign(data, { avatar: file.filename });
    } else {
      Object.assign(data, { document: file.filename });
    }
    return UsersService.updateById(uid, data);
  }
}