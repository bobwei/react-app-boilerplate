import connect from 'react-redux/es/connect/connect';
import { createSelector } from 'reselect';
import R from 'ramda';
import compose from 'recompose/compose';
import { getCredentials } from 'redux-modular-auth';

/*
  1. Select env from redux store
  2. Use createRequest factory function to create request with env
  3. Inject request as requestPropName
*/
const withRequest = (
  {
    requestPropName = 'apiRequest',
    createRequest = require('./createRequest').default,
  } = {},
) =>
  compose(
    connect(
      createSelector(
        R.path(['env']),
        getCredentials,
        R.applySpec({
          [requestPropName]: createRequest,
        }),
      ),
    ),
  );

export default withRequest;
