import axios from 'axios';

const createRequest = ({
  PARSE_SERVER_URL,
  PARSE_SERVER_APPLICATION_ID,
  PARSE_SERVER_REST_API_KEY,
}) =>
  axios.create({
    baseURL: PARSE_SERVER_URL,
    headers: {
      'X-Parse-Application-Id': PARSE_SERVER_APPLICATION_ID,
      'X-Parse-REST-API-Key': PARSE_SERVER_REST_API_KEY,
    },
  });

export default createRequest;
