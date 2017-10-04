import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'react-bootstrap';
import R from 'ramda';

import Cell from 'modules/ui/components/Cell';

const DataTable = ({ settings, columns, data, ...restTableProps }) => (
  <Table responsive>
    <thead>
      <tr>
        {columns.map(({ prop, label }) => <th key={prop}>{label || prop}</th>)}
      </tr>
    </thead>
    <tbody>
      {data.map((row, index, rows) => (
        <tr key={R.path([settings.keyField])(row)}>
          {columns.map(({ prop, cell = Cell, ...restColumnProps }) => (
            <td key={prop}>
              {cell({
                row,
                prop,
                index,
                rows,
                ...restTableProps,
                ...restColumnProps,
              })}
            </td>
          ))}
        </tr>
      ))}
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
  settings: PropTypes.shape({
    keyField: PropTypes.string,
  }),
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      prop: PropTypes.string.isRequired,
      label: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
      cell: PropTypes.func,
    }),
  ),
  data: PropTypes.arrayOf(PropTypes.any),
};

export default DataTable;
