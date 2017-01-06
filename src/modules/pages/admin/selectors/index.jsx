import { getFormValues } from 'redux-form';
import R from 'ramda';
import { createSelector } from 'reselect';

export const dataSelector = state => state.admin;

export const dataAndFilterSelector = filterFormName => createSelector(
  dataSelector,
  getFormValues(filterFormName),
  (data, where) => ({
    ...data,
    where,
  }),
);

export const visibleDataSelector = filterFormName => (state) => {
  const { q } = getFormValues(filterFormName)(state) || {};
  const { data } = dataSelector(state);
  const filteredData = R.filter(R.pipe(
    R.prop('name'),
    R.test(new RegExp(q, 'i')),
  ))(data);
  return { data: filteredData };
};
