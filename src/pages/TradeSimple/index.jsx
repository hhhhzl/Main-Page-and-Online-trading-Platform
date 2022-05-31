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
import { getLastStock, setLastStock } from "utils";
import { apiLiveStockInfo } from "api/trading_platform/market";
import { useLocation } from "react-router";

const defaultstock = "SH.600030"

export default ({searchData,searchstock}) => {
    const { width, height } = useWindowDimensions();
    const [stockLastView, setStockLastView] = useState(getLastStock()? getLastStock() : null)
    const [stockdata,setstockdata] = useState(null)
    const location = useLocation();

        useEffect(()=>{
            console.log(location.state,24)
            if(location.state){      
                getStock(location.state.symbol)
            }else{
                getdeflautStock() 
            }                              
        },[])

    const getdeflautStock = async (props) => {
        try{
          const response = await apiLiveStockInfo(defaultstock)
          let stockDataResponse = response.data.data
          console.log(stockDataResponse, 32)
          setstockdata(stockDataResponse)
          setLastStock(stockDataResponse.代码)
        }catch (err) {
          console.log(err)
        }
      };

      const getStock = async (symbol) => {
        try{
          const response = await apiLiveStockInfo(symbol)
          let stockDataResponse = response.data.data
          console.log(stockDataResponse, 32)
          setstockdata(stockDataResponse)
          setLastStock(stockDataResponse.代码)
        }catch (err) {
          console.log(err)
        }
      };

    return (
        <>
            <PageHeader searchData = {searchData} />
            <div
                style={{
                    marginTop: 0,
                    width: "100%",
                    minHeight: "500px",
                    display: "flex",
                    justifyContent: "space-between",
                }}
            >
                <div
                    style={{ width: "48px", minHeight: "500px", maxWidth: "18.75%" }}
                ></div>


                <div
                    style={{
                        width:  width > 1200? "1200px" : width -96,
                        minHeight: "700px",
                        minWidth: "fix-content",
                    }}
                >
                   <div style={{ height: height * 0.075, width: "100%", display: "flex", justifyContent: "right", paddingTop:"25px",paddingBottom:"24" }}>
                        

                        {
						width> 1200? null
							
						:(
							<>
							<div style={{
                                width:"80px",
                                height:"32px",
                                borderRadius: "4px 4px 4px 4px",
                                marginRight:"20px",
                                border:0,
                                opacity: 1
									  }}>
								<Dropdown drop={"down"} >
								<Dropdown.Toggle size="sm" 
                                style={{
                                    width:"80px",
                                    height:"32px",
                                    padding:"4px 12px 4px 12px",
                                    borderRadius: "4px 4px 4px 4px",
                                    background: "#F5F6F8",
								  border:"0"}} variant="primary" id="dropdown-basic">
								<div style={{
									  width: "56px",
                                      height: "24px",
                                      fontSize: "14px",
                                      fontFamily: "Microsoft YaHei UI-Bold, Microsoft YaHei UI",
                                      fontWeight: "bold",
                                      color: "#2A2B30",
                                      lineHeight:"24px",
									  }}>自选股</div>
								</Dropdown.Toggle>
								<Dropdown.Menu style={{
									  width:"360px", border:"0px"}}>
									<WatchList vertify={false} heightratio={0.5} searchwidth={1200 * 0.3} />
								</Dropdown.Menu>
							  </Dropdown>
							</div>

							<div style={{
                                width:"80px",
                                height:"32px",
                                borderRadius: "4px 4px 4px 4px",
                                border:0,
                                opacity: 1
									  }}>
								<Dropdown drop={"down"} >
								<Dropdown.Toggle size="sm" 
                                style={{
                                    width:"80px",
                                    height:"32px",
                                    padding:"4px 12px 4px 12px",
                                    borderRadius: "4px 4px 4px 4px",
                                    background: "#F5F6F8",
								  border:"0"}} variant="primary" id="dropdown-basic">
								<div style={{
									  width: "56px",
                                      height: "24px",
                                      fontSize: "14px",
                                      fontFamily: "Microsoft YaHei UI-Bold, Microsoft YaHei UI",
                                      fontWeight: "bold",
                                      color: "#2A2B30",
                                      lineHeight:"24px",
									  }}>交易</div>
								</Dropdown.Toggle>
								<Dropdown.Menu style={{
									  width:"360px", border:"0px"}}>
									<StockTradeComponet vertify={false} stockdata ={stockdata} />
								</Dropdown.Menu>
							  </Dropdown>
							</div>
					

                           
						</>
						
						)}
                    </div>

			

					<div style={{display: "flex", justifyContent: "space-between" }}>
					<div style={{ width:width >1200?"63.3%":"100%"}}>
                        <StockPriceGraphSimplify widthratio={width > 1200? 1200 *0.633 : width -96} stockdata ={stockdata} />
                        <div style={{ marginTop: "40px" }}>
                            <KeyIndicators heightProp={0.23} stockdata={stockdata} />
                        </div>
                    </div>


					{width > 1200? (
						<div style={{ width: "30%" }}>
						<StockTradeComponet vertify={false} stockdata ={stockdata} />
						<div style={{ marginTop: "24px" }}>
							<WatchList heightratio={0.2} searchwidth={1200 * 0.3} />
						</div>
					</div>
					) : null}

					</div>
   
                </div>
                <div
                    style={{
                        width: "48px",
                        minHeight: "500px",
                        maxWidth: "18.75%",

                    }}
                ></div>
            </div>
        </>
    );
}

