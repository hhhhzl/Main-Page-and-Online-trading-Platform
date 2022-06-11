import React, { useEffect, useState } from "react";
import useWindowDimensions from "components/../utils/sizewindow";
import {
  Col,
  Row,
  Card,
  CardGroup,
  Collapse,
  Button,
  Form,
  Accordion,
} from "react-bootstrap";
import "components/TradingPlatform/eplatform.css";
import MarketTopGains from "components/screen/MarketTopGainStocks";
import MarketStockSearch from "components/screen/MarketStockSearch";
import AreaChart from "components/graphs/areaChart";
import MarketOverview from "components/screen/MarketOverView";
import { flexbox } from "@material-ui/system";
import LeadingIndustry from "components/screen/LeadingIndustry";
import LeadingIndustryAll from "components/screen/AllIndustry";
import PageHeader from "components/screen/PageHeader";
import MarketUpdownDistribute from "components/screen/MarkeUpdownDistribute";

import MarketQuotation from "components/screen/MarketQuotation";
import { getPlatformType } from "utils";

export default ({searchData}) => {
  const { width, height } = useWindowDimensions();
  const [data, setData] = useState([]);
  const [extend, setExtend] = useState(true);
  const [indusAll,setIndusAll] = useState(1);
  const [field, setfield] = useState(null)
  const [platformType, setPlatformType] =  useState(getPlatformType())

  const extendbar = () => {
    setExtend(!extend);
  };

  const handleShowDetails = (prop) => {
	  console.log(prop);
	  if(prop==1){
		setIndusAll(3)
	  }
	  if(prop==2){
		setIndusAll(4)
	  }
	  if(prop==3){
		setIndusAll(1)  
	  }
	  if(prop==4){
		setIndusAll(2)
	  }
  };

  useEffect(() => {
      setfield(field)
      console.log(field)
  })
  return (
    <>
      <PageHeader searchData = {searchData} platformType = {platformType}/>
      <Card style={{ top: 0,paddingTop:"64px", borderColor: "white" }}>
        <Collapse in={indusAll == 1}>
          <Card.Body style={{ padding: 0, borderColor: "white" }}>
            {width > 1000 ? (
              <>
                <div
                  style={{
                    width: "100%",
                    minWidth: "920px",
                    minHeight: "500px",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <div
                    style={{
                      width: "50%",
                      height: height * 0.512,
                      minHeight: "500px",
                    }}
                  >
                    <MarketOverview
                      widthRatio={width > 920 ? width / 2 : 920 / 2}
                    />
                  </div>
                  <div
                    style={{
                      width: "1px",
                      height: height * 0.512,
                      backgroundColor: "#E5E8EE",
                    }}
                  ></div>
                  <div
                    style={{
                      width: "50%",
                      height: height * 0.512,
                      minHeight: "500px",
                    }}
                  >
                    <MarketUpdownDistribute
                      widthRatio={width > 920 ? width / 2 : 920 / 2} searchData ={searchData}
                    />
                  </div>
                </div>
              </>
            ) : (
              <>
                <div
                  style={{
                    width: "100%",
                    height: height * 0.56,
                    minHeight: "550px",
                  }}
                >
                  <MarketOverview widthRatio={width} />
                </div>
                <div style={{ marginTop:"60px",width: "100%", height: width>1000? height * 0.56 :'max-content',minHeight:"300px"}}>
                  <MarketUpdownDistribute widthRatio={width} searchData ={searchData}/>
                </div>
              </>
            )}
          </Card.Body>
        </Collapse>
      </Card>
	  
	  {
		indusAll == 1 ?(
			<>
			  <div style={{margin: "48px",marginTop:"60px",Bottom:"24px"}}>
				<LeadingIndustry
				  handleShowDetails={handleShowDetails}
				  indusAll={indusAll}
				  setIndusAll={setIndusAll}
          data = {data}
          setData={setData}
          setfield = {setfield}
				/>
			  </div>
			</>
		):indusAll == 2? (
			<>
			  <LeadingIndustryAll 
			  setIndusAll={setIndusAll}
			  indusAll={indusAll}
			  handleShowDetails={handleShowDetails}
        data = {data}
        setData={setData}
        setfield = {setfield}
        />
			</>
		) :(
			<>
			  <MarketQuotation handleShowDetails={handleShowDetails} indusAll={indusAll} field={field}/>{" "}
			</>
		) 
		  
	  }
    </>
  );
};
