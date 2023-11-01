import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  first_name: { type: String, index: true },
  last_name: { type: String },
  email: { type: String },
  gender: { type: String },
});

export default mongoose.model('users', userSchema);