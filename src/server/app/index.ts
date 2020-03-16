import * as express from 'express';
import * as path from 'path';

const pugInjectEngine = require('pug-inject-express-engine');

const DIST_PATH = path.join(__dirname, '../../dist');
const PARTIALS_PATH = path.join(__dirname, 'partials');

const app = express();

app.disable('x-powered-by');
app.engine('html', pugInjectEngine({ partials: PARTIALS_PATH }));
app.set('views', DIST_PATH);
app.set('view engine', 'html');

app.use('/dist', express.static(DIST_PATH));

app.use('/assets', (req, res) => {
  const locale = req.context ? req.context.locale : 'es-AR';
  const root = path.join(DIST_PATH, locale, 'assets');
  res.sendFile(req.path.slice(1), { root });
});

app.use('/', (req, res) => {
  const locale = req.context ? req.context.locale : 'es-AR';
  const index = path.join(locale, 'index');
  res.render(index, { context: req.context });
});

export default app;
