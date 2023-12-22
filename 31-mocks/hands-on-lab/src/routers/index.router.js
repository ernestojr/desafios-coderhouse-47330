import { Router } from 'express';
import { generateUser } from '../utils.js';

const router = Router();

router.get('/', (req, res) => {
  res.send('<h1>Hello People 😎!</h1>');
});

router.get('/users', (req, res) => {
  const users = [];
  for (let index = 0; index < 100; index++) {
    users.push(generateUser());
  }
  res.status(200).json(users);
});

export default router;