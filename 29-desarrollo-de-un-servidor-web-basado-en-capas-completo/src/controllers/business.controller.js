import BusinessService from '../dao/business.mongodb.dao.js';

import { NotFoundException } from '../utils.js';

export default class BusinessController {
  static getAll = () => {
    return BusinessService.getAll();
  };

  static create = (data) => {
    return BusinessService.create(data);
  };

  static addProduct = async (bid, data) => { // { id: 1, name: 'pizza', price: 12.34 }
    const business = await BusinessController.getById(bid);
    await BusinessController.updateById(bid, {
      products: [...business.products, data],
    });
  };

  static getById = async (bid) => {
    const business = await BusinessService.getById(bid);
    if (!business) {
      throw new NotFoundException('Not found');
    }
    return business;
  };

  static updateById = (bid, data) => {
    return BusinessService.updateById(bid, data);
  };
}