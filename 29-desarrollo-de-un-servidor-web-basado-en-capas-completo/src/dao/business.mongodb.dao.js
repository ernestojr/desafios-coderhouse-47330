import BusinessModel from "../models/business.model.js";

export default class OrderDao {
  static getAll = () => {
    return BusinessModel.find();
  }
  static getById = (uid) => {
    return BusinessModel.findById(uid);
  }
  static create = (data) => {
    return BusinessModel.create(data);
  }
  static updateById = (uid, data) => {
    return BusinessModel.updateOne({ _id: uid }, { $set: data });
  }
  static deleteById = (uid) => {
    return BusinessModel.deleteOne({ _id: uid });
  }
}