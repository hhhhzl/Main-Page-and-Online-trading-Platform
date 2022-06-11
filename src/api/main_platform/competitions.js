import apiService from "./apiService";

// competitions
// data: { name, backend_url, registration_time, start_time, end_time }
// query_params: N/A
export const apiGetAllCompetitions = (query_params) =>
    apiService.get(`competitions/get_competition/`, { params: query_params });
export const apiGetCompetition = (id) =>
    apiService.get(`competitions/get_competition/${id}/`);
export const apiCreateCompetition = (data) =>
    apiService.post(`competitions/create_competition/`, data);
export const apiUpdateCompetition = (id, data) =>
    apiService.post(`competitions/update_competition/${id}/`, data);

// team accounts
// data: { competition, leader }
// query_params: { competition, leader }
export const apiGetAllTeamAccounts = (query_params) =>
    apiService.get(`competitions/get_team_account/`, { params: query_params });
export const apiGetTeamAccount = (id) =>
    apiService.get(`competitions/get_team_account/${id}/`);
export const apiCreateTeamAccount = (data) =>
    apiService.post(`competitions/create_team_account/`, data);
export const apiJoinTeamAccount = (id) =>
    apiService.post(`competitions/join_team_account/${id}/`);
export const apiSubmitTeamAccount = (id) =>
    apiService.post(`competitions/submit_team_account/${id}/`);

// competition API key
export const apiGetCompetitionAPIKey = (competitionID) =>
    apiService.get(`competitions/get_competition_api_key/${competitionID}/`);

// competions infomation && messges
export const apiGetCompetitiongetInfo = () =>
    apiService.get(`competitions/get_user_competition_info`);
export const apiGetJoinTeamRequest = (id) =>
    apiService.get(`competitions/get_team_account_join_request/${id}`);