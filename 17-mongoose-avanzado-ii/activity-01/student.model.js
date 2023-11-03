import mongoose from 'mongoose'

const StudentSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  email: String,
  gender: String,
  grade: Number,
  group: String,
})

export default mongoose.model('Student', StudentSchema)