import { createAction } from 'redux-actions';
import AuthAPI from '../api';

export const putCurrentUser = createAction('putCurrentUser');

export const resetCurrentUser = createAction('resetCurrentUser');

export const login = params => dispatch => (
  AuthAPI
    .request()
    .get('/login', { params })
    .then(({ data }) => dispatch(putCurrentUser(data)))
);

export const logout = () => dispatch => (
  AuthAPI
    .request()
    .post('/logout')
    .then(() => dispatch(resetCurrentUser()))
);
