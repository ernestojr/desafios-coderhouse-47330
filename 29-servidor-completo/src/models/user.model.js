import mongoose, { Schema } from 'mongoose';

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  role: { type: String, default: 'user', enum: ['user', 'admin'] },
  orders: { type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Orders' }], default: [] },
}, { timestamps: true });

export default mongoose.model('Users', userSchema);