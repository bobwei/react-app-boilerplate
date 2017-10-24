/* eslint-disable react/require-default-props, react/no-unused-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import Provider from 'react-redux/lib/components/Provider';

import Routes from 'modules/routes';

const Root = ({ store, Router }) => (
  <Provider store={store}>
    <Router>
      <Routes />
    </Router>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object,
  Router: PropTypes.func,
};

export default Root;
