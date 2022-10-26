const winston = require('winston');
const expressWinston = require('express-winston');
const path = require('path');
const { IS_DEVELOPMENT } = require('../environment');

const requestLoggerOptions = {};
const errorLoggerOptions = {};

if (IS_DEVELOPMENT) {
  requestLoggerOptions.format = winston.format.simple();
  requestLoggerOptions.transports = [new winston.transports.Console()];
  requestLoggerOptions.msg = 'HTTP {{req.method}} {{req.url}} - {{res.statusCode}} {{res.responseTime}}ms';
  requestLoggerOptions.meta = false;
  requestLoggerOptions.metaField = null;

  errorLoggerOptions.format = winston.format.simple();
  errorLoggerOptions.transports = [new winston.transports.Console()];
  errorLoggerOptions.msg = '{{res.statusCode}} {{req.method}} {{req.url}} - {{err.message}}';
  errorLoggerOptions.meta = false;
  errorLoggerOptions.metaField = null;
  errorLoggerOptions.blacklistedMetaFields = [
    'date', 'error', 'exception', 'level', 'message', 'os', 'process', 'stack', 'trace',
  ];
} else {
  const logsDirectory = path.join(__dirname, '../../logs');

  requestLoggerOptions.format = winston.format.json();
  requestLoggerOptions.transports = [
    new winston.transports.File({
      filename: path.join(logsDirectory, 'request.log'),
    }),
  ];

  errorLoggerOptions.format = winston.format.json();
  errorLoggerOptions.transports = [
    new winston.transports.File({
      filename: path.join(logsDirectory, 'error.log'),
    }),
  ];
}

/**
 * Logs incoming requests
 */
const requestLogger = expressWinston.logger(requestLoggerOptions);

/**
 * Logs server produced errors
 */
const errorLogger = expressWinston.errorLogger(errorLoggerOptions);

module.exports = {
  requestLogger,
  errorLogger,
};
