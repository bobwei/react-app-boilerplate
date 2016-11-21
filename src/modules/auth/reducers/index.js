import { handleActions } from 'redux-actions';

import { putCurrentUser } from '../actions';

export default handleActions({
  [putCurrentUser]: (state, action) => ({
    ...state,
    data: {
      ...state.data,
      ...action.payload,
    },
  }),
}, { data: {} });
