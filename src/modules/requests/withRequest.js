import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import R from 'ramda';
import compose from 'recompose/compose';

import createRequest from './createRequest';

/*
  1. Select env from redux store
  2. Use createRequest factory function to create request with env
  3. Inject request as requestPropName
*/
const withRequest = ({ requestPropName = 'apiRequest' } = {}) =>
  compose(
    connect(
      createSelector(
        R.path(['env']),
        R.applySpec({
          [requestPropName]: createRequest,
        }),
      ),
    ),
  );

export default withRequest;
