import { Router } from 'express';
import StudentManager from '../../dao/StudentManager.js';

const router = Router();

router.get('/students', async (req, res) => {
  const { query = {} } = req;
  const students = await StudentManager.get(query);
  res.status(200).json(students);
});

router.get('/students/:sid', async (req, res) => {
  try {
    const { params: { sid } } = req;
    const student = await StudentManager.getById(sid);
    res.status(200).json(student);
  } catch (error) {
    res.status(error.statusCode || 500).json({ message: error.message });
  }
});

router.post('/students', async (req, res) => {
  const { body } = req;
  const student = await StudentManager.create(body);
  res.status(201).json(student);
});

router.put('/students/:sid', async (req, res) => {
  try {
    const { params: { sid }, body } = req;
    await StudentManager.updateById(sid, body);
    res.status(204).end();
  } catch (error) {
    res.status(error.statusCode || 500).json({ message: error.message });
  }
});

router.delete('/students/:sid', async (req, res) => {
  try {
    const { params: { sid } } = req;
    await StudentManager.deleteById(sid);
    res.status(204).end();
  } catch (error) {
    res.status(error.statusCode || 500).json({ message: error.message });
  }
});

export default router;