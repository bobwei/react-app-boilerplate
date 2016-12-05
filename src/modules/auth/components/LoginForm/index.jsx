import React from 'react';
import { Row, Col, Alert, Form } from 'react-bootstrap';
import { Field } from 'redux-form';

import FieldGroup from 'components/FieldGroup';
import styles from './index.scss';

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

export default LoginForm;
