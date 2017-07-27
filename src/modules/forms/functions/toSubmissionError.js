import SubmissionError from 'redux-form/lib/SubmissionError';

const toSubmissionError = _error => {
  throw new SubmissionError({ _error });
};

export default toSubmissionError;
