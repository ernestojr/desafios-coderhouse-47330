import mongoose from 'mongoose';

const toySchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
}, { timestamps: true });

export default mongoose.model('Toy', toySchema);
