import { getFormValues } from 'redux-form';
import R from 'ramda';

export const dataSelector = state => state.admin;

export const visibleDataSelector = filterFormName => (state) => {
  const { q } = getFormValues(filterFormName)(state) || {};
  const { data } = dataSelector(state);
  const filteredData = R.filter(R.pipe(
    R.prop('name'),
    R.test(new RegExp(q, 'i')),
  ))(data);
  return { data: filteredData };
};
