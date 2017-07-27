import { login } from 'redux-modular-auth';
import SubmissionError from 'redux-form/lib/SubmissionError';
import R from 'ramda';

const mapDispatchToProps = dispatch => ({
  onSubmit: R.ifElse(
    R.equals({ username: 'username', password: 'password' }),
    () => {
      R.compose(dispatch, login)({
        objectId: 'objectId',
        sessionToken: 'sessionToken',
      });
    },
    () => {
      throw new SubmissionError({
        _error: `Should be "username" and "password"`,
      });
    },
  ),
});

export default mapDispatchToProps;
