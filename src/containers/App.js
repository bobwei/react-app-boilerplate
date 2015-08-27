import React from 'react';
import { connect } from 'react-redux';

const App = (prop) => (
  <div>
    {prop.main}
  </div>
);

App.defaultProps = {
};

App.propTypes = {
  main: React.PropTypes.element,
};

export default connect()(App);
