import { Router } from 'express';

const router = Router();

const privateRouter = (req, res, next) =>{
  if (!req.session.user) {
    return res.redirect('/login');
  }
  next();
};

const publicRouters = (req, res, next) => {
  if (req.session.user) {
    return res.redirect('/profile');
  }
  next();
}

router.get('/profile', privateRouter, (req, res) => {
  res.render('profile', { title: 'Perfil', user: req.session.user });
});

router.get('/login', publicRouters, (req, res) => {
  res.render('login', { title: 'Login' });
});

router.get('/register', publicRouters, (req, res) => {
  res.render('register', { title: 'Register' });
});

router.get('/recovery-password', publicRouters, (req, res) => {
  res.render('recovery-password', { title: 'Recuperar contraseña 😁' });
});

export default router;