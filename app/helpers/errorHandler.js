const logger = require('./logger');

module.exports = (err, req, res, next) => {
  logger.error(err);
  let statusCode;
  let message;
  if(err.name === 'ApiError') {
    statusCode = err.info?.statusCode ?? 400;
    message = err.message;
  } else if (err.name === 'PostError') {
    statusCode = 500;
    message = err.message;
  } else if (err.name === 'CategoryError') {
    statusCode = 500;
    message = err.message;
  } else if (err.name === 'ValidationError') {
    statusCode = err.message;
  } else {
    statusCode = 500;
    message = 'Internal server error'
  }
  res.status(statusCode).json({ error: message });
};