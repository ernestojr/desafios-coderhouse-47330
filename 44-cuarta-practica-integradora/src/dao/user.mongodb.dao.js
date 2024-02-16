import UserDao from './user.dao.js';
import UserModel from './models/user.model.js';
export default class UserMongoDbDao extends UserDao {
  get(filter = {}, opts = {}) {
    return UserModel.find(filter);
  }
  create(data) {
    return UserModel.create(data);
  }
  getById(uid) {
    return UserModel.findById({ _id: uid });
  }
  updateById(uid, data) {
    return UserModel.updateOne({ _id: uid }, { $set: data });
  }
  deleteById(uid) {
    return UserModel.deleteOne({ _id: uid });
  }
}