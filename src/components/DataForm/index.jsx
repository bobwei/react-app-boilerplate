import React from 'react';
import { Row, Col, Alert as BootStrapAlert, Form } from 'react-bootstrap';
import { Field } from 'redux-form';
import R from 'ramda';

import FieldGroup from '../FieldGroup';
import Button from '../Button';
import styles from './index.scss';

const DataForm = ({
  handleSubmit, submitting, error,
  alert, fields, submitButton,
}) => (
  <Form onSubmit={handleSubmit}>
    {error && React.createElement(alert, { error })}
    {fields.map(field => (
      <Field
        key={field.name}
        component={FieldGroup}
        {...field}
      />
    ))}
    {React.createElement(submitButton, { submitting })}
  </Form>
);

// eslint-disable-next-line
export const Alert = ({ error }) => (
  <BootStrapAlert bsStyle="warning">
    {R.ifElse(R.is(String), R.identity, str => JSON.stringify(str))(error)}
  </BootStrapAlert>
);

/* eslint-disable react/prop-types */
export const SubmitButton = ({
  submitting,
  loadingLabel = 'Loading...', submitLabel = 'Save',
}) => (
  <Row>
    <Col mdOffset={4} md={4}>
      <Button bsStyle="main" className={styles.btnSubmit} type="submit" disabled={submitting} block>
        {R.ifElse(R.equals(true), R.always(loadingLabel), R.always(submitLabel))(submitting)}
      </Button>
    </Col>
  </Row>
);
/* eslint-enable */

DataForm.defaultProps = {
  alert: Alert,
  fields: [],
  submitButton: SubmitButton,
};

DataForm.propTypes = {
  /* form props */
  handleSubmit: React.PropTypes.func,
  submitting: React.PropTypes.bool,
  error: React.PropTypes.string,

  /* component props */
  alert: React.PropTypes.func,
  fields: React.PropTypes.arrayOf(React.PropTypes.shape({
    ...FieldGroup.propTypes,
  })),
  submitButton: React.PropTypes.func,
};

export default DataForm;
