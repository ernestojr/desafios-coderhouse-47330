import mongoose, { Schema } from 'mongoose';

const studentSchema = new Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  dni: { type: String, required: true, unique: true },
  courses: { type: [String], required: false, default: [] },
  grade: { type: Number, required: false },
  status: { type: String, required: false, default: 'active', enum: ['inactive', 'active'] },
}, { timestamps: true });

export default mongoose.model('Student', studentSchema);