import React, { useState, useEffect, useRef } from "react";
import useWindowDimensions from "../../../../utils/sizewindow";
import StockPriceGraphSimplify from "../../../screen/StockPriceGraphSimplify";
import StockTradeComponet from "../../../screen/StockTradeComponet";
import WatchList from "../../../screen/WatchList";
import KeyIndicators from "../../../screen/KeyIndicatorSimple";
import PageHeader from "../../../screen/PageHeader";
import StockSelectionDevice from "../../../screen/StockSelectionDevice";
import MarketQuotation from "../../../screen/MarketQuotation";

export default function Screener(props) {
  const { width, height } = useWindowDimensions();
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
    <PageHeader/>
      <div
        style={{
          marginTop: 0,
          width: "100%",
          minHeight: "500px",
          display: "flex",
          justifyContent: "left",
        }}
      >

          <StockSelectionDevice/>
          < MarketQuotation/>
       

       
         
       
      </div>
    </>
  );
}

