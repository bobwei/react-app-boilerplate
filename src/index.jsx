import React from 'react';
import ReactDOM from 'react-dom';
import canUseDOM from 'fbjs/lib/ExecutionEnvironment';

import './styles/App.scss';
import configureStore from './stores';
import Root from './components/Root';
import AuthAPI from './modules/auth/api';

/* initialize */

// to allow :active styles to work in your CSS on a page in Mobile Safari
if (canUseDOM) {
  document.addEventListener('touchstart', () => {}, true);
}

AuthAPI.init({
  AUTH_API_BASE_URL: process.env.AUTH_API_BASE_URL,
  PARSE_SERVER_APPLICATION_ID: process.env.PARSE_SERVER_APPLICATION_ID,
  PARSE_SERVER_JAVASCRIPT_KEY: process.env.PARSE_SERVER_JAVASCRIPT_KEY,
});

const store = configureStore({});

ReactDOM.render(
  <Root store={store} />,
  document.getElementById('app'),
);
