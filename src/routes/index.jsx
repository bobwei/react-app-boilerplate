/* eslint-disable global-require */
import React from 'react';
import { Route } from 'react-router';

const routes = (
  <Route
    childRoutes={[
      require('modules/pages/home/routes'),
      require('modules/auth/routes'),
      require('modules/pages/admin/routes'),
    ]}
  />
);

export default routes;
