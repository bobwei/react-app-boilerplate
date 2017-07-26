import R from 'ramda';

const getPublicEnv = R.pick(['BASE_SERVER_URL']);

export default getPublicEnv;
