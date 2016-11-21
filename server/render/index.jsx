/* eslint-disable import/no-extraneous-dependencies */
import express from 'express';
import React from 'react';
import { renderToStaticMarkup, renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import { Provider } from 'react-redux';

import routes from '../../build/server/routes';
import configureStore from '../../build/server/stores';
import HTML from '../../src/html';
import { envSelector } from '../../src/utils';

const envs = envSelector(process.env);

export default () => {
  const app = express();

  app.get('*', (req, res) => {
    const store = configureStore({});

    match({
      routes,
      location: req.url,
    }, (error, redirectLocation, renderProps) => {
      if (error) {
        res.status(500).send(error.message);
      } else if (redirectLocation) {
        res.redirect(302, redirectLocation.pathname + redirectLocation.search);
      } else if (renderProps) {
        const serverRenderingBody = renderToString(
          <Provider store={store} >
            <RouterContext {...renderProps} />
          </Provider>,
        );
        const html = renderToStaticMarkup(
          <HTML
            serverRenderingBody={serverRenderingBody}
            envs={envs}
          />,
        );
        res.send(`<!doctype html>${html}`);
      } else {
        res.status(404).send('Not found');
      }
    });
  });

  return app;
};
