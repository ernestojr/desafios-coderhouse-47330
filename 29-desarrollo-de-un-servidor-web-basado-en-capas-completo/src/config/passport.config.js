import passport from 'passport';
import { Strategy as JWTStrategy, ExtractJwt } from 'passport-jwt';

import UserService from '../dao/user.mongodb.dao.js'
import { JWT_SECRET } from '../utils.js';

function cookieExtractor(req) {
  let token = null;
  if (req && req.cookies) {
    token = req.cookies.access_token;
  }
  return token;
}

export const init = () => {
  passport.use('jwt', new JWTStrategy({
    jwtFromRequest: ExtractJwt.fromExtractors([cookieExtractor]),
    secretOrKey: JWT_SECRET,
  }, async (payload, done) => {
    const user = await UserService.getById(payload.id);
    done(null, user);
  }));
};
