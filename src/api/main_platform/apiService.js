import axios from "axios";

const apiService = axios.create({
  baseURL: "http://82.157.18.223:10985/api/",
  timeout: 20000,
  headers: {
    "Content-Type": "application/json",
  },
});

apiService.interceptors.request.use(
  (config) => {
    const token = JSON.parse(localStorage.getItem("authTokens"))? JSON.parse(localStorage.getItem("authTokens")).access : "";
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

apiService.interceptors.response.use(
  (response) => {
    // OK responses
    console.log('main_platform res', response);
    return response;
  },
  (error) => {
    // not OK responses
    console.error('main_platform res', error.response);
    return Promise.reject(error);
  }
);

export default apiService;
