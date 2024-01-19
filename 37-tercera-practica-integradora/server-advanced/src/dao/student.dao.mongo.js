import StudentModel from './models/student.model.js';

export default class StudentDao {
  static get(criteria = {}, opts = {}) {
    return StudentModel.find(criteria);
  }

  static getById(sid, opts = {}) {
    return StudentModel.findById(sid);
  }

  static create(data) {
    return StudentModel.create(data);
  }

  static updateById(sid, data) {
    const criteria = { _id: sid };
    const operation = { $set: data };
    return StudentModel.updateOne(criteria, operation);
  }

  static deleteById(sid) {
    const criteria = { _id: sid };
    return StudentModel.deleteOne(criteria);
  }

}