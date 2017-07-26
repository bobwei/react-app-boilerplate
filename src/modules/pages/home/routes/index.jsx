import React from 'react';
import Route from 'react-router-dom/Route';

const Routes = () =>
  <Route>
    <Route exact path="/" component={require('../components/Home').default} />
  </Route>;

export default Routes;
