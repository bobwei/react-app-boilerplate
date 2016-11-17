/* eslint-disable global-require */
import React from 'react';
import { Router, Route } from 'react-router';

import Root from '../containers/Root';

export default history => (
  <Router history={history}>
    <Route
      component={Root}
      childRoutes={[
        require('./Home'),
      ]}
    />
  </Router>
);
