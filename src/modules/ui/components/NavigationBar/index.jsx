import React from 'react';
import Navbar from 'react-bootstrap/lib/Navbar';
import Link from 'react-router-dom/Link';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import LinkContainer from 'react-router-bootstrap/lib/LinkContainer';

const NavigationBar = () =>
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <Link to="/">React App Boilerplate</Link>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Nav>
      <LinkContainer to="/dashboard">
        <NavItem>Dashboard</NavItem>
      </LinkContainer>
    </Nav>
  </Navbar>;

export default NavigationBar;
