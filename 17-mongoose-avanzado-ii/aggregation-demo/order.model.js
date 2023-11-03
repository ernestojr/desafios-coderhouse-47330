import mongoose from 'mongoose';

const OrderSchema = new mongoose.Schema({
  name: String,
  size: {
    type: String,
    enum: ['small', 'medium', 'large'],
    default: 'medium',
  },
  price: Number,
  quantity: Number,
}, { timestamps: true });

export default mongoose.model('Order', OrderSchema);
