import React, { useState, useEffect } from "react";
import { Image } from "react-bootstrap";
import "./MarketQuotation.css";
import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider from "react-bootstrap-table2-toolkit";
import { Collapse } from "react-bootstrap";
import { useHistory, useRouteMatch } from "react-router";
import { apiIndustryMember } from "api/trading_platform/market";
import {changeUnit} from "../../utils/index"

const fieldname = '航空机场'

export default function MarketQuotation({ handleShowDetails, indusAll, field }) {
  const [count, setCount] = useState(null);
  const [searchData, setsearchData] = useState(null)
  const { url } = useRouteMatch();
  const history = useHistory();

	useEffect(() =>{
		if (field){
			getBroadIndustyData(field)
		}
	})

	const getBroadIndustyData = async (fieldname) =>{
		try{
			const response = await apiIndustryMember(fieldname)
			let stockDataResponse = response.data.data
			console.log(stockDataResponse, 27)
			setCount(stockDataResponse?.length)
			setsearchData(stockDataResponse)
		}catch (err) {
			console.log(err)
		}
	}


  const columns = [
    {
      dataField: "#",
      text: "No.",
      style: {
        textAlign: "center",
      },
      formatter: (value, row, rowIndex) => {
        return (
          <div>
            <h6 className="table-tr-futura">{rowIndex + 1}</h6>
          </div>
        );
      },
    },
    {
      dataField: "代码",
      text: "代码",
      style: {},
      formatter: (value, row) => {
        return (
          <div>
            <h6 className="table-tr-yahei">{value}</h6>
          </div>
        );
      },
    },
    {
      dataField: "名称",
      text: "名称",
      style: {},
      formatter: (value, row) => {
        return (
          <div>
            <h6 className="table-tr-yahei">{value}</h6>
          </div>
        );
      },
    },
    {
      dataField: "最新价",
      text: "最新价",
      sort: true,
      style: {
        textAlign: "right",
      },
      formatter: (value, row) => {
        return (
          <div>
            <h6 className="table-tr-futura">{value}</h6>
          </div>
        );
      },
    },
    {
      dataField: "涨跌额",
      text: "涨跌额",
      sort: true,
      style: {
        textAlign: "right",
      },
      formatter: (value, row) => {
        return (
          <div>
            <h6 className="table-tr-increase" style={{color:value>0? "#EC1421" : "#16CE62"}}>{value>0? <>+{value}</> : <>{value}</>}</h6>
          </div>
        );
      },
    },
    {
      dataField: "涨跌幅",
      text: "涨跌幅",
      sort: true,
      style: {
        textAlign: "right",
      },
      formatter: (value, row) => {
        return (
          <div>
            <h6 className="table-tr-increase"style={{color:value>0? "#EC1421" : "#16CE62"}}>{value>0? <>+{value}%</> : <>{value}%</>}</h6>
          </div>
        );
      },
    },
    {
      dataField: "昨收",
      text: "昨收",
      sort: true,
      style: {
        textAlign: "right",
      },
      formatter: (value, row) => {
        return (
          <div>
            <h6 className="table-tr-futura">{value}</h6>
          </div>
        );
      },
    },
    {
      dataField: "最高",
      text: "最高",
      sort: true,
      style: {
        textAlign: "right",
      },
      formatter: (value, row) => {
        return (
          <div>
            <h6 className="table-tr-futura">{value}</h6>
          </div>
        );
      },
    },
    {
      dataField: "最低",
      text: "最低",
      sort: true,
      style: {
        textAlign: "right",
      },
      formatter: (value, row) => {
        return (
          <div>
            <h6 className="table-tr-futura">{value}</h6>
          </div>
        );
      },
    },
    {
      dataField: "成交量",
      text: "成交量",
      sort: true,
      style: {
        textAlign: "right",
      },
      formatter: (value, row) => {
        return (
          <div>
            <h6 className="table-tr-futura">{changeUnit(value,2)}</h6>
          </div>
        );
      },
    },
    {
      dataField: "成交额",
      text: "成交额",
      sort: true,
      style: {
        textAlign: "right",
      },
      formatter: (value, row) => {
        return (
          <div>
            <h6 className="table-tr-futura">{changeUnit(value,2)}</h6>
          </div>
        );
      },
    },
    {
      dataField: "成交均量（3月）",
      text: "成交均量（3月）",
      sort: true,
      style: {
        textAlign: "right",
      },
      formatter: (value, row) => {
        return (
          <div>
            <h6 className="table-tr-futura">{value}</h6>
          </div>
        );
      },
    },
    {
      dataField: "振幅",
      text: "振幅",
      sort: true,
      style: {
        textAlign: "right",
      },
      formatter: (value, row) => {
        return (
          <div>
            <h6 className="table-tr-futura">{value}</h6>
          </div>
        );
      },
    },
    {
      dataField: "总市值",
      text: "总市值",
      sort: true,
      style: {
        textAlign: "right",
      },
      formatter: (value, row) => {
        return (
          <div>
            <h6 className="table-tr-futura">{changeUnit(value,2)}</h6>
          </div>
        );
      },
    },
    {
      dataField: "市盈率-动态",
      text: "市盈率（TTM）",
      sort: true,
      style: {
        textAlign: "right",
      },
      formatter: (value, row) => {
        return (
          <div>
            <h6 className="table-tr-futura">{value}</h6>
          </div>
        );
      },
    },
    {
      dataField: "市净率",
      text: "市净率",
      sort: true,
      style: {
        textAlign: "right",
      },
      formatter: (value, row) => {
        return (
          <div>
            <h6 className="table-tr-futura">{value}</h6>
          </div>
        );
      },
    },
    {
      dataField: "换手率",
      text: "换手率",
      sort: true,
      style: {
        textAlign: "right",
      },
      formatter: (value, row) => {
        return (
          <div>
            <h6 className="table-tr-futura">{value}</h6>
          </div>
        );
      },
    },
  ];

  return (
    <div>
      <div className="market-quotation-title">
        <div onClick={() => handleShowDetails(indusAll)}>
          <Image
            src="/Group 863.png"
            style={{ width: "16px", height: "16px" }}
          ></Image>
        </div>
        <div className="market-quotation-genre" style={{ marginLeft: "6px" }}>
          {field? field : "--"}
        </div>
        <div
          style={{ display: "flex", marginLeft: "6px", alignItems: "center" }}
        >
          <div className="market-quotation-text">共</div>
          <div style={{ padding: "0 6px", color: "blue" }}>{count? count :"--"}</div>
          <div className="market-quotation-text">只股</div>
        </div>
      </div>
      <div>
        <div>
          <hr style={{ marginBottom: "0px" }} />
          <div className="market-quotation-table">
            <BootstrapTable
              style="table"
              bordered={false}
              hover
              condensed
              keyField="代码"
              data={searchData? searchData : []}
              columns={columns}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
