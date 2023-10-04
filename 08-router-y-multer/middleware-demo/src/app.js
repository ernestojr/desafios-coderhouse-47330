import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import morgan from 'morgan';

import userRouter from './routers/users.router.js';
import petsRouter from './routers/pets.router.js';

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

const app = express();

const PORT = 8080;

const middleware = (req, res, next) => {
  const today = new Date();
  const message = `📆 ${today.toLocaleDateString()} - ⌚ ${today.toLocaleTimeString()}`;
  console.log(message);
  next();
};

const middleware2 = (req, res, next) => {
  const today = new Date();
  const message = `📆 ${today.toLocaleDateString()} - ⌚ ${today.toLocaleTimeString()}`;
  req.message = message;
  next();
};

// app.use(middleware); // 🔥 Middleware a nivel de aplicación
app.use(morgan('dev'));
app.use(express.json()); // 🔥 Middleware incorporado
app.use(express.urlencoded({ extended: true }));
app.use('/static', express.static(path.join(__dirname, '../public')));

app.get('/demo', middleware, middleware2, (req, res) => { // 🔥 Middleware a nivel endpoint
  throw new Error('Error de prueba');
  res.send(`Esta es una prueba ${req.message}.`);
});

app.use('/api', userRouter, petsRouter);

const errorHandler = (error, req, res, next) => {
  console.error(`⛔ Ah ocurrido un error: ${error.message}`);
  res.status(500).send('⛔ Algo se rompio. Intente más tarde!');
};

app.use(errorHandler) // 🔥 Middleware de manejo de errores

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});