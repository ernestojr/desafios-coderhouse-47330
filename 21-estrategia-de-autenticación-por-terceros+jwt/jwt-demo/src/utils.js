import path from 'path';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { fileURLToPath } from 'url';

import UserModel from './models/user.model.js';

const __filename = fileURLToPath(import.meta.url);

export const __dirname = path.dirname(__filename);

const JWT_SECRET = 'qBvPkU2X;J1,51Z!~2p[JW.DT|g:4l@';

export const tokenGenerator = (user) => {
  const { _id, first_name, last_name, email } = user;
  const payload = {
    id: _id,
    first_name,
    last_name,
    email,
  };
  return jwt.sign(payload, JWT_SECRET, { expiresIn: '1m' });
}

export const jwtAuth = (req, res, next) => {
  const { authorization: token } = req.headers;
  if (!token) {
    return res.status(401).json({ message: 'unauthorized' });
  }
  jwt.verify(token, JWT_SECRET, async (error, payload) => {
    if (error) {
      return res.status(403).json({ message: 'No authorized' });
    }
    req.user = await UserModel.findById(payload.id);
    next();
  });
}

export const createHash = (password) => bcrypt.hashSync(password, bcrypt.genSaltSync(10));

export const isValidPassword = (password, user) => bcrypt.compareSync(password, user.password);