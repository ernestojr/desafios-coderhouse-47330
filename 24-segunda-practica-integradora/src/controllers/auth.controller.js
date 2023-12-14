import UserService from '../services/users.service.js'
import { createHash, verifyPassword, tokenGenerator } from '../utils.js';

export default class AuthController {
  static async register(data) {
    const {
      first_name,
      last_name,
      dni,
      email,
      password,
    } = data;
    if (
      !first_name ||
      !last_name ||
      !dni ||
      !email ||
      !password
    ) {
      throw new Error('Todos los campos son requeridos 😨');
    }
    let user = await UserService.getOne({ email });
    if (user) {
      throw new Error('Correo ya registrado 😨. Intenta recuperar tu contraseña 😁.');
    }
    user = await UserService.create({
      first_name,
      last_name,
      dni,
      email,
      password: createHash(password),
    });
    return user;
  }

  static login() {

  }
}