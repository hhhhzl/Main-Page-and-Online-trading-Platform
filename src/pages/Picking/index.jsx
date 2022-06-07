import React, { useState, useEffect, useRef } from "react";
import useWindowDimensions from "components/../utils/sizewindow";
import PageHeader from "components/screen/PageHeader";
import StockSelectionDevice from "components/screen/StockSelectionDevice";
import MarketQuotationList from "components/screen/StockSelectionDeviceList";
import { apiLiveStockInfo } from "api/trading_platform/market";
import axios from "axios";
import { getPlatformType } from "utils";

export default ({searchData}) => {
    const { width, height } = useWindowDimensions();
    const [allstocksdata,setallstocksdata] = useState(null)
    const [count, setcount] = useState(null)
    const [platformType, setPlatformType] =  useState(getPlatformType())

    useEffect(()=>{
        if(searchData){
            let list = []
            searchData.forEach((elem) =>{
                list.push(elem.代码)
            })
            // getallstocksData(list)
        }
    },[])

    const getallstocksData = (list) =>{
		try{
            // console.log(searchData,22)
            let searchdata = ["SH.600030","SH.603025"]
            let stockDataResponse = []
            axios.all(list.map((elem) => apiLiveStockInfo(elem).data)).then(
                axios.spread((...allData)=>{
                    console.log({allData},27)
                })
            )
            
            //     // console.log(elem.代码)
            //     const response = await apiLiveStockInfo("SH.600030")
			//     let Response = response.data.data
			//     console.log(Response, 27)
            //     stockDataResponse.push(Response)

            // setcount(stockDataResponse?.length)
			// setallstocksdata(stockDataResponse)
            // console.log(allstocksdata)
			
		}catch (err) {
			console.log(err)
		}
	}


    return (
        <>
            <PageHeader searchData = {searchData} platformType = {platformType} />
            <div
                style={{
                    marginTop: 0,
                    width: "100%",
                    minHeight: "500px",
                    display: "flex",
                    justifyContent: "left",
                }}
            >
                <div style={{position:"relative",zIndex:10,width:"25%",minWidth:"320px"}}>
                     <StockSelectionDevice />

                </div>
                <div style={{position:"relative",zIndex:10,marginTop:"64px",width:"1px",height:"max-content",backgroundColor:"#E5E8EE"}}></div>
                


                <div style={{position:"relative",zIndex:10,width:"75%",height:height-64}}>
                    <MarketQuotationList allstocks ={searchData} />

                </div>
            </div>
        </>
    );
}

