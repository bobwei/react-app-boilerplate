import React from 'react';

const Cell = ({ row, prop }) => (
  <span>
    {row[prop]}
  </span>
);

Cell.propTypes = {
  row: React.PropTypes.shape(React.PropTypes.any.isRequired),
  prop: React.PropTypes.string,
};

export default Cell;
