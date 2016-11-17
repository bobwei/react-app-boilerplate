import React from 'react';
import { connect } from 'react-redux';

const Root = ({ main, children }) => (
  <div>
    {main || children}
  </div>
);

Root.propTypes = {
  main: React.PropTypes.element,
};

export default connect()(Root);
