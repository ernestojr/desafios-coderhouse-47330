import OrderService from '../dao/order.mongodb.dao.js';
import BusinessService from '../dao/business.mongodb.dao.js';
import UserService from '../dao/user.mongodb.dao.js';

import { NotFoundException } from '../utils.js';

export default class OrdersController {
  static getAll = () => {
    return OrderService.getAll();
  };

  static create = async (data) => {
    const { user: uid, business: bid, products } = data;
    const business = await BusinessService.getById(bid);
    const user = await UserService.getById(uid);
    const productsResult = business.products.filter(p => products.includes(p.id));
    const newOrder = {
      code: Date.now(),
      business: business._id,
      user: user._id,
      products: productsResult,
      total: productsResult.reduce((total, producto) => total + producto.price, 0),
    };
    return OrderService.create(newOrder);
  };

  static getById = async (oid) => {
    const order = await OrderService.getById(oid);
    if (!order) {
      throw new NotFoundException('Not found');
    }
    return order;
  };

  static updateById = async (oid, data) => {
    return OrderService.updateById(oid, data);
  };

  static resolve = async (oid, data) => {
    const { status } = data;
    return OrderService.updateById(oid, { status });
  };
}