import React from 'react';
import Jumbotron from 'react-bootstrap/lib/Jumbotron';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';

const Home = () => (
  <Grid>
    <Row>
      <Jumbotron>
        <h2>Hello, React App Boilerplate</h2>
        <p>This is a react app boilerplate with batteries included.</p>
      </Jumbotron>
    </Row>
  </Grid>
);

export default Home;
