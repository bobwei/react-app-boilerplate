import React from 'react';
import { Form } from 'react-bootstrap';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import compose from 'recompose/compose';

import HorizontalFormField from 'components/HorizontalFormField';

const Filters = () => (
  <Form horizontal>
    <Field
      name="name"
      component={HorizontalFormField}
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
