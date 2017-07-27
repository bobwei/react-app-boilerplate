import R from 'ramda';

import withRequestFn from 'modules/requests/withRequest';

const withRequest = R.compose(
  withRequestFn,
  R.merge({
    requestPropName: 'parseServerRequest',
    createRequest: require('./createRequest').default,
  }),
  R.defaultTo({}),
);

export default withRequest;
