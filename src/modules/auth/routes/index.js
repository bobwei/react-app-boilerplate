module.exports = {
  childRoutes: [
    {
      path: '/login',
      getComponent(nextState, cb) {
        require.ensure([], (require) => {
          cb(null, require('../containers/Login').default);
        });
      },
    },
    {
      path: '/signup',
      getComponent(nextState, cb) {
        require.ensure([], (require) => {
          cb(null, require('../containers/Signup').default);
        });
      },
    },
  ],
};
