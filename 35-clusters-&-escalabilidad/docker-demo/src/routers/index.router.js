import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  res.send('<h1>Hello People 😎 from Docker!</h1>');
});

router.get('/fast', (req, res) => {
  let counter = 0;
  for (let index = 0; index < 10000; index++) {
    counter += index;
  }
  res.status(200).json({ counter });
});

router.get('/slow', (req, res) => {
  let counter = 0;
  for (let index = 0; index < 5e8; index++) {
    counter += index
  }
  res.status(200).json({ counter });
});

export default router;