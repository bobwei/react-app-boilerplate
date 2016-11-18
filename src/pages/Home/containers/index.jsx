import React from 'react';
import { connect } from 'react-redux';

import styles from './index.scss';

const Home = () => (
  <div className={styles.index}>
    Hello World
  </div>
);

export default connect()(Home);
