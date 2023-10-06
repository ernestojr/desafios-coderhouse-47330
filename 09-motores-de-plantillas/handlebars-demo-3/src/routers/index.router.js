import { Router } from 'express';

const router = Router();

const foods = [
  {
    name: 'Pizza',
    price: 150,
  },
  {
    name: 'Hamburguesa',
    price: 100,
  },
  {
    name: 'Hot Dog',
    price: 50,
  },
  {
    name: 'Tacos',
    price: 70,
  },
  {
    name: 'Torta',
    price: 80,
  },
  {
    name: 'Burrito',
    price: 90,
  },
  {
    name: 'Pasta',
    price: 120,
  },
  {
    name: 'Ensalada',
    price: 70,
  },
  {
    name: 'Sushi',
    price: 200,
  },
  {
    name: 'Alitas',
    price: 100,
  }
];

router.get('/', (req, res) => {
  const user = {
    id: 'e9edb299-ceab-43d2-bc04-9be1d69e901d',
    firstName: 'Rick',
    lastName: 'Sanchez',
    age: 70,
    email: 'rs@email.com',
    role: 'admin',
  };
  res.render('index', {
    user,
    isAdmin: user.role === 'admin',
    foods,
    style: 'index.css',
  });
});

export default router;