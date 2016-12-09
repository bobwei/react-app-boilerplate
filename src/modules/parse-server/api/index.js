import axios from 'axios';

export default {
  init({
    PARSE_SERVER_API_BASE_URL, PARSE_SERVER_APPLICATION_ID, PARSE_SERVER_JAVASCRIPT_KEY,
    user: { data: { sessionToken } },
  }) {
    this.axios = axios.create({
      baseURL: PARSE_SERVER_API_BASE_URL,
      headers: {
        'X-Parse-Application-Id': PARSE_SERVER_APPLICATION_ID,
        'X-Parse-Javascript-Key': PARSE_SERVER_JAVASCRIPT_KEY,
        ...(!!sessionToken && {
          'X-Parse-Session-Token': sessionToken,
        }),
      },
    });
  },

  request() {
    return this.axios;
  },
};
