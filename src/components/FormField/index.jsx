/* eslint-disable react/prop-types */
import React from 'react';
import classnames from 'classnames';

const FormField = ({ input, meta, inputComponent, inputProps, label }) => (
  <div className={classnames('form-group', { 'has-error': meta.touched && meta.error })}>
    <label htmlFor={input.name}>
      {label}
      {meta.touched && meta.error &&
        <span className="control-label"> {meta.error}</span>
      }
    </label>
    {React.createElement(inputComponent, {
      ...input,
      ...inputProps,
      placeholder: label,
    })}
  </div>
);

export default FormField;
