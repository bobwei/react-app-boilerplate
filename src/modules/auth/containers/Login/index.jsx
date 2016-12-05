import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import compose from 'recompose/compose';

import styles from './index.scss';
import LoginForm from '../../components/LoginForm';
import { IsNotAuthenticated } from '../../decorators';

const LoginPage = () => (
  <Grid>
    <Row>
      <Col mdOffset={3} md={6}>
        <div className={styles.loginForm}>
          <div className={styles.header}>
            登入
          </div>
          <div className={styles.body}>
            <LoginForm />
          </div>
        </div>
      </Col>
    </Row>
  </Grid>
);

export default compose(
  IsNotAuthenticated,
)(LoginPage);
