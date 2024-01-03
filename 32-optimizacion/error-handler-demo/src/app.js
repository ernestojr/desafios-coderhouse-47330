import express from 'express';
import path from 'path';

import indexRouter from './routers/index.router.js';
import usersRouter from './routers/users.router.js';
import errorHandler from './middlewares/ErrorHandler.js';
import { __dirname } from './utils/utils.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../public')));

app.use('/', indexRouter);
app.use('/api', usersRouter);

app.use(errorHandler);

export default app;
