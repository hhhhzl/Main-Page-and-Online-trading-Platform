import apiService from "./apiService";

// general
export const apiConceptMember = (concept) =>
    apiService.get(`/general/concept_memeber`, { params: { concept } });
export const apiIndustryMember = (industry) =>
    apiService.get(`/general/industry_member`, { params: { industry } });
export const apiConceptBoard = () =>
    apiService.get(`/general/concept_board`);
export const apiIndustryBoard = () =>
    apiService.get(`/general/industry_board`);
export const apiSymbols = (type) =>
    apiService.get(`/general/symbols`, { params: { type } });

// history
export const apiKLine = ({ symbol, start, end, tf }) =>
    apiService.post(`/hist/kline`, { symbol, start, end, tf });

// live
export const apiLiveStockInfo = (symbol) =>
    apiService.get(`/live/stock_info`, { params: { symbol } });