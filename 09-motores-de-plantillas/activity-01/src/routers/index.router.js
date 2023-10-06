import { Router } from 'express';

import { randomNumber } from '../utils.js';

const router = Router();

const users = [
  { id: 'e9edb299-ceab-43d2-bc04-9be1d69e901d', firstName: 'Rick', lastName: 'Sanchez', age: 70, email: 'rs@email.com' },
  { id: '611c9592-8faa-46e1-bc73-e8b5e7fcf0fe', firstName: 'Morty', lastName: 'Smith', age: 14, email: 'ms@email.com' },
  { id: 'f5215309-16d8-4ec8-aec1-95a458ae664d', firstName: 'Summer', lastName: 'Smith', age: 18, email: 'ss@email.com' },
  { id: '70d017e3-d4a2-4875-9993-22a38aa51811', firstName: 'Beth', lastName: 'Smith', age: 35, email: 'bs@email.com' },
  { id: 'c3a0a954-6cf5-4e1c-a28a-137d7f5684e8', firstName: 'Jerry', lastName: 'Smith', age: 35, email: 'js@email.com' },
];

router.get('/', (req, res) => {
  const position = randomNumber(0, users.length - 1);
  const user = users[position];
  res.render('index', user);
});

export default router;