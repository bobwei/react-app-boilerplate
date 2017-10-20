import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import StaticRouter from 'react-router-dom/StaticRouter';
import withProps from 'recompose/withProps';

import getPublicEnv from 'modules/env/selectors/getPublicEnv';
import configureStore from 'modules/stores/configureStore';

import HTML from '../../src/html';
import Root from '../../build/server/modules/ui/components/Root';

const createServerRendering = () => {
  const app = express();
  const env = getPublicEnv(process.env);

  app.get('*', (req, res) => {
    const initialState = { env };
    const store = configureStore(initialState);
    const context = {};
    const Router = withProps({ location: req.url, context })(StaticRouter);
    const serverRenderingBody = renderToString(
      <Root store={store} Router={Router} />,
    );
    if (context.url) {
      res.redirect(301, context.url);
      return;
    }
    const html = renderToString(
      <HTML
        serverRenderingBody={serverRenderingBody}
        initialState={initialState}
      />,
    );
    res.send(`<!doctype html>${html}`);
  });

  return app;
};

export default createServerRendering;
