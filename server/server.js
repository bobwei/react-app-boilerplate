import express from 'express';
import compression from 'compression';
import dotenv from 'dotenv';

import assets from './assets';
import render from './render';

dotenv.config();

const { NODE_ENV, PORT } = process.env;

/* server configs */
const app = express();
app.set('port', (PORT || 5012));

/* middlewares */
app.use(compression());
app.use(assets());
app.use(render());

/* start server */
app.listen(app.get('port'), () => {
  console.log('Node app is running on port', app.get('port'));
  if (NODE_ENV !== 'production') {
    console.log(`Open Url http://localhost:${app.get('port')} to get started`);
  }
});
