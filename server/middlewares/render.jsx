/* eslint-disable import/no-extraneous-dependencies */
import express from 'express';
import path from 'path';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import { Provider } from 'react-redux';
import createMemoryHistory from 'history/lib/createMemoryHistory';

import createRoutes from '../../build/routes';
import configureStore from '../../build/stores';

export default () => {
  const app = express();
  app.set('views', path.join(__dirname, '../views'));
  app.set('view engine', 'ejs');

  const routes = createRoutes(createMemoryHistory());

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
        const html = renderToStaticMarkup(
          <Provider store={store} >
            <RouterContext {...renderProps} />
          </Provider>,
        );
        res.render('index', {
          html,
        });
      } else {
        res.status(404).send('Not found');
      }
    });
  });

  return app;
};
