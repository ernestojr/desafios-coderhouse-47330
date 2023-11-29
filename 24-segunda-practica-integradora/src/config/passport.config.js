import passport from 'passport';
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';
import { JWT_SECRET } from '../utils.js';

function coookieExtractor(req) {
  let token = null;
  if (req && req.signedCookies) {
    token = req.signedCookies['access_token'];
  }
  return token;
}

const opts = {
  jwtFromRequest: ExtractJwt.fromExtractors([coookieExtractor]),
  secretOrKey: JWT_SECRET,
};

export const init = () => {
  passport.use('jwt', new JwtStrategy(opts, (payload, done) => {
    return done(null, payload);
  }));
};