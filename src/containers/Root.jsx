import React from 'react';
import { connect } from 'react-redux';

const Root = prop => (
  <div>
    {prop.main}
  </div>
);

Root.propTypes = {
  main: React.PropTypes.element,
};

export default connect()(Root);
