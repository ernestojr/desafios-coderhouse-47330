import { Router } from 'express';

const router = Router();

const users = [];

router.post('/users', (req, res) => {
  const { body } = req;
  const newUser = {
    id: Date.now(),
    ...body,
  };
  users.push(newUser);
  res.json({
    status: 'success',
    message: 'Usuario creado correctamente 🚀',
    payload: newUser,
  });
});

export default router;