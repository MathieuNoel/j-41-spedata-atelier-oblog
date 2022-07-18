const express = require('express');

const apidocs = require('./helpers/apidocs');

const errorHandler = require('./helpers/errorHandler');

const ApiError = require('./errors/apiError');

const logger = require('./helpers/logger');

process.on('uncaughtException', () => {
  logger.info('erreur non catché');
});

process.on('unhandledRejection', () => {
  logger.info('erreur non catché');
});

const router = require('./routers');

const app = express();

app.use(express.json());

apidocs(app);

app.use(router);

app.use((req, res, next) => {
  next(new ApiError('endpoint not found', { statusCode: 404 }))
});

app.use(errorHandler);

module.exports = app;