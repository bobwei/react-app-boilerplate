import React from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Col } from 'react-bootstrap';

import styles from './index.scss';
import LoginForm from '../../components/LoginForm';

const LoginPage = ({ user }) => (
  <Grid>
    <Row>
      <Col mdOffset={3} md={6}>
        <div className={styles.loginForm}>
          <div className={styles.header}>
            登入
          </div>
          <div className={styles.body}>
            {!user.objectId &&
              <LoginForm />
            }
            {user.objectId &&
              <div className={styles.loggedIn}>
                <div>
                  {user.username} 已登入
                </div>
                <button className={`btn btn-default ${styles.logout}`}>
                  登出
                </button>
              </div>
            }
          </div>
        </div>
      </Col>
    </Row>
  </Grid>
);

LoginPage.propTypes = {
  user: React.PropTypes.shape({
    objectId: React.PropTypes.string,
    username: React.PropTypes.string,
  }),
};

export default connect(({ user: { data } }) => ({ user: data }))(LoginPage);
