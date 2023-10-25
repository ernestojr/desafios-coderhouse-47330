import mongoose, { Schema } from 'mongoose';

const studentSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  dni: { type: String, required: true, unique: true },
  age: { type: Number, required: true },
  course: { type: String, required: true },
  grade: { type: Number, required: true },
  status: { type: String, default: 'active', enum: ['active', 'inactive'] },
}, { timestamps: true });

export default mongoose.model('Student', studentSchema);