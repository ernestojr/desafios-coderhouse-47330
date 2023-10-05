import express from 'express';

import indexRouter from './routers/index.router.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', indexRouter);

app.use((error, req, res, next) => {
  const message = `😨 Ah ocurrido un error desconocido: ${error.message}`;
  console.log(message);
  res.status(500).json({ status: 'error', message });
});

export default app;
