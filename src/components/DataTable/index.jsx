import React from 'react';
import { Table } from 'react-bootstrap';
import R from 'ramda';

import styles from './index.scss';

const DataTable = ({ settings, columns, data, filters }) => (
  <Table responsive bsClass={`table ${styles.table}`}>
    <thead>
      <tr>
        {columns.map(({ key, label }) => (
          <th key={key}>
            {label || key}
          </th>
        ))}
      </tr>
    </thead>
    <tbody>
      {data
        .filter(R.pipe(
          R.prop('name'),
          R.test(new RegExp(filters.name, 'i')),
        ))
        .map(row => (
          <tr key={R.path([settings.keyField])(row)}>
            {columns.map(({ key, cell = (r, k) => R.path(R.split('.')(k))(r) }) => (
              <td key={key}>
                {cell(row, key)}
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
  filters: {},
};

DataTable.propTypes = {
  settings: React.PropTypes.shape({
    keyField: React.PropTypes.string,
  }),
  columns: React.PropTypes.arrayOf(React.PropTypes.any.isRequired),
  data: React.PropTypes.arrayOf(React.PropTypes.any),
  filters: React.PropTypes.shape(React.PropTypes.any.isRequired),
};

export default DataTable;
