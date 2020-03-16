'use strict';

const config = require('./build/config').default;

exports.config = {
  app_name: ['almundo-test'],
  license_key: config.newrelic.license,
  logging: {
    enabled: false,
  },
  attributes: {
    include: ['request.parameters.*'],
  },
};
