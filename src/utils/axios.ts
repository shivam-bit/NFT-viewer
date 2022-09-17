const axios = require('axios').default;

const axiosInstance = axios.create({
    baseURL: '/api',
    // timeout: 1000,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    },
    method: 'get', 
  });

  export default axiosInstance;