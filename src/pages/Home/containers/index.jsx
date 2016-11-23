/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import isEmpty from 'lodash.isempty';

import styles from './index.scss';
import { userSelector } from '../../../modules/auth/selectors';
import * as actions from '../../../modules/auth/actions';

const Home = ({ user, logout }) => (
  <div className={styles.index}>
    <div className={styles.title}>
      React App Boilerplate
    </div>
    {isEmpty(user) &&
      <div>
        <Link to="/login" className={`btn btn-default ${styles.btnLogin}`}>
          Login
        </Link>
        <Link to="/admin" className={`btn btn-default ${styles.btnLogin}`}>
          Admin Portal
        </Link>
      </div>
    }
    {!isEmpty(user) &&
      <div>
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

export default connect(
  userSelector,
  dispatch => bindActionCreators(actions, dispatch),
)(Home);
