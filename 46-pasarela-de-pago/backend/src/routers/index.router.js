import { Router } from 'express';

import PaymentsService from '../services/payments.service.js';

const router = Router();

const products = [
  { id: 1, name: "papas", price: 1000 },
  { id: 2, name: "queso", price: 500 },
  { id: 3, name: "hamburguesa", price: 1500 },
  { id: 4, name: "soda", price: 1000 },
  { id: 5, name: "golosinas", price: 800 }
];

const users = [
  {
    id: 1, 
    fullname: 'Ernesto Rojas',
    address: {
      street: 'Siempre viva',
      postal_code: '1234213',
      external_number: '100',
    },
  }
];

// http://localhost:8080/api/payments/payment-intents
router.post('/payments/payment-intents', async (req, res) => {
  const { query: { id } } = req;
  const user = users[0];
  const product = products.find(p => p.id === parseInt(id));
  if (!product) {
    return res.status(404).json({ status: 'error', error: 'product not found.' })
  }
  const paymentIntentInfo = {
    amount: product.price * 100,
    currency: 'usd',
    metadata: {
      user_id: user.id,
      order_details: JSON.stringify([{ ...product, quantity: 1 }], null, '\t'),
      shipping_address: JSON.stringify(user.address, null, '\t'),
    }
  };
  const service = new PaymentsService();
  const result = await service.createPaymentIntent(paymentIntentInfo);
  res.status(200).json({ status: 'success', payload: result });
});

export default router;