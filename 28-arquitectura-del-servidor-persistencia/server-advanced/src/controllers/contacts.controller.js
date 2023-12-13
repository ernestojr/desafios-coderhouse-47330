import ContactService from '../services/contacts.service.js';

export default class ContactController {
  static findAll(query = {}) {
    const filter = {
      first_name: query.first_name,
    };
    return ContactService.findAll(filter);
  }

  static async findById(id) {
    const result = await ContactService.findAll({ id });
    return result[0];
  }

  static create(data) {
    return ContactService.create(data);
  }

  static updateById(id, data) {
    return ContactService.updateById(id, data);
  }

  static deleteById(id) {
    return ContactService.deleteById(id);
  }

}