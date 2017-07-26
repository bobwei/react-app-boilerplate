import express from 'express';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import HTML from '../../src/html';
import publicEnv from '../../src/modules/env/selectors/publicEnv';

export default () => {
  const app = express();
  const env = publicEnv(process.env);

  app.get('*', (req, res) => {
    const html = renderToStaticMarkup(
      <HTML serverRenderingBody="" env={env} />,
    );
    res.send(`<!doctype html>${html}`);
  });

  return app;
};
