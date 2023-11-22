import { Router } from 'express';
import passport from 'passport';
import {
  isValidPassword,
  tokenGenerator,
  verifyToken,
  authMiddleware,
} from '../utils.js';

import UserModel from '../models/user.model.js';

const router = Router();

/* router.get('/', (req, res) => {
  res.send('<h1>Hello People 😎!</h1>');
}); */

router.post('/auth/login', async (req, res) => {
  const { body: { email, password } } = req;
  const user = await UserModel.findOne({ email });
  if (!user) {
    return res.status(401).json({ message: 'Email o pass invalidos.' });
  }
  const isValidPass = isValidPassword(password, user);
  if (!isValidPass) {
    return res.status(401).json({ message: 'Email o pass invalidos.' });
  }
  const token = tokenGenerator(user);
  //res.status(200).json({ access_token: token });
  res
    .cookie('access_token', token, {
      maxAge: 60000,
      httpOnly: true,
    })
    .status(200)
    .json({ status: 'success' });

});

router.get('/current', authMiddleware('jwt'), (req, res) => {
  res.status(200).json(req.user);
});



export default router;