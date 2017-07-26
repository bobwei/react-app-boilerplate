import React from 'react';
import Jumbotron from 'react-bootstrap/lib/Jumbotron';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Redirect from 'react-router-dom/Redirect';
import { requireAuth } from 'redux-modular-auth';
import compose from 'recompose/compose';

const Dashboard = () =>
  <Grid>
    <Row>
      <Jumbotron>
        <h2>Dashboard</h2>
      </Jumbotron>
    </Row>
  </Grid>;

export default compose(
  requireAuth({
    UnauthenticatedComponent: () => <Redirect to="/login" />,
  }),
)(Dashboard);
