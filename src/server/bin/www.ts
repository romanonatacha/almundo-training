import 'newrelic';
import * as http from 'http';

import { getEnvironment } from '../shared/env';
import { logger } from '../shared/logger';
import { server } from '../index';

const port = normalizePort(process.env.PORT || '5000');
server.set('port', port);

const httpServer = http.createServer(server);

httpServer.listen(port);
httpServer.on('error', onError);
httpServer.on('listening', onListening);

function normalizePort(portArg: string): boolean | number {
  const parsed = parseInt(portArg, 10);
  return parsed > 0 ? parsed : false;
}

function onError(error: any) {
  if (error.syscall !== 'listen') {
    throw error;
  }
  logger.error(error);
  process.exit(1);
}

function onListening() {
  const address = httpServer.address();
  const bind = typeof address === 'string' ? `pipe ${address}` : `port ${address.port}`;
  logger.info(`Listening on ${bind} - Environment: ${getEnvironment()}`);
}
