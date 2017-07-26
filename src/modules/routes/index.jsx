import React from 'react';
import Route from 'react-router-dom/Route';

const Routes = () =>
  <Route>
    {require('modules/pages/home/routes').default}
  </Route>;

export default Routes;
