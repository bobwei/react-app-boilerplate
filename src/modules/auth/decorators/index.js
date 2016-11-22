/* eslint-disable import/prefer-default-export */
import { routerActions } from 'react-router-redux';
import { UserAuthWrapper } from 'redux-auth-wrapper';
import isEmpty from 'lodash.isempty';

export const failureRedirectPath = '/login';

export const IsAuthenticated = UserAuthWrapper({
  authSelector: ({ user: { data } }) => ({ ...data }),
  redirectAction: routerActions.replace,
  redirectQueryParamName: 'next',
  failureRedirectPath,
  wrapperDisplayName: 'IsAuthenticated',
});

export const IsNotAuthenticated = UserAuthWrapper({
  authSelector: ({ user: { data } }) => ({ ...data }),
  predicate: isEmpty,
  redirectAction: routerActions.replace,
  failureRedirectPath: (state, ownProps) => ownProps.location.query[failureRedirectPath] || '/',
  allowRedirectBack: false,
  wrapperDisplayName: 'IsNotAuthenticated',
});
