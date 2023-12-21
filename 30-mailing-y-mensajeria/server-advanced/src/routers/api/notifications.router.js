import { Router } from 'express';
import path from 'path';
import EmailService from '../../services/email.service.js';
import TwilioService from '../../services/twilio.service.js';
import { __dirname } from '../../utils.js';


const router = Router();

router.get('/sendEmail', async (req, res, next) => {
  try {
    const result = await EmailService.sendEmail(
      'ernestorojas.teacher@gmail.com',
      'Esta es un correo de prueba',
      `
      <div>
        <h1>Hola cómo estás?</h1>
        <p>Esta es una prueba de envio de correo desde Node js.</p>
        <img src="cid:cat-001" />
      </div>
      `,
      [
        {
          filename: 'image-cat.gif',
          path: path.join(__dirname, './images/cat.gif'),
          cid: 'cat-001',
        }
      ]
    );
    console.log('result', result);
    res.status(200).json({ message: 'Correo enviado correctamente'})
  } catch (error) {
    next(error);
  }
});

router.get('/sendSms', async (req, res, next) => {
  const { query: { fullname, product }} = req;
  try {
    const message = `Gracias, ${fullname}, tu solicitud del producto ${product} ha sido aprobada 😍!`;
    const result = await TwilioService.sendSMS('+56945472812', message);
    console.log('result', result);
    res.status(200).json({ message: 'mensaje enviado correctamente 😁'});
  } catch (error) {
    next(error)
  }
});

export default router;