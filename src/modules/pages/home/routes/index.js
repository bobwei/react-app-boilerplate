/* eslint-disable global-require */
import Layout from '../components/Layout';

module.exports = {
  path: '/',
  component: Layout,
  childRoutes: [
    {
      indexRoute: {
        getComponent(nextState, cb) {
          require.ensure([], (require) => {
            cb(null, require('../containers/Home').default);
          });
        },
      },
    },
  ],
};
