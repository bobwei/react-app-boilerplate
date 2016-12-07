/* eslint-disable */
import React from 'react';
import { Button as BootstrapButton } from 'react-bootstrap';
import classnames from 'classnames';
import R from 'ramda';
import compose from 'recompose/compose';
import mapProps from 'recompose/mapProps';
import nest from 'recompose/nest';
import branch from 'recompose/branch';
import renderComponent from 'recompose/renderComponent';
import { Link } from 'react-router';
import { LinkContainer } from 'react-router-bootstrap';

import styles from './index.scss';

const BASE_BS_STYLES = ['default', 'primary', 'success', 'info', 'warning', 'danger', 'link'];

/* override boorstrap button */

BootstrapButton.defaultProps = {
  ...BootstrapButton.defaultProps,
  bsStyle: '',
};

BootstrapButton.propTypes = {
  ...BootstrapButton.propTypes,
  bsStyle: React.PropTypes.string,
};

const Button = compose(
  mapProps(R.pipe(
    R.ifElse(
      R.propSatisfies(bsStyle => R.indexOf(bsStyle)(BASE_BS_STYLES) >= 0, 'bsStyle'),
      props => props,
      ({ bsStyle, className, ...rest }) => ({
        ...rest,
        className: classnames(className, styles[bsStyle]),
      }),
    ),
  )),
  /* if componentClass is Link, wrap it with LinkContainer */
  branch(
    R.pipe(
      R.path(['componentClass', 'displayName']),
      R.equals(Link.displayName),
    ),
    R.curryN(2, nest)(LinkContainer),
    comp => comp,
  ),
)(BootstrapButton);

export default Button;
