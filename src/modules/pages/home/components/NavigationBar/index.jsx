import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router';
import compose from 'recompose/compose';

const NavigationBar = () => (
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <Link to="/">
          React App Boilerplate
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
  </Navbar>
);

export default compose()(NavigationBar);
