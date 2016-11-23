import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router';
import { LinkContainer } from 'react-router-bootstrap';

const NavigationBar = () => (
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <Link to="/">
          React App Boilerplate
        </Link>
      </Navbar.Brand>
    </Navbar.Header>
    <Nav>
      <LinkContainer to="/">
        <NavItem eventKey={1}>Home</NavItem>
      </LinkContainer>
    </Nav>
  </Navbar>
);

export default NavigationBar;
