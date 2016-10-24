import React from 'react';
import { connect } from 'react-redux';

const App = (prop) => {
  return (
    <div>
      {prop.main}
    </div>
  );
};

App.propTypes = {
  main: React.PropTypes.element,
};

export default connect()(App);
