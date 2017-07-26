import React from 'react';
import Switch from 'react-router-dom/Switch';
import Route from 'react-router-dom/Route';

const Routes = () =>
  <Switch>
    <Route
      exact
      path="/"
      component={require('modules/pages/home/components/Home').default}
    />
  </Switch>;

export default Routes;
