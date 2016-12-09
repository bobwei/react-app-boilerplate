/* eslint-disable import/prefer-default-export */
export const envSelector = (envs) => {
  const {
    CLIENT_HISTORY,
    AUTH_API_BASE_URL, PARSE_SERVER_APPLICATION_ID, PARSE_SERVER_JAVASCRIPT_KEY,
    PARSE_SERVER_API_BASE_URL,
  } = envs;
  return {
    CLIENT_HISTORY,
    AUTH_API_BASE_URL,
    PARSE_SERVER_APPLICATION_ID,
    PARSE_SERVER_JAVASCRIPT_KEY,
    PARSE_SERVER_API_BASE_URL,
  };
};
