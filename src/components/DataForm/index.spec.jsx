/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import renderer from 'react-test-renderer';

import DataForm from './index';

it('can render form correctly', () => {
  const component = renderer.create(
    <DataForm />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it('can render form with error correctly', () => {
  const component = renderer.create(
    <DataForm
      error="login error"
    />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
