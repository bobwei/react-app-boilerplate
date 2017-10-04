import React from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Switch from 'react-router-dom/Switch';
import Route from 'react-router-dom/Route';

import NavigationBar from 'modules/ui/components/NavigationBar';

const Routes = () => (
  <Grid fluid>
    <Row>
      <NavigationBar />
    </Row>
    <Row>
      <Switch>
        <Route
          exact
          path="/"
          component={require('modules/pages/home/components/Home').default}
        />
        <Route
          exact
          path="/login"
          component={require('modules/auth/components/LoginForm').default}
        />
        <Route
          path="/dashboard"
          component={
            require('modules/pages/dashboard/components/Dashboard').default
          }
        />
      </Switch>
    </Row>
  </Grid>
);

export default Routes;
