import express from 'express';
import React from 'react';
import { renderToStaticMarkup, renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import { Provider } from 'react-redux';

import routes from '../../build/server/modules/routes';
import configureStore from '../../build/server/modules/stores/configureStore';
import HTML from '../../src/html';
import publicEnv from '../../src/modules/env/selectors/publicEnv';

const env = publicEnv(process.env);

export default () => {
  const app = express();

  app.get('*', (req, res) => {
    const html = renderToStaticMarkup(
      <HTML serverRenderingBody="" env={env} />,
    );
    res.send(`<!doctype html>${html}`);
  });

  return app;
};
