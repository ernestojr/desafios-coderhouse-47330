import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  if (req.session.counter) {
    req.session.counter += 1;
  } else {
    req.session.counter = 1;
  }
  res.send('<h1>Hello People 😎!</h1>');
});

export default router;