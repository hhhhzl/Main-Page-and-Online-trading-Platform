import { useEffect, useState } from "react";
import { ArrowBack } from "@material-ui/icons";
import {
  Card,
  Collapse,
  Button,
  Row,
  Nav,
  Col,
  Badge,
  InputGroup,
  Form,
  Image,
  Modal,
} from "react-bootstrap";
import axios from "axios";
import PlateCard from "./PlateCard";

import "./leadingIndustry.css";
import { IconButton } from "@material-ui/core";

export default function LeadingIndustryAll({setIndusAll,indusAll,handleShowDetails}) {
  const [data, setData] = useState([]);
  const [stockData, setstockData] = useState([]);
  const [extend, setExtend] = useState(true);
  const [extendPlate, setExtendPlate] = useState(true);
  

  useEffect(() => {
    if (extend) {
      getIndustrySector();
    }
    if(extendPlate){
      getPlateData();
    }
  });
  const getIndustrySector = () => {
    return axios
      .get("http://82.157.18.223:10987/api/general/industry_board")
      .then(function (response) {
        // console.log(response.data.data);
        let data = response.data.data;
        console.log(data);
        setData(data);
        setExtend(false);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const getPlateData = () => {
    let url = "http://82.157.18.223:10987/api/general/symbols?type=a";
    return axios
      .get(url)
      .then(function (response) {
        // console.log(response.data.data);
        let data = response.data.data.splice(0, 10);
        console.log(data);
        setstockData(data);
        setExtendPlate(false);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  
  return (
    <div className="leading-industry">
      
      <div
        style={{
          width: "100%",
          borderBottom: "1px solid #E5E8EE",
          marginTop: "8px",
          paddingLeft: "48px",
        }}
      >
        <IconButton onClick ={() => setIndusAll(1)}>
        <ArrowBack style={{color:"#2A2B30",fontSize:"18px"}}></ArrowBack>
        </IconButton>
        
        <Button
          style={{
            marginLeft:"12px",
            height: "36px",
            borderBottom: "3px solid #1442ED",
            borderTop: "0px",
            borderLeft: "0px",
            borderRight: "0px",
            borderRadius: "0px",
            backgroundColor: "white",
            fontSize: "16px",
            textAlign: "center",
            fontFamily: "Microsoft YaHei UI-Bold",
            fontWeight: "500",
            padding: "0px",
            color: "#1442ED",
            lineHeight: "28px",
            letterSpacing: "1px",
          }}
          variant="outline-primary"
        >
          当日
        </Button>
      </div>

      <div className="one-day">
        {data.map((item, index) => (
          // <li>
          //   {item.上涨家数}
          //   {/* {item.label} : {item.value} */}
          // </li>
          // {item.label}
        <PlateCard handleShowDetails={handleShowDetails} indusAll={indusAll} dataSource={item} stockData={item.代表股票} heightProp={0.28} index={index}></PlateCard>
        ))}
      </div>
    </div>
  );
}
