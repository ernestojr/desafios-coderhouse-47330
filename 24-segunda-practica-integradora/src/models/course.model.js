import mongoose from 'mongoose';
import paginator from 'mongoose-paginate-v2';

const studentSubScheme = new mongoose.Schema({
  student: { type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  grade: Number,
});

const courseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  professor: { type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  students: { type: [studentSubScheme], default: [] },
  status: { type: Boolean, default: true },
}, { timestamps: true });

courseSchema.plugin(paginator);

export default mongoose.model('Course', courseSchema);
