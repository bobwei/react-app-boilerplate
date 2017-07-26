import React from 'react';
import Jumbotron from 'react-bootstrap/lib/Jumbotron';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';

import NavigationBar from '../NavigationBar';

const Home = () =>
  <Grid fluid>
    <Row>
      <NavigationBar />
    </Row>
    <Grid>
      <Jumbotron>
        <h2>Hello, React App Boilerplate</h2>
        <p>This is a react app boilerplate with batteries included.</p>
      </Jumbotron>
    </Grid>
  </Grid>;

export default Home;
