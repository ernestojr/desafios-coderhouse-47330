import { Router } from 'express';
import AuthController from '../../controllers/auth.controller.js';

const router = Router();

router.post('/login', async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const token = await AuthController.login(email, password);
    res
      .cookie('access_token', token, { maxAge: 1000*60*30, httpOnly: true })
      .status(200)
      .json({ mesasge: 'Usuario autenticado correctamente.' });
  } catch (error) {
    next(error);
  }
});

export default router;