import { Router } from 'express';

import UsersController from '../../controllers/users.controller.js';

const router = Router();

router.get('/', async (req, res, next) => {
  try {
    const orders = await UsersController.getAll();
    res.status(200).json({ message: orders });
  } catch (error) {
    next(error);
  }
});

router.get('/:oid', async (req, res, next) => {
  try {
    const { params: { oid } } = req;
    const order = await UsersController.getById(oid);
    res.status(200).json({ message: order });
  } catch (error) {
    next(error);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const { body } = req;
    const order = await UsersController.create(body);
    res.status(201).json({ message: order });
  } catch (error) {
    next(error);
  }
});

router.put('/:oid', async (req, res, next) => {
  try {
    const { params: { oid }, body } = req;
    await UsersController.updateById(oid, body);
    res.status(204).json({ message: order });
  } catch (error) {
    next(error);
  }
});


export default router;