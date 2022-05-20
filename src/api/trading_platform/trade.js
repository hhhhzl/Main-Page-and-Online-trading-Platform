import apiService from "./apiService";

// stats
export const apiRank = ({ APIKEY, page, limit }) =>
    apiService.post(`/stats/rank`, { APIKEY, page, limit });

// trade
export const apiOrders = ({ API_KEY, type }) =>
    apiService.get(`/trade/orders`, { params: { API_KEY, type } });
export const apiCancelOrder = ({ API_KEY, order_id }) =>
    apiService.post(`/trade/cancel_order`, { API_KEY, order_id });
export const apiMakeOrder = ({ API_KEY, symbol, side, amount, order_price }) =>
    apiService.post(`/trade/make_order`, { API_KEY, symbol, side, amount, order_price });

// account
export const apiAccountPositions = ({ API_KEY }) =>
    apiService.get(`/account/positions`, { params: { API_KEY } });
export const apiAccountCash = ({ API_KEY }) =>
    apiService.get(`/account/cash`, { params: { API_KEY } });
