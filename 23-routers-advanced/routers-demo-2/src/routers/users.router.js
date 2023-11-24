import RouterBase from "./RouterBase.js";

export default class UserRouter extends RouterBase {
  init() {
    this.get('/', ['USER', 'ADMIN'], function (req, res) {
      res.sendSuccess('Hello Coders 🖐️');
    });
  }
}