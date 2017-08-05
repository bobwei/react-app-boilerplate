import R from 'ramda';
import compose from 'recompose/compose';
import withStateHandlers from 'recompose/withStateHandlers';

const withLoadingState = () =>
  compose(
    withStateHandlers(
      {
        isLoading: false,
      },
      {
        setLoading: () => isLoading => ({ isLoading }),
        toggleLoading: state => () => R.evolve({ isLoading: R.not })(state),
      },
    ),
  );

export default withLoadingState;
