import React from 'react';
import { Row, Col, Alert, Form } from 'react-bootstrap';
import { Field } from 'redux-form';
import R from 'ramda';
import mapProps from 'recompose/mapProps';

import FieldGroup from '../FieldGroup';
import styles from './index.scss';
import SubmitButton from '../SubmitButton';

const DataForm = ({
  handleSubmit, submitting, error,
  alert, fields, submitButton,
}) => (
  <Form onSubmit={handleSubmit} noValidate>
    {error && React.createElement(alert, { error })}
    {fields.map(field => (
      <Field
        key={field.name}
        component={FieldGroup}
        {...field}
      />
    ))}
    <Row>
      <Col mdOffset={4} md={4}>
        {React.createElement(submitButton, {
          submitting,
          className: styles.btnSubmit,
          block: true,
        })}
      </Col>
    </Row>
  </Form>
);

DataForm.defaultProps = {
  alert: mapProps(({ error }) => ({
    bsStyle: 'warning',
    children: R.ifElse(R.is(String), R.identity, str => JSON.stringify(str))(error),
  }))(Alert),
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
