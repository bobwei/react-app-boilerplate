/* eslint-disable import/prefer-default-export */
import R from 'ramda';

export const isAuthenticated = R.pipe(
  R.prop('data'),
  R.isEmpty,
  R.not,
);
