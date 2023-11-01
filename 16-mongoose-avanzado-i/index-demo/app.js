import mongoose from 'mongoose';

import UserModel from './user.model.js';

const test = async () => {
  const URI = 'mongodb://localhost:27017/ecommerce'
  await mongoose.connect(URI);
  const result = await UserModel.find({first_name: 'Celia'}).explain('executionStats');
  console.log('result', result);
}

test();