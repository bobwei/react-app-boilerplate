/* eslint-disable import/prefer-default-export */
import { createSelector } from 'reselect';

export const userSelector = createSelector(
  [({ user }) => user],
  r => r,
);
