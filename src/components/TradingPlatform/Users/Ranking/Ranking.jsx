import React, { useState, useEffect, useRef } from "react";
import PageHeader from "../../../screen/PageHeader";
import useWindowDimensions from "../../../../utils/sizewindow";
import StockPriceGraphSimplify from "../../../screen/StockPriceGraphSimplify";
import StockTradeBar from "../../../screen/StockTradeBar";
import StockTradeComponet from "../../../screen/StockTradeComponet";
import WatchList from "../../../screen/WatchList";
import PendingOrder from "../../../screen/PendingOrder";
import KeyIndicators from "../../../screen/KeyIndicatorSimple";
import RankingPang from "../../../Competition/RankingPang";
import TeamModelIntro from "../../../Competition/team/teamModelIntro";

export default function Ranking(props) {
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

    
    
     <PageHeader/>
     

     

     <div
        style={{
          marginTop: 0,
          width: "100%",
          minHeight: "500px",
          display: "flex",
          backgroundColor:"#F5F6F8",
          justifyContent: "space-between",
        }}
      >
          <TeamModelIntro/>
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
        >
            <RankingPang/>

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

