import React from 'react';
import R from 'ramda';

import Button from '../Button';

const SubmitButton = ({ submitting, loadingLabel, submitLabel, ...rest }) => (
  <Button bsStyle="main" type="submit" disabled={submitting} {...rest}>
    {R.ifElse(R.equals(true), R.always(loadingLabel), R.always(submitLabel))(submitting)}
  </Button>

);

SubmitButton.defaultProps = {
  loadingLabel: 'Loading...',
  submitLabel: 'Save',
};

SubmitButton.propTypes = {
  submitting: React.PropTypes.bool,
  loadingLabel: React.PropTypes.string,
  submitLabel: React.PropTypes.string,
};

export default SubmitButton;
