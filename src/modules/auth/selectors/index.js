/* eslint-disable import/prefer-default-export */
export const userSelector = (getState = state => state.user) =>
  state => getState(state);
