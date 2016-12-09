import { createAction } from 'redux-actions';
import R from 'ramda';

import ParseServerAPI from '../api';

export const modulePrefix = 'modules/parse-server';

export const reset = createAction(`${modulePrefix}:reset`);
export const put = createAction(`${modulePrefix}:put`);
export const append = createAction(`${modulePrefix}:append`);

export const fetchData = (model, params, action = 'put') => dispatch => (
  ParseServerAPI
    .request()
    .get(`/classes/${model}`, { params })
    .then(R.pipe(
      R.path(['data', 'results']),
      R.ifElse(
        () => R.equals('put')(action),
        R.compose(dispatch, put),
        R.compose(dispatch, reset),
      ),
    ))
);
