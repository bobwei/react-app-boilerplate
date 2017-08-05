import R from 'ramda';

const applyLoading = (
  actionProps,
  onLoadingChanged = (isLoading, { setLoading }) => setLoading(isLoading),
) => props =>
  R.compose(
    R.map(fn => (...args) => {
      onLoadingChanged(true, props);
      return fn(...args)
        .then(result => {
          onLoadingChanged(false, props);
          return result;
        })
        .catch(error => {
          onLoadingChanged(false, props);
          throw error;
        });
    }),
    R.ifElse(
      R.always(R.is(Array)(actionProps)),
      R.pick(actionProps),
      R.always(actionProps),
    ),
  )(props);

export default applyLoading;
