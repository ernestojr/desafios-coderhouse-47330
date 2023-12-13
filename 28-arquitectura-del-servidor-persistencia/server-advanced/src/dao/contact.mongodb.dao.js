import ContactModel from '../models/contact.model.js';

export default class ContactDao {
  get(filter = {}) {
    const criteria = {};
    if (filter.id) {
      criteria._id = id;
    }
    return ContactModel.find(criteria);
  }
  create(data) {
    return ContactModel.create(data);
  }
  updateById(id, data) {
    return ContactModel.updateOne({ _id: id }, { $set: data });
  }
  deleteById(id) {
    return ContactModel.deleteOne({ _id: id });
  }
}