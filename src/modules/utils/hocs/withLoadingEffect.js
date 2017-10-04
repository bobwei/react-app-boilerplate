/* eslint-disable react/jsx-filename-extension, react/prop-types */
import React from 'react';
import compose from 'recompose/compose';

const withLoadingEffect = () =>
  compose(WrappedComponent => props => (
    <div style={{ opacity: props.isLoading ? 0.6 : 1 }}>
      <WrappedComponent {...props} />
    </div>
  ));

export default withLoadingEffect;
