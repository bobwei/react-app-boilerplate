import React from 'react';
import ReactDOM from 'react-dom';
import { canUseDOM } from 'fbjs/lib/ExecutionEnvironment';
import Router from 'react-router-dom/BrowserRouter';

import Root from 'modules/ui/components/Root';
import configureStore from 'modules/stores/configureStore';
import 'modules/styles/App.scss';

// to allow :active styles to work in your CSS on a page in Mobile Safari
if (canUseDOM) {
  document.addEventListener('touchstart', () => {}, true);
}

/* Getting initialState from server rendering */
const initialState =
  canUseDOM && window.__INITIALSTATE__ ? window.__INITIALSTATE__ : {};

/*
  Render <Root /> when store is ready. Actions triggered during initialization:
  - init with initialState
  - rehydrate ( persist-store )
*/
const store = configureStore(initialState, () => {
  ReactDOM.render(
    <Root store={store} Router={Router} />,
    document.getElementById('app'),
  );
});

if (module.hot) {
  module.hot.accept();
}
