import React from 'react';
import ReactDOM from 'react-dom';
import canUseDOM from 'fbjs/lib/ExecutionEnvironment';
import { hashHistory, browserHistory } from 'react-router';
import watch from 'redux-watch';

import Root from 'components/Root';
import configAPI from 'modules/api';
import { userSelector } from 'modules/auth/selectors';

import './styles/App.scss';
import configureStore from './stores';

/* initialize */

// to allow :active styles to work in your CSS on a page in Mobile Safari
if (canUseDOM) {
  document.addEventListener('touchstart', () => {}, true);
}

const { __ENV__ } = window;
const history = ((location.protocol === 'file:' || __ENV__.CLIENT_HISTORY === 'hash') && hashHistory) ||
                  browserHistory;
const store = configureStore(undefined, history);

const w = watch(() => userSelector()(store.getState()));
store.subscribe(w(user => configAPI({ ...__ENV__, user })));

configAPI({
  ...__ENV__,
  user: userSelector()(store.getState()),
});

ReactDOM.render(
  <Root
    store={store}
    history={history}
  />,
  document.getElementById('app'),
);

if (module.hot) {
  module.hot.accept();
}
