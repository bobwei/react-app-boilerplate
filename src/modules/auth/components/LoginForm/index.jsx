import React from 'react';
import { Row, Col, Alert, Form } from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { compose, withProps } from 'recompose';
import { reduxForm, Field, SubmissionError } from 'redux-form';

import FieldGroup from 'components/FieldGroup';
import styles from './index.scss';
import * as actions from '../../actions';

const LoginForm = ({ handleSubmit, submitting, error }) => (
  <Form onSubmit={handleSubmit}>
    {!!error &&
      <Alert bsStyle="warning">
        {error}
      </Alert>
    }
    <Field
      name="username"
      component={FieldGroup}
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
      component={FieldGroup}
      label="密碼"
      inputComponent="input"
      inputProps={{
        type: 'password',
        className: 'form-control',
      }}
    />
    <Row>
      <Col mdOffset={4} md={4}>
        <button type="submit" className={`btn btn-red btn-block ${styles.btnSubmit}`} disabled={submitting}>
          {(submitting) ? '讀取中...' : '登入'}
        </button>
      </Col>
    </Row>
  </Form>
);

LoginForm.propTypes = {
  handleSubmit: React.PropTypes.func,
  submitting: React.PropTypes.bool,
  error: React.PropTypes.string,
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
          throw new SubmissionError({ _error: '登入錯誤' });
        });
    },
  })),
  reduxForm({
    form: 'login',
  }),
)(LoginForm);
