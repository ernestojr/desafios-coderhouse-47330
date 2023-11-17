import { Router } from 'express';

import UserModel from '../models/user.model.js';
import { createHash, isValidPassword, tokenGenerator, jwtAuth } from '../utils.js';

const router = Router();

router.get('/', (req, res) => {
  res.send('<h1>Hello People 😎!</h1>');
});

router.post('/login', async (req, res) => {
  const { body: { email, password } } = req;
  const user = await UserModel.findOne({ email });
  if (!user) {
    return res.status(401).json({ message: 'Correo o contraseña invalidos 😨' });
  }
  console.log('user', user);
  const isPassValid = isValidPassword(password, user);
  if (!isPassValid) {
    return res.status(401).json({ message: 'Correo o contraseña invalidos 😨' });
  }
  const token = tokenGenerator(user);
  res.status(200).json({ access_toekn: token });
});

router.post('/register', async (req, res) => {
  const { body } = req;
  let user = await UserModel.findOne({ email: body.email });
  if (user) {
    return res.status(400).json({ message: `Ya existe un usuario con el correo ${body.email} 😨.` });
  }
  user = await UserModel.create({
    ...body,
    password: createHash(body.password),
  });
  const token = tokenGenerator(user);
  res.status(201).json({ access_toekn: token });
});

router.get('/current', jwtAuth, (req, res) => {
  res.status(200).json(req.user);
});

export default router;