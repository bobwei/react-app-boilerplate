import getEnv from '../getEnv';

test('getEnv', () => {
  const selector = getEnv;
  const state = { env: { BASE_SERVER_URL: 'http://localhost:5012' } };
  expect(selector(state)).toEqual({ BASE_SERVER_URL: 'http://localhost:5012' });
});
