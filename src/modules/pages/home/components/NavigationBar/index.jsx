import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router';
import { LinkContainer } from 'react-router-bootstrap';
import R from 'ramda';
import compose from 'recompose/compose';
import withState from 'recompose/withState';
import withProps from 'recompose/withProps';

import { userSelector } from 'modules/auth/selectors';
import * as predicates from 'modules/auth/predicates';
import * as actions from 'modules/auth/actions';

const NavigationBar = ({ isAuthenticated, logout, isLoggingOut }) => (
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <Link to="/">
          React App Boilerplate
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <LinkContainer to="/admin">
          <NavItem eventKey={1}>Admin Portal</NavItem>
        </LinkContainer>
      </Nav>
      {!isAuthenticated &&
        <Nav pullRight>
          <LinkContainer to="/login">
            <NavItem eventKey={1}>Login</NavItem>
          </LinkContainer>
        </Nav>
      }
      {isAuthenticated &&
        <Nav pullRight onSelect={logout}>
          <NavItem eventKey={1}>
            {(isLoggingOut) ? 'Loading...' : 'Logout'}
          </NavItem>
        </Nav>
      }
    </Navbar.Collapse>
  </Navbar>
);

NavigationBar.propTypes = {
  isAuthenticated: React.PropTypes.bool,
  logout: React.PropTypes.func,
  isLoggingOut: React.PropTypes.bool,
};

export default compose(
  connect(
    state => ({
      isAuthenticated: R.compose(predicates.isAuthenticated, userSelector())(state),
    }),
    dispatch => bindActionCreators(actions, dispatch),
  ),
  withState('isLoggingOut', 'setIsLoggingOut', false),
  withProps(({ logout, setIsLoggingOut }) => ({
    logout() {
      if (window.confirm('Are you sure you want to logout ?')) {
        setIsLoggingOut(true);
        return logout()
          .then(() => setIsLoggingOut(false))
          .catch(() => setIsLoggingOut(false));
      }
      return false;
    },
  })),
)(NavigationBar);
