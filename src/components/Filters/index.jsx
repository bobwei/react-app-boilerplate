import React from 'react';
import { Form, FormGroup, Col, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { reduxForm, Field, propTypes } from 'redux-form';
import compose from 'recompose/compose';
import withProps from 'recompose/withProps';

import FieldGroup from 'components/FieldGroup';

const Filters = ({ handleSubmit }) => (
  <Form horizontal onSubmit={handleSubmit}>
    <Field
      name="name"
      component={withProps({ horizontal: true })(FieldGroup)}
      label="Search"
      inputComponent="input"
      inputProps={{
        type: 'text',
        className: 'form-control',
        autoFocus: true,
      }}
    />
    <FormGroup>
      <Col smOffset={2} sm={10}>
        <Button bsStyle="primary" type="submit">
          Search
        </Button>
      </Col>
    </FormGroup>
  </Form>
);

Filters.propTypes = {
  ...propTypes,
};

export default compose(
  connect(),
  reduxForm({
    form: 'filters',
  }),
)(Filters);
