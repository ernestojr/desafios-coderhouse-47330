import { Router } from 'express';
import StudentManager from '../../dao/StudentManager.js';

const router = Router();

router.get('/students', async (req, res) => {
  let students = await StudentManager.get();
  res.render('students', { students: students.map(s => s.toJSON()) });
});

export default router;