import { InvalidDataException } from '../utils/exception.js';

export const bodyUsersValidator = (req, res, next) => {
  const {
    first_name,
    last_name,
    email,
    password,
    birthdate,
  } = req.body;
  if (
    !first_name ||
    !last_name ||
    !email ||
    !password
  ) {
    return next(new InvalidDataException('Invalid data 😱: Todos los campos son requeridos (first_name, last_name, email, password).'));
  }
  if (birthdate) {
    const isValidDate = (new Date(birthdate)).toString() !== 'Invalid Date';
    if (!isValidDate) {
      return next(new InvalidDataException('Invalid data 😱: Formato de fecha incorrecto (YYYY-MM-DD).'));
    }
  }
  next();
};