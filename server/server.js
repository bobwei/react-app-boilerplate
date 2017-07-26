import express from 'express';
import compression from 'compression';
import 'dotenv/config';

import assets from './assets';
import createRendering from './renders/createClientRendering';

const { NODE_ENV, PORT = 5012 } = process.env;

/* server configs */
const app = express();
app.set('port', PORT);

/* middlewares */
app.use(compression());
app.use(assets());
app.use(createRendering());

/* start server */
app.listen(app.get('port'), () => {
  console.log('Node app is running on port', app.get('port'));
  if (NODE_ENV !== 'production') {
    console.log(`Open Url http://localhost:${app.get('port')} to get started`);
  }
});
