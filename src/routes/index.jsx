import React from 'react';
import { Route } from 'react-router';

const routes = (
  <Route
    childRoutes={[
      require('modules/pages/home/routes').default,
    ]}
  />
);

export default routes;
