import dotenv from 'dotenv';

let pathEnvFile = null;
if (process.env.ENV !== 'production') {
  pathEnvFile = './.env.dev';
} else {
  pathEnvFile = './.env.prod';
}
dotenv.config({ path: pathEnvFile });

export default {
  port: process.env.PORT,
  env: process.env.ENV,
  db: {
    mongodbUri: process.env.MONGODB_URI,
  },
  jwtSecret: process.env.JWT_SECRET,
  cookeSecret: process.env.COOKE_SECRET,
  sessionSecret: process.env.SESSION_SECRET,
}