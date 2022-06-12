import apiService from "./apiService";

// user_messages
// data: { content, recipients }
// query_params: N/A
// note: recipients - an array of user ids, or all users if it's empty
export const apiGetAllAdminMessages = (query_params) =>
    apiService.get(`user_messages/get_admin_message/`, { params: query_params });
export const apiGetSelfAdminMessages = () =>
    apiService.get(`user_messages/get_admin_message/`);
export const apiGetAdminMessage = (id) =>
    apiService.get(`user_messages/get_admin_message/${id}/`);
export const apiGetAdminMessageRecipient = (id) =>
    apiService.get(`user_messages/get_admin_message_recipient/${id}/`);
export const apiCreateAdminMessage = (data) =>
    apiService.post(`user_messages/create_admin_message/`, data);
export const apiReadAdminMessage = (id) =>
    apiService.post(`user_messages/read_admin_message/${id}/`);
export const apiDeleteAdminMessage = (id) =>
    apiService.post(`user_messages/delete_admin_message/${id}/`);
