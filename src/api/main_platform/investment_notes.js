import apiService from "./apiService";

// note
// data: { competition, title, content, start_time, end_time, participant_type }
// query_params: competition_id, participant_type
export const apiGetAllNotes = (query_params) =>
    apiService.get(`investment_notes/get_note/`, { params: query_params });
export const apiGetNote = (id) =>
    apiService.get(`investment_notes/get_note/${id}/`);
export const apiCreateNote = (data) =>
    apiService.post(`investment_notes/create_note/`, data);
export const apiUpdateNote = (id, data) =>
    apiService.post(`investment_notes/update_note/${id}/`, data);

// submission
// data: { note, user, account, answer }
// query_params: { note_id, user_id, account_id, outstanding }
export const apiGetAllSubmissions = (query_params) =>
    apiService.get(`investment_notes/get_submissions/`, { params: query_params });
export const apiGetSubmission = (id) =>
    apiService.get(`investment_notes/get_submissions/${id}/`);
export const apiCreateOrUpdateSubmission = (data) =>
    apiService.post(`investment_notes/create_or_update_submissions/`, data);
export const apiUpdateSubmissionOutstanding = (id) =>
    apiService.post(`investment_notes/update_submission_outstanding/${id}/`);
