import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);

export const __dirname = path.dirname(__filename);


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