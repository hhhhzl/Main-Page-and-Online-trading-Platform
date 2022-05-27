import { useEffect, useState } from "react";
import { ArrowForwardIos } from "@material-ui/icons";
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

export default function LeadingIndustry({setswitchClose,handleShowDetails}) {
  const [data, setData] = useState([]);
  const [stockData, setStockData] = useState([]);
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
        let data = response.data.data.splice(0, 4);
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
        let data = response.data.data.splice(0, 10);
        console.log(data);
        setStockData(data);
        setExtendPlate(false);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  
  return (
    <div className="leading-industry">
      <div className="leading-industry-title">
        <div className="leading-industry-text">领涨行业</div>
        <div className="order-flex">
        <IconButton onClick={() => setswitchClose(false)}>
          <div className="all-order-text"> 
            全部      
          </div>      
          <div className="order-flex">
            <ArrowForwardIos className="all-order-icon"></ArrowForwardIos>
          </div>
          </IconButton>
        </div>
      </div>

      <div
        style={{
          width: "100%",
          borderBottom: "1px solid #E5E8EE",
          marginTop: "8px",
        }}
      >
        <Button
          style={{
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
          1D
        </Button>
      </div>

      <div className="one-day" style={{margin:"0px"}}>
        {data.map((item, index) => (
          // <li>
          //   {item.上涨家数}
          //   {/* {item.label} : {item.value} */}
          // </li>
          // {item.label}
          <PlateCard handleShowDetails={handleShowDetails}  dataSource={item} stockData={item.代表股票} heightProp={0.28} index={index}></PlateCard>
        ))}
      </div>
    </div>
  );
}
