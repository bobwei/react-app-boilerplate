import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { compose, withProps } from 'recompose';
import { reduxForm, Field } from 'redux-form';

import styles from './index.scss';
import * as actions from '../../actions';

const LoginForm = ({ handleSubmit, submitting }) => (
  <form onSubmit={handleSubmit}>
    <div className="form-group">
      <label htmlFor="username">
        帳號
      </label>
      <Field
        name="username"
        component="input"
        type="text"
        className="form-control"
        placeholder="帳號"
        autoFocus
      />
    </div>
    <div className="form-group">
      <label htmlFor="password">
        密碼
      </label>
      <Field
        name="password"
        component="input"
        type="password"
        className="form-control"
        placeholder="密碼"
      />
    </div>
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
      return login(data);
    },
  })),
  reduxForm({
    form: 'login',
  }),
)(LoginForm);
