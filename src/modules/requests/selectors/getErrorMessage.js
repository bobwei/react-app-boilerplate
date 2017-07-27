import R from 'ramda';

export const errorMessagePath = ['response', 'data', 'error'];

const getErrorMessage = R.cond([
  [
    R.compose(R.not, R.isNil, R.path(errorMessagePath)),
    R.path(errorMessagePath),
  ],
  [R.T, R.identity],
]);

export default getErrorMessage;
