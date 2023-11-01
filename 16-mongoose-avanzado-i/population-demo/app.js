import mongoose from 'mongoose';

import StudentModel from './student.model.js';
import CourseModel from './course.model.js';

const test = async () => {
  const URI = 'mongodb://localhost:27017/school'
  await mongoose.connect(URI);
  /* await StudentModel.create({
    first_name: 'Pedro',
    last_name: 'Ruiz',
    email: 'pr@mail.com',
    gender: 'M',
  }); */
  /* await CourseModel.create({
    title: 'Backend',
    description: 'Curso de backend con node js.',
    difficulty: 8,
    professor: 'Jose Lopez',
  }); */
  /* const student = await StudentModel.findOne({ first_name: 'Pedro' });
  const cid = '6541902fa89a1a4f5f81e0fb';
  student.courses.push({ course: cid });
  const result = await StudentModel.updateOne({ _id: student._id }, student);
  console.log('result', result); */

  const student = await StudentModel.find();
  console.log('student', JSON.stringify(student, null, 2));
}

test();