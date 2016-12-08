import React from 'react';
import { Row, Col, Alert, Form } from 'react-bootstrap';
import { Field } from 'redux-form';
import R from 'ramda';
import mapProps from 'recompose/mapProps';

import FieldGroup from '../FieldGroup';
import Button from '../Button';
import styles from './index.scss';

const DataForm = ({
  handleSubmit, submitting, error,
  alert,
  fields,
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
    <Row>
      <Col mdOffset={4} md={4}>
        <Button bsStyle="main" className={styles.btnSubmit} type="submit" disabled={submitting} block>
          {(submitting) ? '讀取中...' : '登入'}
        </Button>
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
};

export default DataForm;
