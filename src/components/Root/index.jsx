/* eslint-disable react/prop-types */
import React from 'react';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import theRoutes from '../../routes';

const Root = ({ store, history, routes }) => (
  <Provider store={store}>
    <Router history={syncHistoryWithStore(history, store)} routes={routes} />
  </Provider>
);

Root.defaultProps = {
  history: browserHistory,
  routes: theRoutes,
};

export default Root;
