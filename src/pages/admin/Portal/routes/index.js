module.exports = {
  indexRoute: {
    getComponent(nextState, cb) {
      require.ensure([], (require) => {
        cb(null, require('../containers').default);
      });
    },
  },
};
