import { Router } from 'express';

import UsersController from '../../controllers/users.controller.js';

const router = Router();

router.get('/', async (req, res, next) => {
  try {
    const users = await UsersController.getAll();
    res.status(200).json(users);
  } catch (error) {
    next(error);
  }
});

router.get('/:uid', async (req, res, next) => {
  try {
    const { params: { uid } } = req;
    const user = await UsersController.getById(uid);
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const { body } = req;
    const user = await UsersController.create(body);
    res.status(201).json(user);
  } catch (error) {
    next(error);
  }
});

router.put('/:uid', async (req, res, next) => {
  try {
    const { params: { uid }, body } = req;
    await UsersController.updateById(uid, body);
    res.status(204).end();
  } catch (error) {
    next(error);
  }
});


export default router;