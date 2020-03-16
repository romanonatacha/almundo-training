import * as express from 'express';
import * as cookieParser from 'cookie-parser';
import * as core from '@am/core';

import app from './app';
import api from './api';
import { appErrorHandler } from './shared/error-handler';
import { requestLogger } from './middlewares/request-logger';
import { getEnvironment } from './shared/env';

const environment = getEnvironment();

const basePath = '';

const server: express.Application = express();
server.disable('x-powered-by');

if (environment === 'local') {
  server.use(requestLogger());
}

const healthcheck = require('express-healthcheck')();
server.get(basePath + '/health(check)?', healthcheck);

server.use(cookieParser());
server.use(core.amRequestIdentifier());
server.use(core.amContextResolverMiddleware());
server.use(core.createContinuationContext());

server.use(basePath + '/api', api);

if (environment !== 'local') {
  server.use(basePath, app);
}

server.use(core.fourOFourMiddleware());

server.use(
  core.errorHandlerMiddleware({
    handleError: appErrorHandler,
  }),
);

export { server };
