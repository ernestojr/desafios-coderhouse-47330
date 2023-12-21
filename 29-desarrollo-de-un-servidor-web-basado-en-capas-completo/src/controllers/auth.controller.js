import UserService from '../dao/user.mongodb.dao.js';
import { tokenGenerator, UnauthorizedException } from '../utils.js';

export default class AuthController {
  static async login(email, password) {
    const [user] = await UserService.getAll({ email });
    if (!user) {
      throw new UnauthorizedException('Email o pass invalidos.');
    }

    // validar el password

    const token = tokenGenerator(user);

    return token;

  }
}