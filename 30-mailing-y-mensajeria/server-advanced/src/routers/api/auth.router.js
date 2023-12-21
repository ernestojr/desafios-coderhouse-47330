import { Router } from 'express';
import path from 'path';
import { __dirname } from '../../utils.js';
import EmailService from '../../services/email.service.js';

const router = Router();

const urlRecoveryPassStep2 = 'https://google.com';

router.post('/recovery-password', (req, res, next) => {
  try {
    const { email } = req.body;
    const result = EmailService.sendEmail(
      email,
      'Recuperacion de contraseña',
      `<p> Para recuperar tu contraseña, debes acceder al siguiente enlace: <a href="${urlRecoveryPassStep2}">AQUI</a> </p>
      <img src="cid:saludo-001" />
      `,
      [
        {
          filename: 'saludo.png',
          path: path.join(__dirname, './images/cat.gif'),
          cid: 'saludo-001',
        }
      ]
    );
    console.log('result', result);
    res.status(200).json({ message: 'correo enviado correctamente 😁'});
  } catch (error) {
    next(error);
  }
});

export default router;