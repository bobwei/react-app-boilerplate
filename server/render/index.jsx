import express from 'express';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import HTML from '../../src/html';
import getPublicEnv from '../../src/modules/env/selectors/getPublicEnv';

export default () => {
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
