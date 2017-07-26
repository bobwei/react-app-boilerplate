/* eslint-disable react/prop-types */
import React from 'react';
import { Provider } from 'react-redux';

import Routes from 'modules/routes';

const Root = ({ store, Router }) =>
  <Provider store={store}>
    <Router>
      <Routes />
    </Router>
  </Provider>;

export default Root;
