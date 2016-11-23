import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { compose, withProps } from 'recompose';
import { reduxForm, Field, SubmissionError } from 'redux-form';

import styles from './index.scss';
import * as actions from '../../actions';
import FormField from '../../../../components/FormField';

const LoginForm = ({ handleSubmit, submitting }) => (
  <form onSubmit={handleSubmit}>
    <Field
      name="username"
      component={FormField}
      label="帳號"
      inputComponent="input"
      inputProps={{
        type: 'text',
        className: 'form-control',
        autoFocus: true,
      }}
    />
    <Field
      name="password"
      component={FormField}
      label="密碼"
      inputComponent="input"
      inputProps={{
        type: 'password',
        className: 'form-control',
      }}
    />
    <Row>
      <Col mdOffset={4} md={4}>
        <button type="submit" className={`btn btn-red btn-block ${styles.btnSubmit}`}>
          {(submitting) ? '讀取中...' : '登入'}
        </button>
      </Col>
    </Row>
  </form>
);

LoginForm.propTypes = {
  handleSubmit: React.PropTypes.func,
  submitting: React.PropTypes.bool,
};

export default compose(
  connect(
    null,
    dispatch => bindActionCreators(actions, dispatch),
  ),
  withProps(({ login }) => ({
    onSubmit(data) {
      return login(data)
        .catch(() => {
          throw new SubmissionError({ username: '登入錯誤' });
        });
    },
  })),
  reduxForm({
    form: 'login',
  }),
)(LoginForm);
