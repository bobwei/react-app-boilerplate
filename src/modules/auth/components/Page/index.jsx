import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import styles from './index.scss';

const Page = ({ children }) => (
  <Grid className={styles.page}>
    <Row>
      <Col mdOffset={3} md={6}>
        {children}
      </Col>
    </Row>
  </Grid>
);

export default Page;
