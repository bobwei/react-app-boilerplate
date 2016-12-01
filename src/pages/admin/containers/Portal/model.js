import React from 'react';
import R from 'ramda';

import testData from 'components/DataTable/spec.json';

export const columns = [
  {
    key: 'id',
  }, {
    key: 'user.thumbnail_url',
    label: 'Host',
    cell: (r, k) => (
      React.createElement('img', {
        src: R.path(R.split('.')(k))(r),
        role: 'presentation',
      })
    ),
  }, {
    key: 'name',
    label: 'Name',
  },
];

export const data = R.pipe(
  R.path(['results_json', 'search_results']),
  R.map(R.path(['listing'])),
)(testData);
