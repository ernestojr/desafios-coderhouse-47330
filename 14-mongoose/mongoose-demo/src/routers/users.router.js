import { Router } from 'express';
import UserModel from '../models/user.model.js';

const router = Router();

router.get('/users', async (req, res) => {
  const users = await UserModel.find();
  res.status(200).json(users);
});

router.get('/users/:uid', async (req, res) => {
  const { uid } = req.params;
  const user = await UserModel.findById(uid);
  if (!user) {
    return res.status(404).json({ message: 'User id not found' });
  }
  res.status(200).json(user);
});

router.post('/users', async (req, res) => {
  try {
    const { body } = req;
    const user = await UserModel.create(body);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.put('/users/:uid', async (req, res) => {
  const { uid } = req.params;
  const { body } = req;
  await UserModel.updateOne({ _id: uid }, { $set: body });
  res.status(204).end();
});

router.delete('/users/:uid', async (req, res) => {
  const { uid } = req.params;
  await UserModel.deleteOne({ _id: uid });
  res.status(204).end();
});


export default router;