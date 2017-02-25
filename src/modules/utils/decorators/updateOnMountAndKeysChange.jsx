import React from 'react';
import R from 'ramda';
import compose from 'recompose/compose';
import lifecycle from 'recompose/lifecycle';
import shallowEqual from 'recompose/shallowEqual';
import withState from 'recompose/withState';

/*
  - Call the update function on
    - componentDidMount
    - componentWillReceiveProps
      - We determine shouldComponentUpdate by shallow comparing selected keys of
      this.props and nextProps.
  - Set isLoading to true before updating and unset isLoading when done
  - isLoading prop is injected to wrapped component
*/
const updateOnMountAndKeysChange = (
  update = () => Promise.resolve(),
  keys = ['location'],
  shouldDisplayLoadingState = true,
) => compose(
  withState('isLoading', 'setIsLoading', false),
  lifecycle({
    componentWillReceiveProps(nextProps) {
      const shouldComponentUpdate = !shallowEqual(
        R.pick(keys)(this.props),
        R.pick(keys)(nextProps),
      );
      if (shouldComponentUpdate) {
        const { setIsLoading } = this.props;
        setIsLoading(true);
        R.composeP(() => setIsLoading(false), update)(nextProps).catch(() => setIsLoading(false));
      }
    },
    componentDidMount() {
      const { setIsLoading } = this.props;
      setIsLoading(true);
      R.composeP(() => setIsLoading(false), update)(this.props).catch(() => setIsLoading(false));
    },
  }),
  // eslint-disable-next-line react/prop-types
  WrappedComponent => ({ isLoading, ...rest }) => (
    <div style={{ opacity: (isLoading && shouldDisplayLoadingState) ? 0.7 : 1 }}>
      <WrappedComponent {...{ isLoading, ...rest }} />
    </div>
  ),
);

export default updateOnMountAndKeysChange;
