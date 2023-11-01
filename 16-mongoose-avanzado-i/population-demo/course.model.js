import mongoose from 'mongoose';

const courseSchema = new mongoose.Schema({
  title: { type: String },
  description: { type: String },
  difficulty: { type: Number },
  topics: {
    type: Array,
    default: [],
  },
  professor: { type: String },
  students: {
    type: Array,
    default: []
  },
});

export default mongoose.model('courses', courseSchema);
