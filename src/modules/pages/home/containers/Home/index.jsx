/* eslint-disable react/forbid-prop-types */
import React from 'react';
import compose from 'recompose/compose';

import styles from './index.scss';

const Home = () => (
  <div className={styles.index}>
    <div className={styles.title}>
      React App Boilerplate
    </div>
  </div>
);

export default compose()(Home);
