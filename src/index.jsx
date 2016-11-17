import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { browserHistory, hashHistory } from 'react-router';

import './styles/App.scss';
import configureStore from './stores/configureStore';
import createRoutes from './routes/index';

/* initialize */

// to allow :active styles to work in your CSS on a page in Mobile Safari
document.addEventListener('touchstart', () => {}, true);

const history = (location.protocol === 'file:') ? hashHistory : browserHistory;
const store = configureStore({});
const routes = createRoutes(history);

ReactDOM.render(
  <Provider store={store}>
    {routes}
  </Provider>,
  document.getElementById('app'),
);
