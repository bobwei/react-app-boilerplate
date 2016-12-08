/* eslint-disable max-len */
import React from 'react';
import { Col, FormGroup, ControlLabel } from 'react-bootstrap';

import styles from './index.scss';

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
            {(!!meta.touched && !!meta.error) &&
              <span className={styles.error}>{meta.error}</span>
            }
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
            {(!!meta.touched && !!meta.error) &&
              <span className={styles.error}>{meta.error}</span>
            }
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
  /* props from redux-form */
  input: React.PropTypes.shape(React.PropTypes.any.isRequired),
  meta: React.PropTypes.shape(React.PropTypes.any.isRequired),

  inputComponent: React.PropTypes.oneOfType([React.PropTypes.func, React.PropTypes.string]).isRequired,
  inputProps: React.PropTypes.shape(React.PropTypes.any.isRequired),
  label: React.PropTypes.string,
  horizontal: React.PropTypes.bool,
};

export default FieldGroup;
