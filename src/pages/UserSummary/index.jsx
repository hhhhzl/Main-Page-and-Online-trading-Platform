import useWindowDimensions from "components/../utils/sizewindow";
import PorforlioMoveGraph from "components/screen/PortforlioMoveGraph";
import WatchList from "components/screen/WatchList";
import PendingOrder from "components/screen/PendingOrder";
import PageHeader from "components/screen/PageHeader";
import { Button } from "react-bootstrap";
import { useState } from "react";
import RulesModual from "components/Competition/RulesModual";

export default () => {
    const { width, height } = useWindowDimensions();
    const [showCompetitionrules, setshowCompetitionrules] = useState(false)
    const handleClose = () => {setshowCompetitionrules(false)};

    // The size of the list
    // It will be updated later

    return (
        <>
            <PageHeader />
            <RulesModual showModal = {showCompetitionrules} hideModal = {handleClose} />
            <div style={{ marginTop: 0, width: "100%", display: "flex", justifyContent: "space-between" }}>

                <div style={{ width: "auto", maxWidth: "18.75%", backgroundColor: "blue" }}></div>
                <div style={{ width: "1200px", minWidth: "fix-content", display: "flex", justifyContent: "right" }}>
                </div>
                <div style={{ width: "auto", maxWidth: "18.75%", backgroundColor: "blue" }}></div>
            </div>

            <div style={{ marginTop: 0, width: "100%", minHeight: "500px", display: "flex", justifyContent: "space-between" }}>
                <div style={{ width: "auto", minHeight: "500px", maxWidth: "18.75%", backgroundColor: "blue" }}></div>


                <div style={{ width: "1200px", minHeight: "500px", minWidth: "fix-content", }}>
                     <div style={{ height: height * 0.075, width: "100%", display: "flex", justifyContent: "right", paddingTop:"25px",paddingBottom:"24" }}>
                         <Button 
                         style={{
                             width:"80px",
                             height:"32px",
                             padding:"4px 12px 4px 12px",
                             background: "#F5F6F8",
                             borderRadius: "4px 4px 4px 4px",
                             border:0,
                            opacity: 1}}
                            onClick={() => setshowCompetitionrules(true)}
                            >
                                <div style={{     
                                    width: "56px",
                                    height: "24px",
                                    fontSize: "14px",
                                    fontFamily: "Microsoft YaHei UI-Bold, Microsoft YaHei UI",
                                    fontWeight: "bold",
                                    color: "#2A2B30",
                                    lineHeight:"24px",

                                }}>
                                赛事规则
                               </div>
                                </Button>
                    </div>
                    <div style={{display: "flex", justifyContent: "space-between" }}>
                    <div style={{ width: "63.3%" }}>
                        <PorforlioMoveGraph widthratio={1200 * 0.633} />
                        <div style={{ marginTop: height * 0.0564 }}>
                            <PendingOrder heightProp={0.23} modalHeight={0.7} />
                        </div>
                    </div>

                    <div style={{ width: "30%" }}>
                        <WatchList heightratio={0.63} searchwidth={1200 * 0.3} />
                    </div>
                    </div>

                </div>
                <div style={{ width: "auto", minHeight: "500px", maxWidth: "18.75%", backgroundColor: "blue" }}></div>
            </div>

        </>
    )
}