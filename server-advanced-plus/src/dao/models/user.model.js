import mongoose, { Schema } from 'mongoose';

const userSchema = new Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  birthdate : { type: Date, required: false },
  avatar : { type: String, required: false },
  document : { type: String, required: false },
  role : { type: String, default: 'user', enum: ['user', 'admin'] },
}, { timestamps: true });

export default mongoose.model('User', userSchema);