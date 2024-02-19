import winston from 'winston';

import config from './config.js';

const levels = {
  panic: 0,
  error: 1,
  warn: 2,
  info: 3,
  debug: 4,
};

const colors = {
  panic: 'magenta',
  error: 'red',
  warn: 'yellow',
  info: 'blue',
  debug: 'cyan',
};

const transports = [
  new winston.transports.Console({
    level: config.loggerLevel,
    format: winston.format.combine(
      winston.format.colorize({ colors }),
      winston.format.simple(),
    ),
  }),
  new winston.transports.File({
    filename: config.loggerFilePath,
    level: config.loggerLevel,
  }),
];

export const logger = winston.createLogger({
  transports,
  levels,
});

export const addLogger = (req, res, next) => {
  req.logger = logger;
  next();
}