import path from 'path';
import { fileURLToPath } from 'url';
import passport from 'passport';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

export const JWT_SECRET = 'qBvPkU2X;J1,51Z!~2p[JW.DT|g:4l@';

const __filename = fileURLToPath(import.meta.url);

export const __dirname = path.dirname(__filename);

export const createHash = (password) => bcrypt.hashSync(password, bcrypt.genSaltSync(10));

export const isValidPassword = (password, user) => bcrypt.compareSync(password, user.password);

export const tokenGenerator = (user) => {
  const { _id, first_name, last_name, email } = user;
  const payload = {
    id: _id,
    first_name,
    last_name,
    email
  };
  return jwt.sign(payload, JWT_SECRET, { expiresIn: '10s' });
};

export const verifyToken = (token) => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, JWT_SECRET, (error, payload) => {
      if (error) {
        return reject(error);
      }
      resolve(payload);
    });
  });
}

export const authMiddleware = (strategy) => (req, res, next) => {
  passport.authenticate(strategy, function(error, payload, info) {
    if (error) {
      return next(error);
    }
    if (!payload) {
      return res.status(401).json({ message: info.message ? info.message : info.toString() });
    }
    req.user = payload;
    next();
  })(req, res, next);
};