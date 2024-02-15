import { userDao } from '../dao/factory.js';

import UserRepository from './user.repository.js';

export const userRepository = new UserRepository(userDao);
