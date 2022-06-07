import apiService from "./apiService";

// users
// data: { username, email, mobile_number, last_name, first_name, sex, degree, area, institution }
// query_params: N/A
export const apiGetAllUsers = (query_params) =>
    apiService.get(`users/get_user/`, { params: query_params });

    
export const apiGetUser = (id) =>
    apiService.get(`users/get_user/${id}/`);
export const apiUpdateUser = (data) =>
    apiService.post(`users/update_profile/`, data);

// register
export const apiRegisterUser = (data) =>
    apiService.post(`users/register/`, data);
export const apiRegisterAdmin = (data) =>
    apiService.post(`users/register_admin/`, data);

// auth
export const apiLoginUser = (username, password) =>
    apiService.post(`users/token/`, { username, password });
export const apiGetRefreshToken = () =>
    apiService.get(`users/refresh/`);
export const apiChangePassword = (old_password, new_password) =>
    apiService.post(`users/change_password/`, { old_password, new_password })
