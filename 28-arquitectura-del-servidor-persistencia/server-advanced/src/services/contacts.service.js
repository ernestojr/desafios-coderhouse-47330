import { contactRepository } from '../repositories/index.js';

export default class ContactService {
  static findAll(filter = {}) {
    return contactRepository.get(filter);
  }

  static create(data) {
    return contactRepository.create(data);
  }

  static updateById(id, data) {
    return contactRepository.updateById(id, data);
  }

  static deleteById(id) {
    return contactRepository.deleteById(id);
  }
}
