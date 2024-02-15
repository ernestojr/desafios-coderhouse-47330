import express from 'express';
import handlebars from 'express-handlebars';
import path from 'path';
import cookieParser from 'cookie-parser';

import indexRouter from './routers/views/index.router.js';
import usersRouter from './routers/api/users.router.js';
import authRouter from './routers/api/auth.router.js';
import { __dirname } from './utils/utils.js';
import Exception from './utils/exception.js';

const app = express();

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../public')));
app.engine('handlebars', handlebars.engine());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'handlebars');

app.use('/', indexRouter);
app.use('/api', authRouter, usersRouter);

app.use((error, req, res, next) => {
  const message = error instanceof Exception ?
    error.message :
    `Ah ocurrido un error desconocido 😨: ${error.message}`;
  res.status(error.statusCode || 500).json({ status: 'error', message });
});

export default app;
