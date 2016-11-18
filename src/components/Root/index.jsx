/* eslint-disable react/prop-types */
import React from 'react';
import { Provider } from 'react-redux';

const Root = ({ store, routes }) => (
  <Provider store={store}>
    {routes}
  </Provider>
);

export default Root;
