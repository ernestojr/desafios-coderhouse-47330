import OrderModel from "../models/order.model.js";

export default class OrderDao {
  static getAll = () => {
    return OrderModel.find();
  }
  static getById = (uid) => {
    return OrderModel.findById(uid);
  }
  static create = (data) => {
    return OrderModel.create(data);
  }
  static updateById = (uid, data) => {
    return OrderModel.updateOne({ _id: uid }, { $set: data });
  }
  static deleteById = (uid) => {
    return OrderModel.deleteOne({ _id: uid });
  }
}