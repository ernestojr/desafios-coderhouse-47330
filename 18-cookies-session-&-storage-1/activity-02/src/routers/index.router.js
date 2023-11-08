import { Router } from 'express';

const router = Router();

// http://localhost:8080?name=Ernesto

router.get('/', (req, res) => {
  const { name } = req.query;
  if (!req.session.counter) {
    req.session.counter = 1;
    res.send(`Te damos la bienvenida ${name || ''} 😅!`);
  } else {
    req.session.counter++;
    res.send(`${name || 'Es'} tu visita # ${req.session.counter} 😅!`);
  }
});

router.get('/logout', (req, res) => {
  req.session.destroy((error) => {
    if (error) {
      res.send('Ha ocurrido un error 😨');
    } else {
      res.send('Sesion cerrada con exito 😁');
    }
  });
});

export default router;