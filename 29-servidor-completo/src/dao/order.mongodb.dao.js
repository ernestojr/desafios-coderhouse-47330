import OrderModel from "../models/order.model.js";

export default class OrderDao {
  getAll = () => {
    return OrderModel.find();
  }
  getById = (uid) => {
    return OrderModel.findById(uid);
  }
  create = (data) => {
    return OrderModel.create(data);
  }
  updateById = (uid, data) => {
    return OrderModel.updateOne({ _id: uid }, { $set: data });
  }
  deleteById = (uid) => {
    return OrderModel.deleteOne({ _id: uid });
  }
}