import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router';
import { LinkContainer } from 'react-router-bootstrap';

const NavigationBar = () => (
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <Link to="/admin">
          Admin Portal
        </Link>
      </Navbar.Brand>
    </Navbar.Header>
    <Nav>
      <LinkContainer to="/admin">
        <NavItem eventKey={1}>Admin Portal</NavItem>
      </LinkContainer>
    </Nav>
  </Navbar>
);

export default NavigationBar;
