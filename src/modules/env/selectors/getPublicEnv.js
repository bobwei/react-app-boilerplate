import R from 'ramda';

const getPublicEnv = R.pick(['BASE_SERVER_URL', 'BASE_API_URL']);

export default getPublicEnv;
