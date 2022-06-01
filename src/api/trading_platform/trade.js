import apiService from "./apiService";

// stats
export const apiRank = ({ APIKEY, page, limit }) =>
    apiService.post(`/stats/rank`, { APIKEY, page, limit });

// trade
export const apiTradeHistory = ({ API_KEY}) =>
    apiService.post(`/trade//transactions`, { params: { API_KEY} });
export const apiOrders = ({ API_KEY, type }) =>
    apiService.get(`/trade/orders`, { params: { API_KEY, type } });
export const apiCancelOrder = ({ API_KEY, order_id }) =>
    apiService.post(`/trade/cancel_order`, { API_KEY, order_id });
export const apiMakeOrder = ({ API_KEY, symbol, side, amount, order_price }) =>
    apiService.post(`/trade/make_order`, { API_KEY, symbol, side, amount, order_price });

// account
export const apiAccountConfig = ({ API_KEY }) =>
    apiService.post(`/account/config`, { params: { API_KEY } });
export const apiAccountPositions = ({ API_KEY }) =>
    apiService.post(`/account/positions`, { params: { API_KEY } });
export const apiAccountCash = ({ API_KEY }) =>
    apiService.post(`/account/cash`, { params: { API_KEY } });
export const apiAccountLine = ({ API_KEY, days }) =>
    apiService.post(`/account/asset_hist`, { params: { API_KEY, days } });
export const apiAccountTotal = ({ API_KEY }) =>
    apiService.post(`/account/asset_total`, { params: { API_KEY} });
export const apiAccountUploadFile = ({ API_KEY, filename, file }) =>
    apiService.post(`/account/upload_file`, { params: { API_KEY, filename, file} });
