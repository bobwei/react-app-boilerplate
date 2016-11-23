import { handleActions } from 'redux-actions';

import { put, reset } from '../actions';

export const initialState = {
  data: {},
};

export default handleActions({
  [put]: (state, action) => ({
    ...state,
    data: {
      ...state.data,
      ...action.payload,
    },
  }),
  [reset]: () => ({
    ...initialState,
  }),
}, { ...initialState });
