import passport from 'passport';

import { JWT_SECRET } from '../utils.js';

import { Strategy as JWTStrategy, ExtractJwt } from 'passport-jwt';

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
  }, (payload, done) => {
    return done(null, payload);
  }));
};