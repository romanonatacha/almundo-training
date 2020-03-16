import { LoggerBuilder } from '@am/bunyan-logger-builder';

import config from '../config';

const loggerBuilder = new LoggerBuilder('almundo-test');

if (config.logger.console) {
  loggerBuilder.addStdoutStream('debug');
}

if (config.logger.logstash) {
  loggerBuilder.addLogstashStream(config.logger.logstash);
}

const logger = loggerBuilder.build();

export { logger };
