import { Router } from 'express';
import { fork } from 'child_process';

const router = Router();

router.get('/', (req, res) => {
  res.send('<h1>Hello People 😎!</h1>');
});

router.get('/operation-block', (req, res) => {
  let result = 0;
  for (let index = 0; index < 5e9; index++) {
    result += 1;
  }
  res.send(`<h1>Resultado ${result} 😎!</h1>`);
});

router.get('/operation-not-block', (req, res) => {
  const child = fork('./src/routers/operation.js');
  child.send('Inicia el calculo, por favor!');
  child.on('message', (result) => {
    res.send(`<h1>Resultado ${result} 😎!</h1>`);
  });
});

export default router;