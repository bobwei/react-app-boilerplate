/* eslint-disable react/prop-types */
import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router';

import routes from 'modules/routes';

const Root = ({ store, history }) =>
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>;

export default Root;
