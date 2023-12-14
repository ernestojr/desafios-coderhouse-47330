import { Router } from 'express';

import OderController from '../../controllers/orders.controller.js';

const router = Router();

router.get('/', async (req, res, next) => {
  try {
    const orders = await OderController.getAll();
    res.status(200).json({ message: orders });
  } catch (error) {
    next(error);
  }
});

router.get('/:oid', async (req, res, next) => {
  try {
    const { params: { oid } } = req;
    const order = await OderController.getById(oid);
    res.status(200).json({ message: order });
  } catch (error) {
    next(error);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const { body } = req;
    const order = await OderController.create(body);
    res.status(201).json({ message: order });
  } catch (error) {
    next(error);
  }
});

router.put('/:oid', async (req, res, next) => {
  try {
    const { params: { oid }, body } = req;
    await OderController.updateById(oid, body);
    res.status(204).json({ message: order });
  } catch (error) {
    next(error);
  }
});


export default router;