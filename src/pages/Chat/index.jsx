import React, { useState, useEffect, useRef } from "react";
import useWindowDimensions from "components/../utils/sizewindow";
import PageHeader from "components/screen/PageHeader";
import Notice from "components/webpage/chat/Notice";
import { getPlatformType } from "utils";
import HeaderCreate from "components/MainPage/header";

export default () => {
    const { width, height } = useWindowDimensions();
    const platformType = getPlatformType();
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
        {
            platformType == null ? <HeaderCreate/> : <PageHeader />
        }
            <div style={{width:"100%",height:"100%",display:"flex",justifyContent:"center"}}>
                <div style={{width:"1200px"}} >
                   <Notice/>
                </div>
            </div>
        </>
    );
}