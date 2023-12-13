import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema({
  firts_name: { type: String, require: true },
  last_name: { type: String, require: true },
  phone: { type: String, require: true },
  email: { type: String, require: true },
}, { timestamps: true });

export default mongoose.model('Contact', contactSchema);
