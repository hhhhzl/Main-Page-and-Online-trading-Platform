import React, { useState, useEffect, useRef } from "react";
import useWindowDimensions from "components/../utils/sizewindow";
import PageHeader from "components/screen/PageHeader";
import StockSelectionDevice from "components/screen/StockSelectionDevice";
import MarketQuotation from "components/screen/MarketQuotation";

export default ({searchData}) => {
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
    //     window.addEventListener("resize", getListSiz e);
    //   }, []);

    return (
        <>
            <PageHeader searchData = {searchData} />
            <div
                style={{
                    marginTop: 0,
                    width: "100%",
                    minHeight: "500px",
                    display: "flex",
                    justifyContent: "left",
                }}
            >
                <StockSelectionDevice />
                <div style={{width:"75%"}}>
                    <MarketQuotation />

                </div>
            </div>
        </>
    );
}

