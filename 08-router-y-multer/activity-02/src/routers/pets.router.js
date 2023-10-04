import { Router } from 'express';
import { v4 as uuidv4 } from 'uuid';

const router = Router();

const pets = [
  {
    id: '727bcaf7-cffa-4392-b59a-32699315769e',
    name: 'Snowball',
    race: 'Maltez',
    age: '3',
    gender: 'M',
  },
];

router.get('/pets', (req, res) => {
  res.status(200).json(pets);
});

router.post('/pets', (req, res) => {
  const { body } = req;
  const newPet = {
    id: uuidv4(),
    ...body,
  };
  pets.push(newPet);
  res.status(201).json(newPet);
});

export default router;
