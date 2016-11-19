import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import styles from './index.scss';

const Home = () => (
  <div className={styles.index}>
    <div className={styles.title}>
      Hello World
    </div>
    <Link to="/login" className={`btn btn-default ${styles.btnLogin}`}>
      Login
    </Link>
  </div>
);

export default connect()(Home);
