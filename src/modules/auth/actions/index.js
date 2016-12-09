import { createAction } from 'redux-actions';

import AuthAPI from '../api';

export const modulePrefix = 'modules/auth';

export const put = createAction(`${modulePrefix}:put`);
export const reset = createAction(`${modulePrefix}:reset`);

export const login = params => dispatch => (
  AuthAPI
    .request()
    .get('/login', { params })
    .then(({ data }) => dispatch(put(data)))
);

export const logout = () => dispatch => (
  AuthAPI
    .request()
    .post('/logout')
    .then(() => dispatch(reset()))
);

export const signup = params => dispatch => (
  AuthAPI
    .request()
    .post('/users', params)
    .then(({ data }) => dispatch(put(data)))
);
