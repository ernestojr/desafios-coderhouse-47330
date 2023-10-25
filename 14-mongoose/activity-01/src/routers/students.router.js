import { Router } from 'express';
import StudentModel from '../models/student.model.js';

const router = Router();

router.get('/students', async (req, res) => {
  const students = await StudentModel.find();
  res.status(200).json(students);
});

router.get('/students/:sid', async (req, res) => {
  const { sid } = req.params;
  const student = await StudentModel.findById(sid);
  if (!student) {
    return res.status(404).json({ message: 'student id not found' });
  }
  res.status(200).json(student);
});

router.post('/students', async (req, res) => {
  try {
    const { body } = req;
    const student = await StudentModel.create(body);
    res.status(201).json(student);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.put('/students/:sid', async (req, res) => {
  const { sid } = req.params;
  const { body } = req;
  await StudentModel.updateOne({ _id: sid }, { $set: body });
  res.status(204).end();
});

router.delete('/students/:sid', async (req, res) => {
  const { sid } = req.params;
  await StudentModel.deleteOne({ _id: sid });
  res.status(204).end();
});


export default router;