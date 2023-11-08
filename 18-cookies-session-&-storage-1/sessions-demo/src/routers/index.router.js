import { Router } from 'express';

const router = Router();

const userTest = {
  username: 'erojas',
  password: 'qwerty',
};

router.get('/', (req, res) => {
  if (!req.session.counter) {
    req.session.counter = 1;
    res.send('Bienvenido 🖐️!');
  } else {
    req.session.counter++;
    res.send(`Se ha visitado el sitio ${req.session.counter} veces 😁.`);
  }
});
// http://localhost:8080/login?username=erojas&password=qwerty
router.get('/login', (req, res) => {
  const { username, password } = req.query;
  if (username === userTest.username && password === userTest.password) {
    req.session.user = username;
    req.session.admin = true;
    res.send('Inicio de sesion exitoso 🌞');
  } else {
    res.send('Username o password incorrectos 😨');
  }
});

const auth = (req, res, next) => {
  if (req.session.user && req.session.admin) {
    next();
  } else {
    res.status(401).send('No tienes permiso para acceder a esta ruta 😨');
  }
}

router.get('/private', auth, (req, res) => {
  res.send('Te damos la bienvenida a la seccion privada 🖐️.')
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