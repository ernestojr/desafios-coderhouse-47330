import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

import petsRouter from './routers/pets.router.js';
import usersRouter from './routers/users.router.js';

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(express.static('../public')); // 1th option
// app.use('/static', express.static('../public')); // 2th option
app.use('/static', express.static(path.join(__dirname, '../public'))); // 3th option
// http://localhost:8080/static/regards.gif

app.use('/api', petsRouter, usersRouter);

app.listen(8080, () => {
  console.log('🚀 Server running on http://localhost:8080');
});
