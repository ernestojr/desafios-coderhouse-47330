import { Router } from 'express';

import OderController from '../../controllers/orders.controller.js';

const router = Router();

router.get('/', async (req, res, next) => {
  try {
    const orders = await OderController.getAll();
    res.status(200).json(orders);
  } catch (error) {
    next(error);
  }
});

router.get('/:oid', async (req, res, next) => {
  try {
    const { params: { oid } } = req;
    const order = await OderController.getById(oid);
    res.status(200).json(order);
  } catch (error) {
    next(error);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const { body } = req;
    const order = await OderController.create(body);
    res.status(201).json(order);
  } catch (error) {
    next(error);
  }
});

router.put('/:oid', async (req, res, next) => {
  try {
    const { params: { oid }, body } = req;
    await OderController.updateById(oid, body);
    res.status(204).end();
  } catch (error) {
    next(error);
  }
});

router.post('/:oid/resolve', async (req, res, next) => {
  try {
    const { params: { oid }, body } = req;
    await OderController.resolve(oid, body);
    res.status(204).end();
  } catch (error) {
    next(error);
  }
});


export default router;