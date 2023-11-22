import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import passport from 'passport';

import indexRouter from './routers/index.router.js';
import { __dirname } from './utils.js';
import { init as initPassport } from './config/passport.config.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));

initPassport();

app.use(passport.initialize());

app.use('/', indexRouter);

app.use((error, req, res, next) => {
  const message = `Ah ocurrido un error desconocido 😨: ${error.message}`;
  console.log(message);
  res.status(500).json({ status: 'error', message });
});

export default app;
