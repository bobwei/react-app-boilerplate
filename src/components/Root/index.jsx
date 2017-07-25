/* eslint-disable react/prop-types */
import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router';

import theRoutes from '../../routes';

const Root = ({ store, history, routes }) => (
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>
);

Root.defaultProps = {
  routes: theRoutes,
};

export default Root;
