import React, { useState, useEffect, useRef } from "react";
import PageHeader from "components/screen/PageHeader";
import useWindowDimensions from "components/../utils/sizewindow";
import StockPriceGraphSimplify from "components/screen/StockPriceGraphSimplify";
import StockTradeBar from "components/screen/StockTradeBar";
import StockTradeComponet from "components/screen/StockTradeComponet";
import WatchList from "components/screen/WatchList";
import PendingOrder from "components/screen/PendingOrder";
import KeyIndicators from "components/screen/KeyIndicatorSimple";
import { Dropdown} from 'react-bootstrap'

export default () => {
    const { width, height } = useWindowDimensions();
    const listRef = useRef();

    // const [porforliowidth, setporforliowidth] = useState(1200);
    // const [porforlioheight, setporforlioheight] = useState(800);

    // const getListSize = () => {
    //     const newWidth = listRef.current.clientWidth;
    //     setporforliowidth(newWidth);

    //     const newHeight = listRef.current.clientHeight;
    //     setporforlioheight(newHeight);
    //   };

    //   useEffect(() => {
    //     window.addEventListener("resize", getListSize);
    //   }, []);

    return (
        <>
            <PageHeader />
            <div
                style={{
                    marginTop: height * 0.075,
                    width: "100%",
                    minHeight: "500px",
                    display: "flex",
                    justifyContent: "space-between",
                }}
            >
                <div
                    style={{ width: "auto", minHeight: "500px", maxWidth: "18.75%" }}
                ></div>

                <div
                    style={{
                        width: "1200px",
                        minHeight: "700px",
                        minWidth: "fix-content",
                        display: "flex",
                        justifyContent: "space-between",
                    }}
                    ref={listRef}
                >
                    <div style={{ width:width >1200?"63.3%":"100%"}}>
                        <StockPriceGraphSimplify widthratio={1200 * 0.63} />
                        <div style={{ marginTop: "40px" }}>
                            <KeyIndicators heightProp={0.23} />
                        </div>
                    </div>
					{
						width >1200 ?(
							<div style={{ width: "30%" }}>
								<StockTradeComponet />
								<div style={{ marginTop: "24px" }}>
									<WatchList heightratio={0.2} searchwidth={1200 * 0.3} />
								</div>
							</div>
						):(
							<div>
								<div style={{
										  height:"28px",
										  marginLeft:"16px",
										  marginTop:"12px", 
										  marginRight:"20px",
										  }}>
									<Dropdown style={{marginTop:"5px"}} drop={"down"} >
									<Dropdown.Toggle size="sm" style={{
									  borderRadius:"4px 4px 4px 4px",
									  width:"120px",height:"40px",
									  background: "linear-gradient(135deg, #2B8CFF 0%, #2346FF 100%)",
									  boxShadow: "0px 1px 2px 1px rgba(35, 97, 255, 0.08), 0px 2px 4px 1px rgba(35, 97, 255, 0.08), 0px 4px 8px 1px rgba(35, 97, 255, 0.08), 0px 8px 16px 1px rgba(35, 97, 255, 0.08), 0px 16px 32px 1px rgba(35, 97, 255, 0.08)",
									  border:"0"}} variant="primary" id="dropdown-basic">
									<div style={{
										  height:"24px",
										  fontSize:"14px",
										  paddingTop:"4px",
										  paddingLeft:"5px",
										  textAlign:"center",    
										  fontFamily:" PingFang SC-Semibold, PingFang SC",
										  fontWeight:"600",
										  color:"#FFFFFF",
										  lineHeight:"24px",
										  }}>交易</div>
									</Dropdown.Toggle>
									<Dropdown.Menu style={{
										  width:"360px", border:"0px"}}>
										<StockTradeComponet vertify={false} />
									</Dropdown.Menu>
								  </Dropdown>
								</div>
								
								<div style={{
										  height:"28px",
										  marginLeft:"16px",
										  marginTop:"30px", 
										  marginRight:"20px",
										  }}>
									<Dropdown style={{marginTop:"5px"}} drop={"down"} >
									<Dropdown.Toggle size="sm" style={{
									  borderRadius:"4px 4px 4px 4px",
									  width:"120px",height:"40px",
									  background: "linear-gradient(135deg, #2B8CFF 0%, #2346FF 100%)",
									  boxShadow: "0px 1px 2px 1px rgba(35, 97, 255, 0.08), 0px 2px 4px 1px rgba(35, 97, 255, 0.08), 0px 4px 8px 1px rgba(35, 97, 255, 0.08), 0px 8px 16px 1px rgba(35, 97, 255, 0.08), 0px 16px 32px 1px rgba(35, 97, 255, 0.08)",
									  border:"0"}} variant="primary" id="dropdown-basic">
									<div style={{
										  height:"24px",
										  fontSize:"14px",
										  paddingTop:"4px",
										  paddingLeft:"5px",
										  textAlign:"center",    
										  fontFamily:" PingFang SC-Semibold, PingFang SC",
										  fontWeight:"600",
										  color:"#FFFFFF",
										  lineHeight:"24px",
										  }}>自选股</div>
									</Dropdown.Toggle>
									<Dropdown.Menu style={{
										  width:"360px", border:"0px"}}>
										<WatchList vertify={false} />
									</Dropdown.Menu>
								  </Dropdown>
								</div>
							</div>
						
						)
					}
                    
                </div>
                <div
                    style={{
                        width: "auto",
                        minHeight: "500px",
                        maxWidth: "18.75%",
                        backgroundColor: "blue",
                    }}
                ></div>
            </div>
        </>
    );
}

