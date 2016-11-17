import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import Root from '../containers/Root';
import IndexPage from '../containers/IndexPage';

export default history => (
  <Router history={history}>
    <Route path="/" component={Root}>
      <IndexRoute components={{ main: IndexPage }} />
    </Route>
  </Router>
);
