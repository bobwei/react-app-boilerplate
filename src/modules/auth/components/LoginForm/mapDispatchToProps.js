import { login } from 'redux-modular-auth';
import R from 'ramda';

import getErrorMessage from 'modules/requests/selectors/getErrorMessage';
import toSubmissionError from 'modules/forms/functions/toSubmissionError';

const mapDispatchToProps = (dispatch, { apiRequest }) => ({
  onSubmit: data =>
    apiRequest
      .get('/login', { params: data })
      .then(R.path(['data']))
      .then(R.compose(dispatch, login))
      .catch(R.compose(toSubmissionError, getErrorMessage)),
});

export default mapDispatchToProps;
