import { createAction } from 'redux-actions';
import AuthAPI from '../api';

export const putCurrentUser = createAction('putCurrentUser');

export const login = params => () => (
  AuthAPI
    .request()
    .get('/login', { params })
);
