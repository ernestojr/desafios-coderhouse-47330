import { Router } from 'express';
import { authToken, authRole } from '../../middlewares/authentication.middleware.js';
import { bodyUsersValidator}  from '../../middlewares/body-users-validator.middleware.js';
import { emailUserValidator } from '../../middlewares/email-user-validator.middleware.js';
import UserController from '../../controllers/users.controller.js';

const router = Router();

router.get('/users',
  authToken,
  authRole(['admin']),
  async (req, res, next) => {
  try {
    const users = await UserController.get({});
    res.status(200).json(users);
  } catch (error) {
    next(error);
  }
});

router.get('/users/:uid',
  authToken,
  authRole(['admin']),
  async (req, res, next) => {
  try {
    const { params: { uid } } = req;
    const user = await UserController.getById(uid);
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
});

router.post('/users/',
  authToken,
  authRole(['admin']),
  bodyUsersValidator,
  emailUserValidator,
  async (req, res, next) => {
  try {
    const { body } = req;
    const user = await UserController.create(body);
    res.status(201).json(user);
  } catch (error) {
    next(error);
  }
});

router.put('/users/:uid',
  authToken,
  authRole(['admin']),
  async (req, res, next) => {
  try {
    const { body, params: { uid } } = req;
    await UserController.updateById(uid, body);
    res.status(204).end();
  } catch (error) {
    next(error);
  }
});

router.delete('/users/:uid',
  authToken,
  authRole(['admin']),
  async (req, res, next) => {
  try {
    const { params: { uid } } = req;
    await UserController.deleteById(uid);
    res.status(204).end();
  } catch (error) {
    next(error);
  }
});

export default router;