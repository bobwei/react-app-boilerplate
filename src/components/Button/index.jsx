/* eslint-disable */
import React from 'react';
import { Button as BootstrapButton } from 'react-bootstrap';
import classnames from 'classnames';
import R from 'ramda';
import compose from 'recompose/compose';
import mapProps from 'recompose/mapProps';

import styles from './index.scss';

const BASE_BS_STYLES = ['primary', 'success', 'info', 'warning', 'danger', 'link'];

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
)(BootstrapButton);

export default Button;
