/* eslint-disable global-require */
import React from 'react';
import { Route } from 'react-router';

import Layout from '../components/Layout';

const routes = (
  <Route
    component={Layout}
    childRoutes={[
      require('../pages/Home/routes'),
    ]}
  />
);

export default routes;
