import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  try {
    let data = `Hola coder house. Feliz año 2024 a todos 🎉`;
    for (let index = 0; index < 10000; index++) {
      data += `
      Hola coder house. Feliz año 2024 a todos 🎉 (${index})`;
    }
    res.send(data);
  } catch (error) {
    console.log(error);
    res.send(error)
  }
});

router.get('/hola', (req, res) => {
  res.send('Hello');
});

export default router;