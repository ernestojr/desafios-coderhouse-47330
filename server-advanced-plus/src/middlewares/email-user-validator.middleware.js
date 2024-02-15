import { userRepository } from '../repositories/index.js';
import { InvalidDataException } from '../utils/exception.js';

export const emailUserValidator = async (req, res, next) => {
  const { email } = req.body;
  const [user] = await userRepository.get({ email });
  if (user) {
    return next(new InvalidDataException('Email already exists 😱'));
  }
  next();
}