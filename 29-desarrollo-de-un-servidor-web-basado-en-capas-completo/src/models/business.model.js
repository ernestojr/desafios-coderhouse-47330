import mongoose, { Schema } from 'mongoose';

const businessSchema = new Schema({
  name: { type: String, required: true },
  products: { type: Array, default: [] },
}, { timestamps: true });

export default mongoose.model('Business', businessSchema);
