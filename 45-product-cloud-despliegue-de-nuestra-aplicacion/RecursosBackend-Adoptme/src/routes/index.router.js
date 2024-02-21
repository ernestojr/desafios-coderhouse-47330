import { Router } from 'express';

import usersController from '../controllers/users.controller.js';
import petsController from '../controllers/pets.controller.js';

const router = Router();

router.get('/', (req, res) => {
  res.status(200).render('index');
});

router.get('/users', async (req, res) => {
  const users = await usersController.getAllUsers();
  res.status(200).render('users', { users });
});

router.get('/pets', async (req, res) => {
  const pets = await petsController.getAllPets();
  res.status(200).render('pets', { pets });
});

export default router;