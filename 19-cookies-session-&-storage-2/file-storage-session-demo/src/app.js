import express from 'express';
import expressSession from 'express-session';
import FileStore from 'session-file-store';
import path from 'path';

import indexRouter from './routers/index.router.js';
import { __dirname } from './utils.js';

const app = express();

const SessionFileSystem = FileStore(expressSession);

const SESSION_SECRET = 'qBvPkU2X;J1,51Z!~2p[JW.DT|g:4l@';

app.use(expressSession({
  secret: SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  store: new SessionFileSystem({
    path: path.join(__dirname, 'sessions'),
    ttl: 120, // Segundos
    retries: 0,
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
