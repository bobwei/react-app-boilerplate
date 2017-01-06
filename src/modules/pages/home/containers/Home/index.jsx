import React from 'react';
import compose from 'recompose/compose';
import { Jumbotron, Grid } from 'react-bootstrap';

const Home = () => (
  <Grid>
    <Jumbotron>
      <h2>Hello, React App Boilerplate</h2>
      <p>
        This is a react app boilerplate with batteries included.
      </p>
    </Jumbotron>
  </Grid>
);

export default compose()(Home);
