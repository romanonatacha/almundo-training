import local from './local';
import development from './development';
import staging from './staging';
import production from './production';
import { getEnvironment } from '../shared/env';

const configs = {
  local,
  development,
  staging,
  production,
};

export default configs[getEnvironment()];
