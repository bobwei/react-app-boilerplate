import express from 'express';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

import getPublicEnv from 'modules/env/selectors/getPublicEnv';

import HTML from '../../src/html';

const createClientRendering = () => {
  const app = express();
  const env = getPublicEnv(process.env);

  app.get('*', (req, res) => {
    const initialState = { env };
    const html = renderToStaticMarkup(
      <HTML serverRenderingBody="" initialState={initialState} />,
    );
    res.send(`<!doctype html>${html}`);
  });

  return app;
};

export default createClientRendering;
