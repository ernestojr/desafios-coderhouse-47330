import { Router } from 'express';
import { getNewId, uploader } from '../utils.js';

const router = Router();

const pets = [
  {
    id: '28d67927-74e2-474b-a4d3-38b86c1fa1fc',
    name: 'Snowball',
    race: 'Maltez',
    age: '3',
  },
];

const validateAvatarMiddleware = (req, res, next) => {
  if (!req.file) {
    res.status(400).json({ message: 'El thumbnail es requerido.' });
  } else {
    next();
  }
};

router.get('/pets', (req, res) => {
  res.status(200).json(pets);
});

router.post('/pets', uploader.single('thumbnail'), validateAvatarMiddleware, (req, res) => {
  let { body : data } = req;
  data = {
    id: getNewId(),
    ...data,
    thumbnail: req.file.path,
  };
  pets.push(data);
  res.status(200).json(data);
});

export default router;
