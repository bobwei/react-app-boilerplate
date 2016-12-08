import R from 'ramda';
import _ from 'lodash/fp';

export const required = (msg = 'required') => [
  [R.isNil, R.always(msg)],
  [R.isEmpty, R.always(msg)],
];

export const validate = R.curry((conds, key, obj) => (
  R.pipe(
    _.get(key),
    R.cond(conds),
  )(obj)
));

export const validateWithRules = R.curry((rules, data) => (
  R.pipe(
    R.map(({ key, validate: validateFn }) => [key, validateFn(key, data)]),
    R.filter(R.pipe(
      R.nth(1),
      R.isNil,
      R.not,
    )),
    R.reduce((errors, [key, msg]) => _.set(key)(msg)(errors), {}),
  )(rules)
));
