import React from 'react';
import { Table } from 'react-bootstrap';
import R from 'ramda';

import Cell from 'modules/ui/components/Cell';

const DataTable = ({ settings, columns, data, ...restTableProps }) => (
  <Table responsive>
    <thead>
      <tr>
        {columns.map(({ prop, label }) => (
          <th key={prop}>
            {label || prop}
          </th>
        ))}
      </tr>
    </thead>
    <tbody>
      {data
        .map((row, index, rows) => (
          <tr key={R.path([settings.keyField])(row)}>
            {columns.map(({ prop, cell = Cell, ...restColumnProps }) => (
              <td key={prop}>
                {cell({ row, prop, index, rows, ...restTableProps, ...restColumnProps })}
              </td>
            ))}
          </tr>
        ),
      )}
    </tbody>
  </Table>
);

DataTable.defaultProps = {
  settings: {
    keyField: 'id',
  },
  columns: [],
  data: [],
};

DataTable.propTypes = {
  settings: React.PropTypes.shape({
    keyField: React.PropTypes.string,
  }),
  columns: React.PropTypes.arrayOf(React.PropTypes.shape({
    prop: React.PropTypes.string.isRequired,
    label: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.element,
    ]),
    cell: React.PropTypes.func,
  })),
  data: React.PropTypes.arrayOf(React.PropTypes.any),
};

export default DataTable;
