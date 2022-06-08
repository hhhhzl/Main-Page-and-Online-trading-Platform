import axios from "axios";

const apiService = axios.create({
  baseURL: "http://82.157.18.223:10985/api/",
  timeout: 3000,
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
