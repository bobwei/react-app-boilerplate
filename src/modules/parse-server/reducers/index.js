import { handleActions } from 'redux-actions';

import { reset, put, append } from '../actions';

export const initialState = {
  data: [],
};

export default handleActions({
  [reset]: () => ({
    ...initialState,
  }),
  [put]: (state, action) => ({
    ...state,
    data: [
      ...action.payload,
    ],
  }),
  [append]: (state, action) => ({
    ...state,
    data: [
      ...state.data,
      ...action.payload,
    ],
  }),
}, { ...initialState });
