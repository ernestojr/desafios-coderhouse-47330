import { Router } from 'express';

const router = Router();

// set-cookie
router.post('/set-cookie', (req, res) => {
  const { name, email } = req.body;
  res
    .cookie(name, email, { maxAge: 60000 })
    .redirect('/');
});
// get-cookie
router.get('/get-cookie', (req, res) => {
  const cookies = req.cookies;
  res.status(200).json(cookies);
});


export default router;