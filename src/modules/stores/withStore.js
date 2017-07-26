import PropTypes from 'prop-types';
import R from 'ramda';
import compose from 'recompose/compose';
import lifecycle from 'recompose/lifecycle';
import withState from 'recompose/withState';
import flattenProp from 'recompose/flattenProp';
import setPropTypes from 'recompose/setPropTypes';
import branch from 'recompose/branch';
import renderNothing from 'recompose/renderNothing';

/*
  Use configureStore prop to create store and inject as store prop when it's ready.
  Render nothing if it's not yet ready.
*/
const withStore = () =>
  compose(
    setPropTypes({
      configureStore: PropTypes.func,
    }),
    withState('state', 'setState', { store: null }),
    flattenProp('state'),
    lifecycle({
      componentDidMount() {
        const { setState, configureStore } = this.props;
        const store = configureStore({}, () => setState({ store }));
      },
    }),
    branch(R.compose(R.isNil, R.prop('store')), renderNothing),
  );

export default withStore;
