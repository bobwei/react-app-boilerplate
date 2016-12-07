import React from 'react';
import { Row, Col, Alert, Form } from 'react-bootstrap';
import { Field } from 'redux-form';

import FieldGroup from '../FieldGroup';
import Button from '../Button';
import styles from './index.scss';

const DataForm = ({ handleSubmit, submitting, error, fields }) => (
  <Form onSubmit={handleSubmit}>
    {!!error &&
      <Alert bsStyle="warning">
        {error}
      </Alert>
    }
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

DataForm.propTypes = {
  handleSubmit: React.PropTypes.func,
  submitting: React.PropTypes.bool,
  error: React.PropTypes.string,
  fields: React.PropTypes.arrayOf(React.PropTypes.shape({
    ...FieldGroup.propTypes,
  })),
};

export default DataForm;
