import React from 'react';
import Jumbotron from 'react-bootstrap/lib/Jumbotron';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import withRouter from 'react-router-dom/withRouter';
import { requireAuth } from 'redux-modular-auth';
import compose from 'recompose/compose';

import AuthenticationRedirect from 'modules/auth/components/AuthenticationRedirect';

const Dashboard = () => (
  <Grid>
    <Row>
      <Jumbotron>
        <h2>Dashboard</h2>
      </Jumbotron>
    </Row>
  </Grid>
);

export default compose(
  withRouter,
  requireAuth({
    UnauthenticatedComponent: AuthenticationRedirect,
  }),
)(Dashboard);
