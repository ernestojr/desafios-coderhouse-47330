import express from 'express';

import petsRouter from './routers/pets.router.js';
import usersRouter from './routers/users.router.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', petsRouter, usersRouter);

app.listen(8080, () => {
  console.log('🚀 Server running on http://localhost:8080');
});
