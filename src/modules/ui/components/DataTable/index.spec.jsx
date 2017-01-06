/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import renderer from 'react-test-renderer';
import R from 'ramda';

import DataTable from './index';
import data from './spec.json';

it('can render table correctly', () => {
  const component = renderer.create(
    <DataTable
      columns={[{
        key: 'id',
      }, {
        key: 'name',
      }]}
      data={R.pipe(
        R.path(['results_json', 'search_results']),
        R.map(R.path(['listing'])),
      )(data)}
    />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
