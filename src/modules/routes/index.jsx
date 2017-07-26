import React from 'react';
import Switch from 'react-router-dom/Switch';
import Route from 'react-router-dom/Route';

const Routes = () =>
  <Switch>
    <Route component={require('modules/pages/home/routes').default} />
  </Switch>;

export default Routes;
