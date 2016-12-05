/* eslint-disable import/prefer-default-export */
import jQuery from 'jquery';

export const focusSelector = ({ selector = 'input:first' }) => {
  jQuery(selector).focus();
};
