import express from 'express';
import path from 'path';

import indexRouter from './routers/index.router.js';
import petsRouter from './routers/pets.router.js';
import UserRouter from './routers/users.router.js';
import { __dirname } from './utils.js';

const userRouter = new UserRouter();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../public')));

app.use('/', indexRouter);
app.use('/api/pets', petsRouter);
app.use('/api/users', userRouter.getRouter());


app.get('*', (req, res) => {
  res.status(404).json({ message: 'Endpoint not found 😨' });
})

app.use((error, req, res, next) => {
  const message = `Ah ocurrido un error desconocido 😨: ${error.message}`;
  console.log(message);
  res.status(500).json({ status: 'error', message });
});

export default app;
