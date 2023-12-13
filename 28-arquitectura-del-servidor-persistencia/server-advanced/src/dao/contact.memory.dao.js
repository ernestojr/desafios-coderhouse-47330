export default class ContactDao {
  constructor() {
    this.contacts = [
      {
        id: 1,
        firts_name: 'Juan',
        last_name: 'Ruiz',
        phone: '1234567890',
        email: 'jr@mail.com',
      },
    ];
  }

  get(filter = {}) {
    return this.contacts;
  }

  create(data) {
    const newContact = {
      ...data,
      id: this.contacts.length + 1,
    };
    this.contacts.push(newContact);
    return Promise.resolve(newContact);
  }

  updateById(id, data) {
    const index = this.contacts.findIndex(c => c.id === paseInt(id));
    this.contacts[index] = {
      ...this.contacts[index],
      ...data,
      id: paseInt(id),
    };
    return this.contacts[index];
  }

  deleteById(id) {
    const index = this.contacts.findIndex(c => c.id === paseInt(id));
    const result = this.contacts.splice(index, 1);
    return result;
  }
}