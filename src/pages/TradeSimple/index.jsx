import React, { useState, useEffect, useRef } from "react";
import PageHeader from "components/screen/PageHeader";
import useWindowDimensions from "components/../utils/sizewindow";
import StockPriceGraphSimplify from "components/screen/StockPriceGraphSimplify";
import StockTradeBar from "components/screen/StockTradeBar";
import StockTradeComponet from "components/screen/StockTradeComponet";
import WatchList from "components/screen/WatchList";
import PendingOrder from "components/screen/PendingOrder";
import KeyIndicators from "components/screen/KeyIndicatorSimple";

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
                    <div style={{ width: "63.3%" }}>
                        <StockPriceGraphSimplify widthratio={1200 * 0.63} />
                        <div style={{ marginTop: "40px" }}>
                            <KeyIndicators heightProp={0.23} />
                        </div>
                    </div>
                    <div style={{ width: "30%" }}>
                        <StockTradeComponet />
                        <div style={{ marginTop: "24px" }}>
                            <WatchList heightratio={0.2} searchwidth={1200 * 0.3} />
                        </div>
                    </div>
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

