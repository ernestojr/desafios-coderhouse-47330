import express from 'express';
import path from 'path';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import swaggerJsDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

import usersRouter from './routes/users.router.js';
import petsRouter from './routes/pets.router.js';
import adoptionsRouter from './routes/adoption.router.js';
import sessionsRouter from './routes/sessions.router.js';

import __dirname from './utils/index.js';

const app = express();
const PORT = process.env.PORT||8080;
const connection = mongoose.connect('MONGODB_URI')

app.use(express.json());
app.use(cookieParser());

const swaggerOptions = {
  definition: {
    openapi: '3.0.1',
    info: {
      title: 'Adoptme API',
      description: 'Esta es la documentación de la API de Adoptme. Una aplicación para adoptar mascotas 😍.',
    },
  },
  apis: [path.join(__dirname, '..', 'docs', '**', '*.yaml')],
};

const specs = swaggerJsDoc(swaggerOptions);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs))

app.use('/api/users',usersRouter);
app.use('/api/pets',petsRouter);
app.use('/api/adoptions',adoptionsRouter);
app.use('/api/sessions',sessionsRouter);

app.listen(PORT,()=>console.log(`Listening on ${PORT}`))
