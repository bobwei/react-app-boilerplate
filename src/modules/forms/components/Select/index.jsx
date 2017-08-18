/* eslint-disable react/prop-types */
import React from 'react';
import Select from 'react-select';
import R from 'ramda';
import compose from 'recompose/compose';
import withProps from 'recompose/withProps';

import './index.scss';

const Component = ({ input, meta, ...props }) =>
  <Select {...input} {...props} />;

Component.propTypes = {};

Component.defaultProps = {};

export default compose(
  withProps(
    R.evolve({
      input: {
        onChange: fn =>
          R.compose(fn, R.when(R.compose(R.not, R.isNil), R.prop('value'))),
        onBlur: () => () => {},
      },
    }),
  ),
)(Component);
