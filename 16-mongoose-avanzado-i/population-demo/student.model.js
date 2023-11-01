import mongoose from 'mongoose';

const courseItemSchema = new mongoose.Schema({
  course: { type: mongoose.Schema.Types.ObjectId, ref: 'courses' },
}, { _id: false });

const userSchema = new mongoose.Schema({
  first_name: { type: String, index: true },
  last_name: { type: String },
  email: { type: String },
  gender: { type: String },
  courses: { type: [courseItemSchema], default: []}
});

userSchema.pre('find', function() {
  this.populate('courses.course');
});

export default mongoose.model('students', userSchema);
