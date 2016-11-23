import Layout from '../components/Layout';
import { IsAuthenticated } from '../../../modules/auth/decorators';

module.exports = {
  path: '/admin',
  component: IsAuthenticated(Layout),
  childRoutes: [
    {
      indexRoute: {
        getComponent(nextState, cb) {
          require.ensure([], require => cb(null, require('../containers/Portal').default));
        },
      },
    },
  ],
};
