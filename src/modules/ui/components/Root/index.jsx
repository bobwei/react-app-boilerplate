/* eslint-disable react/require-default-props, react/no-unused-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import R from 'ramda';
import compose from 'recompose/compose';
import branch from 'recompose/branch';

import Routes from 'modules/routes';
import withStore from 'modules/stores/withStore';

const Root = ({ store, Router }) =>
  <Provider store={store}>
    <Router>
      <Routes />
    </Router>
  </Provider>;

Root.propTypes = {
  store: PropTypes.object,
  configureStore: PropTypes.func,
  Router: PropTypes.func,
};

export default compose(
  branch(R.compose(R.isNil, R.prop('store')), withStore()),
)(Root);
