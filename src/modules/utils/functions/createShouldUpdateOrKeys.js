import R from 'ramda';
import shallowEqual from 'recompose/shallowEqual';

const createShouldUpdateOrKeys = (keys = ['location']) =>
  R.useWith(R.compose(R.not, shallowEqual), [R.pick(keys), R.pick(keys)]);

export default createShouldUpdateOrKeys;
