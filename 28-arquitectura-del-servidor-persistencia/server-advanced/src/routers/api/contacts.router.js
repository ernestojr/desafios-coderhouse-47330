import { Router } from 'express';
import ContactController from '../../controllers/contacts.controller.js';

const router = Router();

router.get('/contacts', async (req, res, next) => {
  try {
    const { query } = req;
    const contacts = await ContactController.findAll(query);
    res.status(200).json(contacts);
  } catch (error) {
    next(error);
  }
});

router.get('/contacts/:cid', async (req, res, next) => {
  try {
    const { params: { cid } } = req;
    const contact = await ContactController.findById(cid);
    if (!contact) {
      return res.status(404).json({ message: 'Contact not found' });
    }
    res.status(200).json(contact);
  } catch (error) {
    next(error);
  }
});

router.post('/contacts', async (req, res, next) => {
  try {
    const { body } = req;
    const contact = await ContactController.create(body);
    res.status(201).json(contact);
  } catch (error) {
    next(error);
  }
});

router.put('/contacts/:cid', async (req, res, next) => {
  try {
    const { params: { cid }, body } = req;
    await ContactController.updateById(cid, body);
    res.status(204).end();
  } catch (error) {
    next(error);
  }
});

router.delete('/contacts/:cid', async (req, res, next) => {
  try {
    const { params: { cid } } = req;
    await ContactController.deleteById(cid);
    res.status(204).end();
  } catch (error) {
    next(error);
  }
});

export default router;