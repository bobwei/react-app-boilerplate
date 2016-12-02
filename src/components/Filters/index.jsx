import React from 'react';
import { Form } from 'react-bootstrap';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import compose from 'recompose/compose';
import withProps from 'recompose/withProps';

import FieldGroup from 'components/FieldGroup';

const Filters = () => (
  <Form horizontal>
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
  </Form>
);

export default compose(
  connect(),
  reduxForm({
    form: 'filters',
  }),
)(Filters);
