import React from 'react';
import ReactDOM from 'react-dom';
import { canUseDOM } from 'fbjs/lib/ExecutionEnvironment';
import { browserHistory } from 'react-router';

import Root from 'modules/ui/components/Root';
import configureStore from 'modules/stores/configureStore';
import 'modules/styles/App.scss';

// to allow :active styles to work in your CSS on a page in Mobile Safari
if (canUseDOM) {
  document.addEventListener('touchstart', () => {}, true);
}

const history = browserHistory;
const store = configureStore(undefined, history);

ReactDOM.render(
  <Root store={store} history={history} />,
  document.getElementById('app'),
);

if (module.hot) {
  module.hot.accept();
}
