import { createSelector } from 'reselect';
import R from 'ramda';

const getEnv = createSelector(R.path(['env']), R.identity);

export default getEnv;
