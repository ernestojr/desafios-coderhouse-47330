import { Router } from 'express';

import StudentsController from '../../controllers/students.controller.js';

const router = Router();

router.get('/students', async (req, res, next) => {
  try {
    const { query } = req;
    const students = await StudentsController.getAll(query);
    res.status(200).json(students);
  } catch (error) {
    next(error);
  }
});

router.get('/students/:sid', async (req, res, next) => {
  try {
    const { params: { sid } } = req;
    const student = await StudentsController.getById(sid);
    res.status(200).json(student);
  } catch (error) {
    next(error);
  }
});

router.post('/students/', async (req, res, next) => {
  try {
    const { body } = req;
    const student = await StudentsController.create(body);
    res.status(201).json(student);
  } catch (error) {
    next(error);
  }
});

router.put('/students/:sid', async (req, res, next) => {
  try {
    const { body, params: { sid } } = req;
    await StudentsController.updateById(sid, body);
    res.status(204).end();
  } catch (error) {
    next(error);
  }
});

router.delete('/students/:uid', async (req, res, next) => {
  try {
    const { params: { sid } } = req;
    await StudentsController.deleteById(sid);
    res.status(204).end();
  } catch (error) {
    next(error);
  }
});

export default router;