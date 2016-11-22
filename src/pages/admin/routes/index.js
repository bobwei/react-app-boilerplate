/* eslint-disable */
import Layout from '../../../components/Layout';
import { IsAuthenticated } from '../../../modules/auth/decorators';

module.exports = {
  path: '/admin',
  component: IsAuthenticated(Layout),
  childRoutes: [
    require('../Portal/routes'),
  ],
};
