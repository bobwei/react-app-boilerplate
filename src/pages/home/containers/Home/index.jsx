/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import compose from 'recompose/compose';
import withState from 'recompose/withState';
import withProps from 'recompose/withProps';

import { userSelector } from 'modules/auth/selectors';
import * as actions from 'modules/auth/actions';
import { isAuthenticated } from 'modules/auth/predicates';
import Button from 'components/Button';
import SubmitButton from 'components/SubmitButton';

import styles from './index.scss';

const Home = ({ user, logout, isLoggingOut }) => (
  <div className={styles.index}>
    <div className={styles.title}>
      React App Boilerplate
    </div>
    {!isAuthenticated(user) &&
      <div>
        <Button to="/admin" componentClass={Link} bsStyle="default" className={styles.btnLogin}>
          Admin Portal
        </Button>
        <Button to="/login" componentClass={Link} bsStyle="default" className={styles.btnLogin}>
          Login
        </Button>
      </div>
    }
    {isAuthenticated(user) &&
      <div>
        <Button to="/admin" componentClass={Link} bsStyle="default" className={styles.btnLogin}>
          Admin Portal
        </Button>
        <SubmitButton
          className={styles.btnLogin}
          submitting={isLoggingOut}
          submitLabel="Logout"
          bsStyle="default"
          onClick={logout}
        />
      </div>
    }
  </div>
);

Home.propTypes = {
  user: React.PropTypes.object,
  logout: React.PropTypes.func,
  isLoggingOut: React.PropTypes.bool,
};

export default compose(
  connect(
    state => ({ user: userSelector(state) }),
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
)(Home);
