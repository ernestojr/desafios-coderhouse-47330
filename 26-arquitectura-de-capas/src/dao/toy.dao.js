import ToyModel from '../models/toy.model.js';

export default class ToyDao {
  static create(data) {
    return ToyModel.create(data);
  }

  static get(criteria = {}) {
    return ToyModel.find(criteria);
  }

  static getById(tid) {
    return ToyModel.findById(tid);
  }

  static updateById(tid, data) {
    return ToyModel.updateOne({ _id: tid }, { $set: data });
  }

  static async deleteById(tid) {
    return ToyModel.deleteOne({ _id: tid });
  }
}