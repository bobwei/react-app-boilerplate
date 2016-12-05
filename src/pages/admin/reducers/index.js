import R from 'ramda';

import data from 'components/DataTable/spec.json';

export const initialState = {
  data: R.pipe(
    R.path(['results_json', 'search_results']),
    R.map(R.path(['listing'])),
  )(data),
};

export default (state = initialState) => state;
