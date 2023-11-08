import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  res.send('<h1>Hello People 😎!</h1>');
});

// set-cookie
router.get('/set-cookie', (req, res) => {
  res
    .cookie('coder-house-cookie', 'Esta es una cookie de prueba.', { maxAge: 60000, signed: true })
    .send('Cookie fue configurada correctamente 😁');
});
// get-cookie
router.get('/get-cookie', (req, res) => {
  const cookies = req.signedCookies;
  res.send(cookies);
});
// delete-cookie
router.get('/delete-cookie', (req, res) => {
  res.clearCookie('coder-house-cookie');
  res.send('La cookie fue borrada con exito 🌞');
});


export default router;