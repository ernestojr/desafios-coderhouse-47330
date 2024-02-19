import { UnauthorizedException } from '../utils/exception.js';
import { varifyToken } from '../utils/utils.js';

export const authRole = roles => (req, res, next) => {
  const { user } = req;
  if(!user) {
    return next(new UnauthorizedException('Unauthorized 😨.'));
  }
  if (!roles.includes(user.role)) {
    return next(new UnauthorizedException('Forbidden 😨.'));
  }
  next();
};

export const authToken = async (req, res, next) => {
  const accessToken = req.cookies['access_token'];
  if (!accessToken) {
    return next(new UnauthorizedException('Unauthorized 😨.'));
  }
  try {
    req.user = await varifyToken(accessToken);
    next();
  } catch (error) {
    next(new UnauthorizedException(error.message));
  }
};