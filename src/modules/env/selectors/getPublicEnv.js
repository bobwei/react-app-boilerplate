import R from 'ramda';

const getPublicEnv = R.pick([
  'BASE_SERVER_URL',
  'BASE_API_URL',
  'PARSE_SERVER_APPLICATION_ID',
  'PARSE_SERVER_REST_API_KEY',
  'PARSE_SERVER_URL',
]);

export default getPublicEnv;
