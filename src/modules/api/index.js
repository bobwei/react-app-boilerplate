const configAPI = (__ENVS__) => {
  const AuthAPI = require('modules/auth/api').default;
  AuthAPI.config(__ENVS__);
};

export default configAPI;
