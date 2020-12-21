import axios from 'axios';

import { API_URL, API_VERSION } from './constants';

const api = axios.create({
  baseURL: API_URL + API_VERSION,
  timeout: 60000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;