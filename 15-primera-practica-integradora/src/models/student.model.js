import mongoose from 'mongoose';

const studentSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  age: { type: Number, required: true },
  email: { type: String, required: true, unique: true },
  course: { type: String, required: true },
  grade: { type: Number, required: true },
  avatar: { type: String },
}, { timestamps: true });

export default mongoose.model('Student', studentSchema);