/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';
import { fieldPropTypes } from 'redux-form/lib/propTypes';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import FormControl from 'react-bootstrap/lib/FormControl';
import HelpBlock from 'react-bootstrap/lib/HelpBlock';

const FieldGroup = ({
  input,
  meta: { touched, error },
  label,
  formControlProps,
}) => (
  <FormGroup
    controlId={input.name}
    validationState={(!!touched && !!error && 'error') || null}
  >
    <ControlLabel>{label}</ControlLabel>
    <FormControl {...input} {...formControlProps} />
    {touched && error && <HelpBlock>{error}</HelpBlock>}
  </FormGroup>
);

FieldGroup.propTypes = {
  ...fieldPropTypes,
  label: PropTypes.string,
  formControlProps: PropTypes.object,
};

export default FieldGroup;
