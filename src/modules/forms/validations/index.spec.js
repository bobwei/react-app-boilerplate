/* eslint-disable */
import R from 'ramda';

import {
  validate, required,
  validateWithRules,
} from './index';

const requiredMsg = 'required';

it('validate function does work', () => {
  const data = {
    name: 'Bob',
    age: 28,
    color: 'red',
    friends: [{
      name: 'zuckerberg',
    }],
    home: {
      address: '',
    },
  };
  expect(validate(required(), 'home.address', data)).toEqual(requiredMsg);
  expect(validate(required())('home.address')(data)).toEqual(requiredMsg);
  expect(validate(required('hello world'))('home.address')(data)).toEqual('hello world');
});

it('can run validation with given rules', () => {
  const rules = [{
    key: 'name',
    validate: validate(required()),
  }, {
    key: 'age',
    validate: validate(required()),
  }, {
    key: 'x.y.z',
    validate: validate(required()),
  }];
  const data = {
    name: 'Bob',
    color: 'red',
    friends: [{
      name: 'zuckerberg',
    }],
    home: {
      address: '',
    },
  };
  expect(validateWithRules(rules)(data)).toEqual({ age: 'required', x: { y: { z: 'required' } } });
});
