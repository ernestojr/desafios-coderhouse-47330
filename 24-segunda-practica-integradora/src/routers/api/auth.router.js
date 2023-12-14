import { Router } from 'express';
import UserModel from '../../models/user.model.js';
import AuthController from '../../controllers/auth.controller.js';

import { createHash, verifyPassword, tokenGenerator } from '../../utils.js';

const router = Router();

router.post('/auth/register', async (req, res) => {
  try {
    const user = await AuthController.register(req.body);
    res.status(201).json({ message: 'Usuario creado correctamente 👽' });
  } catch(error) {
    res.status(400).json({ message: error.message });
  }
});

router.post('/auth/login', async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(401).json({ message: 'Correo o contraseña invaldos 😨' });
  }
  const user = await UserModel.findOne({ email });
  if (!user) {
    return res.status(401).json({ message: 'Correo o contraseña invaldos 😨' });
  }
  const isValidPassword = verifyPassword(password, user);
  if (!isValidPassword) {
    return res.status(401).json({ message: 'Correo o contraseña invaldos 😨' });
  }
  const token = tokenGenerator(user);
  res
    .cookie('access_token', token, { maxAge: 1000*60*30, httpOnly: true, signed: true })
    .status(200)
    .json({ message: 'Inicio de sessión exitoso 👽'  });
});

export default router;