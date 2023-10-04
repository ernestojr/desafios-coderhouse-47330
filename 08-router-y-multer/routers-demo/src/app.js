import express from 'express';

import userRouter from './routers/users.router.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', userRouter);

app.listen(8080, () => {
  console.log('🚀 Server running on http://localhost:8080');
});
