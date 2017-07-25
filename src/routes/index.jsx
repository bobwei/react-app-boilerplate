import React from 'react';
import { Route } from 'react-router';

const routes = (
  <Route
    childRoutes={[
      require('modules/pages/home/routes'),
      require('modules/auth/routes'),
    ]}
  />
);

export default routes;
