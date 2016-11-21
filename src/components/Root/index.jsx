/* eslint-disable react/prop-types */
import React from 'react';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';

import theRoutes from '../../routes';

const Root = ({ store, history, routes }) => (
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>
);

Root.defaultProps = {
  history: browserHistory,
  routes: theRoutes,
};

export default Root;
