/* eslint-disable react/prop-types */
import React from 'react';
import { Provider } from 'react-redux';
import { Router, browserHistory, hashHistory } from 'react-router';

import theRoutes from '../../routes';

const CLIENT_HISTORY = process.env.CLIENT_HISTORY;

const Root = ({ store, history, routes }) => (
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>
);

Root.defaultProps = {
  history: (location.protocol === 'file:' || CLIENT_HISTORY === 'hash') ? hashHistory : browserHistory,
  routes: theRoutes,
};

export default Root;
