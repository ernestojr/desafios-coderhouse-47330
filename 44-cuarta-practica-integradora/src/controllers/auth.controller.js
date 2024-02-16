import UsersService from '../services/users.service.js';
import { UnauthorizedException } from '../utils/exception.js';
import { createPasswordHash, verifyPassword, createToken } from '../utils/utils.js';

export default class AuthController {
  static async register(data) {
    return UsersService.create({
      ...data,
      password: await createPasswordHash(data.password),
    });
  }

  static async login(data) {
    const { email, password } = data;
    const [user] = await UsersService.getRaw({ email });
    if (!user) {
      throw new UnauthorizedException('Invalid credentials 😨.');
    }
    const isPasswordValid = await verifyPassword(password, user);
    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid credentials 😨.');
    }
    const token = createToken(user);
    return token;
  }
}