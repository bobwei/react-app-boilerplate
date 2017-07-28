import axios from 'axios';

const createRequest = (
  { PARSE_SERVER_URL, PARSE_SERVER_APPLICATION_ID, PARSE_SERVER_REST_API_KEY },
  { sessionToken },
) => {
  const request = axios.create({
    baseURL: PARSE_SERVER_URL,
    headers: {
      'X-Parse-Application-Id': PARSE_SERVER_APPLICATION_ID,
      'X-Parse-REST-API-Key': PARSE_SERVER_REST_API_KEY,
    },
  });
  if (sessionToken) {
    Object.assign(request.defaults.headers.common, {
      'X-Parse-Session-Token': sessionToken,
    });
  }
  return request;
};

export default createRequest;
