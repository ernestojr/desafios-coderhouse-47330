import { Router } from 'express';
import { emitFromApi } from '../socket.js'
const router = Router();

router.get('/', (req, res) => {
  res.render('chat');
});

router.post('/messages', (req, res) => {
  emitFromApi('new-message-from-api', { username: 'api', text: 'Hola desde el API 🤩'});
  res.status(200).json({ ok: true });
});

export default router;