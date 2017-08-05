import compose from 'recompose/compose';
import lifecycle from 'recompose/lifecycle';

const updateOnMount = () =>
  compose(
    lifecycle({
      componentDidMount() {
        const { update } = this.props;
        update();
      },
    }),
  );

export default updateOnMount;
