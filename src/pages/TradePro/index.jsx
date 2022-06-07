import StockPriceGraphProfessional from "components/screen/StockPriceGraphProfessional"
import React, { useState, useEffect, useRef } from "react";
import PageHeader from "components/screen/PageHeader";
import useWindowDimensions from "components/../utils/sizewindow";
import StockPriceGraphSimplify from "components/screen/StockPriceGraphSimplify";
import StockTradeBar from "components/screen/StockTradeBar";
import StockTradeComponet from "components/screen/StockTradeComponet";
import WatchList from "components/screen/WatchList";
import PendingOrder from "components/screen/PendingOrder";
import KeyIndicators from "components/screen/KeyIndicatorSimple";
import { Button, Dropdown} from 'react-bootstrap'
import { getLastStock, getPlatformType, getWatchList, setLastStock } from "utils";
import { apiKLine, apiLiveStockInfo } from "api/trading_platform/market";
import { useLocation } from "react-router";
import moment from "moment";
import {tz} from "moment-timezone"

const defaultstock = "SH.600030"

export default ({searchData}) => {
    const { width, height } = useWindowDimensions();
    const [stockdata,setstockdata] = useState(null)
    const [kline, setkline] = useState(null)
    const [watchliststocks, setwatchliststocks] = useState([])
    const location = useLocation();
    const [load,setload] = useState(false)
    const [platformType, setPlatformType] =  useState(getPlatformType())


        useEffect(() =>{
            if (!load){
                if(location.state){      
                    getStock(location.state.symbol)
                    getKlineStock(location.state.symbol)
                    getWatchListFunc()  
                }else{
                    if (getLastStock()){
                        const last = getLastStock()
                    getStock(last)
                    getKlineStock(last)
                    getWatchListFunc()        
                }else{
                    getdeflautStock()
                    getKlineStock(defaultstock) 
                    getWatchListFunc()
                    }    
                } 
            }
            setload(true)
        },[])

        const getKlineStock = async (symbol) =>{
            try{
                var now = moment();
                var timeInShanghai = now.tz('Asia/Shanghai').format('YYYY-MM-DD');
                var PastTime = moment().subtract(3,'years').format('YYYY-MM-DD')
                var tf = "1d"
                const response = await apiKLine({
                    "symbol":symbol,
                    "start":PastTime,
                    "end":timeInShanghai,
                    tf})
                let KLineResponse = response.data.data
                setkline(KLineResponse)
              }catch (err) {
                console.log(err)
              }
    
        }
    
           
    
        const getdeflautStock = async (props) => {
            try{
              const response = await apiLiveStockInfo(defaultstock)
              let stockDataResponse = response.data.data
              setstockdata(stockDataResponse)
            }catch (err) {
              console.log(err)
            }
          };
    
          const getStock = async (symbol) => {
            try{
              const response = await apiLiveStockInfo(symbol)
              let stockDataResponse = response.data.data
              setstockdata(stockDataResponse)
              setLastStock(stockDataResponse.代码)
            }catch (err) {
              console.log(err)
            }
          };
    
          const getWatchListFunc = async () => {
            try {
                let list = getWatchList()
                const newWatchlistArray = await Promise.all(list.map(async function(stock) {
                    const response = await apiLiveStockInfo(stock);
                    const watchlistdata = response.data.data;
                    return watchlistdata;
                }));
                setwatchliststocks(newWatchlistArray)
            } catch (e) {
                console.log(e);
            }
          }

    return (
        <StockPriceGraphProfessional 
        searchData = {searchData} 
        stockdata={stockdata}
        watchlistdata ={watchliststocks}
        kline = {kline}
        />
    )
}