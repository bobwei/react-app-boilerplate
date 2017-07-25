import Layout from '../components/Layout';

const route = {
  path: '/',
  component: Layout,
  childRoutes: [
    {
      indexRoute: {
        component: require('../components/Home').default,
      },
    },
  ],
};

export default route;
