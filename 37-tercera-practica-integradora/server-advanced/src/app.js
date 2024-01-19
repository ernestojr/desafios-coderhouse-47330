import express from 'express';
import handlebars from 'express-handlebars';
import path from 'path';

import indexRouter from './routers/views/index.router.js';
import studentsRouter from './routers/api/students.router.js';
import { Exception, __dirname } from './utils.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../public')));
app.engine('handlebars', handlebars.engine());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'handlebars');

app.use('/', indexRouter);
app.use('/api', studentsRouter);

app.use((error, req, res, next) => {
  const message = error instanceof Exception ?
    error.message :
    `Ah ocurrido un error desconocido 😨: ${error.message}`;
  console.log(message);
  res.status(error.statusCode || 500).json({ status: 'error', message });
});

export default app;
