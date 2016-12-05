import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import compose from 'recompose/compose';
import withProps from 'recompose/withProps';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { reduxForm, SubmissionError } from 'redux-form';

import styles from './index.scss';
import LoginForm from '../../components/LoginForm';
import { IsNotAuthenticated } from '../../decorators';
import * as actions from '../../actions';

const EnhancedLoginForm = compose(
  connect(
    null,
    dispatch => bindActionCreators(actions, dispatch),
  ),
  withProps(({ login }) => ({
    onSubmit(data) {
      return login(data)
        .catch(() => {
          throw new SubmissionError({ _error: '登入錯誤' });
        });
    },
  })),
  reduxForm({
    form: 'login',
  }),
)(LoginForm);

const LoginPage = () => (
  <Grid>
    <Row>
      <Col mdOffset={3} md={6}>
        <div className={styles.loginForm}>
          <div className={styles.header}>
            登入
          </div>
          <div className={styles.body}>
            <EnhancedLoginForm />
          </div>
        </div>
      </Col>
    </Row>
  </Grid>
);

export default compose(
  IsNotAuthenticated,
)(LoginPage);
