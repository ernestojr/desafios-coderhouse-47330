import path from 'path';
import { fileURLToPath } from 'url';
import jwt from 'jsonwebtoken';

const __filename = fileURLToPath(import.meta.url);

export const __dirname = path.dirname(__filename);

export const JWT_SECRET = 'qBvPkU2X;J1,51Z!~2p[JW.DT|g:4l@';

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


export class Exception extends Error {
  constructor(message, statusCode) {
    super(message);
    this.status = statusCode;
  }
}
export class NotFoundException extends Exception {
  constructor(message) {
    super(message, 404);
  }
}

export class BadRequestException extends Exception {
  constructor(message) {
    super(message, 400);
  }
}

export class UnauthorizedException extends Exception {
  constructor(message) {
    super(message, 401);
  }
}

export class ForbiddenException extends Exception {
  constructor(message) {
    super(message, 403);
  }
}