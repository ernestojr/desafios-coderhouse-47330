import { Router } from 'express';

import ToyController from '../../controllers/toys.controller.js';

const router = Router();

router.post('/toys', async (req, res, next) => {
  try {
    const newToy = await ToyController.create(req.body);
    res.status(201).json(newToy);
  } catch (error) {
    console.log('Ah ocurrido un error durante la creacion del juguete 😨');
    next(error);
  }
});

router.get('/toys', async (req, res, next) => {
  try {
    const toys = await ToyController.get(req.query);
    res.status(200).json(toys);
  } catch (error) {
    console.log('Ah ocurrido un error durante la busqueda de juguetes 😨');
    next(error);
  }
});

router.get('/toys/:tid', async (req, res, next) => {
  try {
    const { params: { tid }} = req;
    const toy = await ToyController.getById(tid);
    res.status(200).json(toy);
  } catch (error) {
    console.log('Ah ocurrido un error durante la busqueda de juguetes 😨');
    next(error);
  }
});

router.put('/toys/:tid', async (req, res, next) => {
  try {
    const { params: { tid }} = req;
    await ToyController.updateById(tid, req.body);
    res.status(204).end();
  } catch (error) {
    console.log('Ah ocurrido un error durante la actualizacion de un juguetes 😨');
    next(error);
  }
});

router.delete('/toys/:tid', async (req, res, next) => {
  try {
    const { params: { tid }} = req;
    await ToyController.deleteById(tid);
    res.status(204).end();
  } catch (error) {
    console.log('Ah ocurrido un error durante la la eliminacion de un juguetes 😨');
    next(error);
  }
});
export default router;