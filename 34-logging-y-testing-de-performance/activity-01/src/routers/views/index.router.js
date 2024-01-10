import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  res.render('index', { title: 'Hello People 🖐️' });
});

router.get('/loggers', (req, res) => {
  req.logger.fatal('Esta es una prueba de log error');
  req.logger.error('Esta es una prueba de log error');
  req.logger.warning('Esta es una prueba de log warn');
  req.logger.info('Esta es una prueba de log info');
  /* req.logger.http('Esta es una prueba de log http');
  req.logger.verbose('Esta es una prueba de log verbose');
  req.logger.debug('Esta es una prueba de log debug');
  req.logger.silly  ('Esta es una prueba de log silly'); */
  res.status(200).send('ok');
});

export default router;