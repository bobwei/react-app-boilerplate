import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import App from '../containers/App';
import IndexPage from '../containers/IndexPage';


export default function (history) {
  return (
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute components={{ main: IndexPage }} />
      </Route>
    </Router>
  );
}
