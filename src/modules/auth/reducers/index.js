import { handleActions } from 'redux-actions';

import { putCurrentUser, logout } from '../actions';

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
  [logout]: () => ({
    ...initialState,
  }),
}, { ...initialState });
