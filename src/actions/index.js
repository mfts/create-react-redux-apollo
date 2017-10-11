import axios from 'axios'

// Add API Tokens here and link to .env file
const API_TOKEN = process.env.REACT_APP_API_TOKEN

// Basic axios client setup with headers
const client = (token = null) => {
  const defaultOptions = {
    headers: {
      Authorization: token ? `token ${token}` : '',
    },
  };

  return {
    get: (url, options = {}) => axios.get(url, { ...defaultOptions, ...options }),
    post: (url, data, options = {}) => axios.post(url, data, { ...defaultOptions, ...options }),
    put: (url, data, options = {}) => axios.put(url, data, { ...defaultOptions, ...options }),
    delete: (url, options = {}) => axios.delete(url, { ...defaultOptions, ...options }),
  };
};

const request = client(`${API_TOKEN}`)

// Write export functions for what is needed