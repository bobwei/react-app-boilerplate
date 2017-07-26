import React from 'react';
import Route from 'react-router-dom/Route';

const Routes = () =>
  <Route path="/" component={require('../components/Home').default} />;

export default Routes;
