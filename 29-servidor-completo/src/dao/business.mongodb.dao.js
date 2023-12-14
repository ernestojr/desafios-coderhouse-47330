import BusinessModel from "../models/business.model.js";

export default class OrderDao {
  getAll = () => {
    return BusinessModel.find();
  }
  getById = (uid) => {
    return BusinessModel.findById(uid);
  }
  create = (data) => {
    return BusinessModel.create(data);
  }
  updateById = (uid, data) => {
    return BusinessModel.updateOne({ _id: uid }, { $set: data });
  }
  deleteById = (uid) => {
    return BusinessModel.deleteOne({ _id: uid });
  }
}