import React from 'react';
import ReactDOM from 'react-dom';
import canUseDOM from 'fbjs/lib/ExecutionEnvironment';

import './styles/App.scss';
import configureStore from './stores';
import Root from './components/Root';

/* initialize */

// to allow :active styles to work in your CSS on a page in Mobile Safari
if (canUseDOM) {
  document.addEventListener('touchstart', () => {}, true);
}

const store = configureStore({});

ReactDOM.render(
  <Root store={store} />,
  document.getElementById('app'),
);
