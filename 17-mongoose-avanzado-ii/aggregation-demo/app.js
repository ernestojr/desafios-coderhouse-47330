import mongoose from 'mongoose';

import OrderModel from './order.model.js';

const data = [
  {
    name: 'Pepperoni',
    size: 'small',
    price: 19,
    quantity: 10,
  },
  {
    name: 'Pepperoni',
    size: 'medium',
    price: 20,
    quantity: 20,
  },
  {
    name: 'Pepperoni',
    size: 'large',
    price: 21,
    quantity: 30,
  },
  {
    name: 'Cheese',
    size: 'small',
    price: 12,
    quantity: 15,
  },
  {
    name: 'Cheese',
    size: 'medium',
    price: 13,
    quantity: 50,
  },
  {
    name: 'Cheese',
    size: 'large',
    price: 14,
    quantity: 10,
  },
  {
    name: 'Vegan',
    size: 'small',
    price: 17,
    quantity: 10,
  },
  {
    name: 'Vegan',
    size: 'medium',
    price: 18,
    quantity: 10,
  },
];

const insertData = async () => {
  await OrderModel.insertMany(data);
  const result = await OrderModel.find({});
  console.log('result', result);
}

const getReportBySize = async (sizeTarget) => {
  const result = await OrderModel.aggregate([
    {
      $match: {
        size: sizeTarget,
      },
    },
    {
      $group: {
        _id: '$name',
        totalQuantity: { $sum: '$quantity' },
        totalOrder: { $sum: 1 },
      },
    },
    {
      $sort: { totalQuantity: -1 }
    },
    {
      $group: {
        _id: 1,
        orders: { $push: '$$ROOT' },
      },
    },
    { 
      $project: {
        '_id': 0,
        orders: '$orders',
      },
    },
    {
      $merge: {
        into: 'reports',
      },
    },
  ]);

  console.log('getReport result', result);
};

const test = async () => {
  const URI = 'mongodb://localhost:27017/pizzeria';
  await mongoose.connect(URI);
  console.log('Database connected 🚀');
  //await insertData();
  await getReportBySize('medium');
};

test();