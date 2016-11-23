import { createAction } from 'redux-actions';
import AuthAPI from '../api';

export const put = createAction('put');
export const reset = createAction('reset');

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
