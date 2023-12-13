import ContactDTO from '../dto/contact.dto.js';

export default class Contact {
  constructor(dao) {
    this.dao = dao;
  }

  async get(filter = {}) {
    const contacts = await this.dao.get(filter);
    return contacts.map(contact => new ContactDTO(contact));
  }

  async create(data) {
    const [firts_name, last_name] = data.fullname.split(' ');
    const newData = {
      firts_name,
      last_name,
      email: data.emails[0],
      phone: data.phones[0],
    };
    const contact = await this.dao.create(newData);
    return new ContactDTO(contact);
  }

  updateById(id, data) {
    const [firts_name, last_name] = data.fullname.split(' ');
    const newData = {
      firts_name,
      last_name,
      email: data.emails[0],
      phone: data.phones[0],
    };
    return this.dao.updateById(id, newData);
  }

  deleteById(id) {
    return this.dao.deleteById(id);
  }

}