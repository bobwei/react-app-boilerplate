import Layout from '../components/Layout';

const route = {
  path: '/',
  component: Layout,
  childRoutes: [
    {
      indexRoute: {
        getComponent(nextState, cb) {
          require.ensure([], (require) => {
            cb(null, require('../components/Home').default);
          });
        },
      },
    },
  ],
};

export default route;
