import ContactRepository from './contact.repository.js';
import { ContactDao } from '../dao/factory.js';

export const contactRepository = new ContactRepository(new ContactDao());
