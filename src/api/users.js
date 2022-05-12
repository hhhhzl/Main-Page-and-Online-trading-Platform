import apiService from "./apiService";

// users
export const apiGetAllUsers = () =>
    apiService.get(`get_user/`);
// export const apiUpdateAllUsers = (data) =>
//     apiService.patch(`users/`,data);
export const apiGetUser = (userID) =>
    apiService.get(`get_user/${userID}/`);
export const apiUpdateUser = (userID, data) =>
    apiService.patch(`users/${userID}/`, data);

//register
export const apiRegisterUser = (data) =>
    apiService.post(`users/register/`, data);
export const apiRegisterAdmin = (data) =>
    apiService.post(`users/register_admin/`, data);

//token
export const apiLoginUser = (username, password) =>
    apiService.post(`users/token/`, { username, password });
export const apiGetRefreshToken = () =>
    apiService.get(`users/refresh/`);
