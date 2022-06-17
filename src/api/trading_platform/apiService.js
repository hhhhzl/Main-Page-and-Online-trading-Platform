import axios from "axios";

const apiService = axios.create({
  baseURL: "http://82.157.18.223:10987/api/",
  timeout: 3000,
  headers: {
    "Content-Type": "application/json",
  },
});

apiService.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

apiService.interceptors.response.use(
  (response) => {
    // OK responses
    console.log('trading_platform res', response);
    return response;
  },
  (error) => {
    // not OK responses
    console.error('trading_platform res', error.response);
    return Promise.reject(error);
  }
);

export default apiService;
