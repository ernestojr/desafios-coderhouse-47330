import express from 'express';
import expressSession from 'express-session';
import path from 'path';
import MongoStore from 'connect-mongo';

import indexRouter from './routers/index.router.js';
import { __dirname } from './utils.js';

const app = express();

const URI = 'mongodb+srv://developer:EP2dJ1E10aQmWh3H@cluster0.wzpvdnu.mongodb.net/sessions'

const SESSION_SECRET = 'qBvPkU2X;J1,51Z!~2p[JW.DT|g:4l@';

app.use(expressSession({
  secret: SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({
    mongoUrl: URI,
    mongoOptions: {},
    ttl: 120,
  }),
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../public')));

app.use('/', indexRouter);

app.use((error, req, res, next) => {
  const message = `Ah ocurrido un error desconocido 😨: ${error.message}`;
  console.log(message);
  res.status(500).json({ status: 'error', message });
});

export default app;
