import { Router } from 'express';
import { bodyUsersValidator } from '../../middlewares/body-users-validator.middleware.js';
import { emailUserValidator } from '../../middlewares/email-user-validator.middleware.js';
import AuthController from '../../controllers/auth.controller.js';
import UsersController from '../../controllers/users.controller.js';
import { authToken } from '../../middlewares/authentication.middleware.js';
import { uploader } from '../../utils/utils.js';

const router = Router();

router.post('/auth/register',
  bodyUsersValidator,
  emailUserValidator,
  async (req, res, next) => {
  try {
    const { body } = req;
    const user = await AuthController.register(body);
    res.status(201).json(user);
  } catch (error) {
    next(error);
  }
});

router.post('/auth/login', async (req, res, next) => {
  try {
    const { body } = req;
    const token = await AuthController.login(body);
    res
      .status(200)
      .cookie('access_token', token, { maxAge: 1000*60*60*24, httpOnly: true })
      .json({ message: 'Logged in successfully 🎉.' });
  } catch (error) {
    next(error);
  }
});

router.get('/auth/current',
  authToken,
  async (req, res, next) => {
  try {
    const { user: { id } } = req;
    const user = await UsersController.getById(id);
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
});

router.post('/auth/current/upload/:typeFile',
  authToken,
  uploader.single('file'),
  async (req, res, next) => {
  try {
    const { user: { id }, params: { typeFile }, file } = req;
    await UsersController.uploadFile(id, typeFile, file);
    res.status(204).end();
  } catch (error) {
    next(error);
  }
});

export default router;