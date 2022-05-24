import React, { useState, useEffect, useRef } from "react";
import PageHeader from "../../screen/PageHeader";
import useWindowDimensions from "../../../utils/sizewindow";
import './InvestNotes.css'
// import StockPriceGraphSimplify from "../../../screen/StockPriceGraphSimplify";
// import StockTradeBar from "../../../screen/StockTradeBar";
// import StockTradeComponet from "../../../screen/StockTradeComponet";
// import WatchList from "../../../screen/WatchList";
// import PendingOrder from "../../../screen/PendingOrder";
// import KeyIndicators from "../../../screen/KeyIndicatorSimple";

export default function InvestNotes(props) {
  const { width, height } = useWindowDimensions();
  
  const listRef = useRef();
  const [current, setCurrent] = useState(0);
  const changeCurrent = (index) => {
    setCurrent(index);
  };

  return (
    <>
      <PageHeader />
      <div
        style={{
          paddingTop: height * 0.075,
          width: "100%",
          minHeight: "500px",
          display: "flex",
          justifyContent: "center",
          background: "#F5F6F8",
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
            alignItems: "baseline",
            flexDirection: "column",
          }}
          ref={listRef}
        >
          <div className="pending-order-tabs">
            <div
              onClick={() => changeCurrent(0)}
              className={current == 0 ? "active-font" : "normal-font"}
            >
              持仓
            </div>
            <div
              style={{ margin: "0px 24px" }}
              onClick={() => changeCurrent(1)}
              className={current == 1 ? "active-font" : "normal-font"}
            >
              当前挂单
            </div>
            <div
              onClick={() => changeCurrent(2)}
              className={current == 2 ? "active-font" : "normal-font"}
            >
              交易记录
            </div>
          </div>
          
          <div className="file-upload-wrapper">
            <div className="file-upload-text">
              <div>重要文案重要文案重要文案重要文案重要文案重要文案重要文案重要文案重要文案</div>
              <div>重要文案重要文案重要文案重要文案重要文案重要文案重要文案重要文案重要文案重要文案重要文案重要文案重要文案重要文案</div>
              <div>重要文案重要文案重要文案重要文案重要文案重要文案</div>
            </div>
            
            <div className="upload-btn">
              
            </div>

            <div className="file-submit-btn">
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
