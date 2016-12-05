/* eslint-disable import/prefer-default-export */
import React from 'react';
import R from 'ramda';

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
