import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { browserHistory, hashHistory } from 'react-router';
import canUseDOM from 'fbjs/lib/ExecutionEnvironment';

import './styles/App.scss';
import configureStore from './stores';
import createRoutes from './routes';

/* initialize */

// to allow :active styles to work in your CSS on a page in Mobile Safari
if (canUseDOM) {
  document.addEventListener('touchstart', () => {}, true);
}

const { CLIENT_HISTORY } = process.env;

const history = (location.protocol === 'file:' || CLIENT_HISTORY === 'hash') ? hashHistory : browserHistory;
const store = configureStore({});
const routes = createRoutes(history);

ReactDOM.render(
  <Provider store={store}>
    {routes}
  </Provider>,
  document.getElementById('app'),
);
