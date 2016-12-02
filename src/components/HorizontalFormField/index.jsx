/* eslint-disable react/prop-types */
import React from 'react';
import { Col, FormGroup, ControlLabel } from 'react-bootstrap';

const HorizontalFormField = ({ input, meta, inputComponent, inputProps, label }) => (
  <FormGroup validationState={(!!meta.touched && !!meta.error && 'error') || null}>
    <Col componentClass={ControlLabel} sm={2}>
      {label}
    </Col>
    <Col sm={10}>
      {React.createElement(inputComponent, {
        ...input,
        ...inputProps,
        placeholder: label,
      })}
    </Col>
  </FormGroup>
);

export default HorizontalFormField;
