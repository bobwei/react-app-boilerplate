/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import compose from 'recompose/compose';

import { userSelector } from 'modules/auth/selectors';
import * as actions from 'modules/auth/actions';
import { isAuthenticated } from 'modules/auth/predicates';

import styles from './index.scss';

const Home = ({ user, logout }) => (
  <div className={styles.index}>
    <div className={styles.title}>
      React App Boilerplate
    </div>
    {!isAuthenticated(user) &&
      <div>
        <Link to="/admin" className={`btn btn-default ${styles.btnLogin}`}>
          Admin Portal
        </Link>
        <Link to="/login" className={`btn btn-default ${styles.btnLogin}`}>
          Login
        </Link>
      </div>
    }
    {isAuthenticated(user) &&
      <div>
        <Link to="/admin" className={`btn btn-default ${styles.btnLogin}`}>
          Admin Portal
        </Link>
        <button className={`btn btn-default ${styles.btnLogin}`} onClick={logout}>
          Logout
        </button>
      </div>
    }
  </div>
);

Home.propTypes = {
  user: React.PropTypes.object,
  logout: React.PropTypes.func,
};

export default compose(
  connect(
    state => ({ user: userSelector(state) }),
    dispatch => bindActionCreators(actions, dispatch),
  ),
)(Home);
