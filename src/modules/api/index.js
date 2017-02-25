/* eslint-disable global-require */
const configAPI = (__ENVS__) => {
  const AuthAPI = require('modules/auth/api').default;
  AuthAPI.config(__ENVS__);
  const ParseServerAPI = require('modules/parse-server/api').default;
  ParseServerAPI.config(__ENVS__);
};

export default configAPI;
