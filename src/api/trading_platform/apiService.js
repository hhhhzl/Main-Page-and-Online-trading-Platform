import axios from "axios";

const apiService = axios.create({
  baseURL: "http://59.110.238.142:9000/api/",
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
    console.log(response);
    return response;
  },
  (error) => {
    // not OK responses
    console.log(error.response);
    return Promise.reject(error);
  }
);

export default apiService;
