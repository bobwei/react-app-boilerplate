import React from 'react';
import { Row, Col, Alert, Form } from 'react-bootstrap';
import { Field } from 'redux-form';

import FieldGroup from 'components/FieldGroup';
import Button from 'components/Button';
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
      }}
    />
    <Row>
      <Col mdOffset={4} md={4}>
        <Button bsStyle="main" className={styles.btnSubmit} type="submit" disabled={submitting} block>
          {(submitting) ? '讀取中...' : '登入'}
        </Button>
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
