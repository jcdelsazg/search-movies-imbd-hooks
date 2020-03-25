import axios from 'axios';

const baseURL = 'https://www.omdbapi.com/?apiKey=18a6895f';

export const apiCall = (url, data, headers, method) =>
  axios({
    method,
    url: baseURL + url,
    data,
    headers
  });
