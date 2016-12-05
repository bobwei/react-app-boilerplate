/* eslint-disable import/prefer-default-export */
import { routerActions } from 'react-router-redux';
import { UserAuthWrapper } from 'redux-auth-wrapper';
import R from 'ramda';

import { userSelector } from '../selectors';
import { isAuthenticated } from '../predicates';

export const redirectQueryParamName = 'next';

export const IsAuthenticated = UserAuthWrapper({
  authSelector: userSelector,
  predicate: isAuthenticated,
  redirectAction: routerActions.replace,
  redirectQueryParamName,
  failureRedirectPath: '/login',
  wrapperDisplayName: 'IsAuthenticated',
});

export const IsNotAuthenticated = UserAuthWrapper({
  authSelector: userSelector,
  predicate: R.pipe(
    isAuthenticated,
    R.not,
  ),
  redirectAction: routerActions.replace,
  failureRedirectPath: (state, ownProps) => ownProps.location.query[redirectQueryParamName] || '/',
  allowRedirectBack: false,
  wrapperDisplayName: 'IsNotAuthenticated',
});
