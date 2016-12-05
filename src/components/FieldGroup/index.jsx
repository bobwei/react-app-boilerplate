/* eslint-disable react/prop-types */
import React from 'react';
import { Col, FormGroup, ControlLabel } from 'react-bootstrap';

const FieldGroup = ({ input, meta, inputComponent, inputProps, label, horizontal }) => {
  const Input = React.createElement(inputComponent, {
    ...FieldGroup.defaultProps.inputProps,
    ...input,
    ...inputProps,
    placeholder: label,
  });
  return (
    <FormGroup validationState={(!!meta.touched && !!meta.error && 'error') || null}>
      {horizontal &&
        <div>
          <Col componentClass={ControlLabel} sm={2}>
            {label}
          </Col>
          <Col sm={10}>
            {Input}
          </Col>
        </div>
      }
      {!horizontal &&
        <div>
          <ControlLabel>
            {label}
          </ControlLabel>
          <div>
            {Input}
          </div>
        </div>
      }
    </FormGroup>
  );
};

FieldGroup.defaultProps = {
  horizontal: false,
  inputProps: {
    className: 'form-control',
  },
};

FieldGroup.propTypes = {
  horizontal: React.PropTypes.bool,
};

export default FieldGroup;
