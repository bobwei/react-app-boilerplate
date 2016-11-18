/* eslint-disable global-require */
import React from 'react';
import { Router, Route } from 'react-router';

import Layout from '../components/Layout';

export default history => (
  <Router history={history}>
    <Route
      component={Layout}
      childRoutes={[
        require('../pages/Home/routes'),
      ]}
    />
  </Router>
);
