import React from 'react';
import { Route } from 'react-router';

const routes = (
  <Route
    childRoutes={[
      require('modules/pages/home/routes'),
    ]}
  />
);

export default routes;
