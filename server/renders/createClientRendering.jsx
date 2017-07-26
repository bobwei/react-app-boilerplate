import express from 'express';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

import getPublicEnv from 'modules/env/selectors/getPublicEnv';

import HTML from '../../src/html';

const createClientRendering = () => {
  const app = express();
  const env = getPublicEnv(process.env);

  app.get('*', (req, res) => {
    const html = renderToStaticMarkup(
      <HTML serverRenderingBody="" env={env} />,
    );
    res.send(`<!doctype html>${html}`);
  });

  return app;
};

export default createClientRendering;
