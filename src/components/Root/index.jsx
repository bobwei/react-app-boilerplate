import React from 'react';

const Root = ({ main, children }) => (
  <div>
    {main || children}
  </div>
);

Root.propTypes = {
  main: React.PropTypes.element,
};

export default Root;
