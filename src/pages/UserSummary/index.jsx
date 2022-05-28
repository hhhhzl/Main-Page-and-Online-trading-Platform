import useWindowDimensions from "components/../utils/sizewindow";
import PorforlioMoveGraph from "components/screen/PortforlioMoveGraph";
import WatchList from "components/screen/WatchList";
import PendingOrder from "components/screen/PendingOrder";
import PageHeader from "components/screen/PageHeader";
import { Button ,Dropdown} from "react-bootstrap";
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
					
					{
						width> 1200?(
							<div style={{ width: "30%" }}>
								<WatchList heightratio={0.63} searchwidth={1200 * 0.3} />
							</div>
						):(
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
						)
					}
                    </div>

                </div>
                <div style={{ width: "auto", minHeight: "500px", maxWidth: "18.75%", backgroundColor: "blue" }}></div>
            </div>

        </>
    )
}