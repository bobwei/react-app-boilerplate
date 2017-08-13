import R from 'ramda';
import compose from 'recompose/compose';
import lifecycle from 'recompose/lifecycle';
import shallowEqual from 'recompose/shallowEqual';

const createShouldUpdateOrKeys = (keys = ['location']) =>
  R.useWith(R.compose(R.not, shallowEqual), [R.pick(keys), R.pick(keys)]);

/*
  - Call the update function on
    - componentDidMount
    - componentWillReceiveProps
      - We determine shouldComponentUpdate by shallow comparing selected keys of
      this.props and nextProps.
*/

const updateOnMountAndOnChange = (
  update = ({ update: fn }) => fn(),
  shouldUpdateOrKeys = createShouldUpdateOrKeys(),
) => {
  const shouldUpdate =
    typeof shouldUpdateOrKeys === 'function'
      ? shouldUpdateOrKeys
      : createShouldUpdateOrKeys(shouldUpdateOrKeys);
  return compose(
    lifecycle({
      componentWillReceiveProps(nextProps) {
        if (shouldUpdate(this.props, nextProps)) {
          update(nextProps);
        }
      },
      componentDidMount() {
        update(this.props);
      },
    }),
  );
};

export default updateOnMountAndOnChange;
