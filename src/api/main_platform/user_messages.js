import apiService from "./apiService";

// user_messages
// data: { content, recipients }
// query_params: N/A
// note: recipients - an array of user ids, or all users if it's empty
export const apiGetAllAdminMessages = (query_params) =>
    apiService.get(`users/get_admin_message/`, { params: query_params });
export const apiGetAdminMessage = (id) =>
    apiService.get(`users/get_admin_message/${id}/`);
export const apiGetAdminMessageRecipient = (id) =>
    apiService.get(`users/get_admin_message_recipient/${id}/`);
export const apiCreateAdminMessage = (data) =>
    apiService.post(`users/create_admin_message/`, data);
export const apiReadAdminMessage = (id) =>
    apiService.post(`users/read_admin_message/${id}/`);
export const apiDeleteAdminMessage = (id) =>
    apiService.post(`users/delete_admin_message/${id}/`);
