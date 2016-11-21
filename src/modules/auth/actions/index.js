import { createAction } from 'redux-actions';
import AuthAPI from '../api';

export const putCurrentUser = createAction('putCurrentUser');

export const login = params => dispatch => (
  AuthAPI
    .request()
    .get('/login', { params })
    .then(({ data }) => dispatch(putCurrentUser(data)))
);

export const logout = createAction('logout');
