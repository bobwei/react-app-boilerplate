import React from 'react';
import Jumbotron from 'react-bootstrap/lib/Jumbotron';
import Grid from 'react-bootstrap/lib/Grid';
import compose from 'recompose/compose';

const Home = () =>
  <Grid>
    <Jumbotron>
      <h2>Hello, React App Boilerplate</h2>
      <p>This is a react app boilerplate with batteries included.</p>
    </Jumbotron>
  </Grid>;

export default compose()(Home);
