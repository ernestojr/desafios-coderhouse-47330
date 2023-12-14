import mongoose, { Schema } from 'mongoose';

const orderSchema = new Schema({
  code: Number,
  business: {
    type: mongoose.SchemaType.ObjectId,
    ref: 'Business',
  },
  user: {
    type: mongoose.SchemaType.ObjectId,
    ref: 'Users',
  },
  products: [],
  total: Number,
}, { timestamps: true });

export default mongoose.model('Orders', orderSchema);