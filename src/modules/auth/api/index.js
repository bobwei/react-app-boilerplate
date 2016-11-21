import axios from 'axios';

export default {
  init({ AUTH_API_BASE_URL, PARSE_SERVER_APPLICATION_ID, PARSE_SERVER_JAVASCRIPT_KEY }) {
    this.axios = axios.create({
      baseURL: AUTH_API_BASE_URL,
      headers: {
        'X-Parse-Application-Id': PARSE_SERVER_APPLICATION_ID,
        'X-Parse-Javascript-Key': PARSE_SERVER_JAVASCRIPT_KEY,
      },
    });
  },

  request() {
    return this.axios;
  },
};
