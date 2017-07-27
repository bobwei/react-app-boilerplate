import axios from 'axios';

const createRequest = ({ BASE_API_URL }) =>
  axios.create({
    baseURL: BASE_API_URL,
  });

export default createRequest;
