import { handleActions } from 'redux-actions';

import { putCurrentUser, resetCurrentUser } from '../actions';

export const initialState = {
  data: {},
};

export default handleActions({
  [putCurrentUser]: (state, action) => ({
    ...state,
    data: {
      ...state.data,
      ...action.payload,
    },
  }),
  [resetCurrentUser]: () => ({
    ...initialState,
  }),
}, { ...initialState });
