import React,{useState} from "react";
import {Image} from "react-bootstrap";
import './MarketQuotation.css'
import data from "../../static/MarketQuotation.json";
import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider from "react-bootstrap-table2-toolkit";
import { Collapse } from "react-bootstrap";

export default function MarketQuotation({handleShowDetails}){
	const [count, setCount] = useState(177)
	const columns= [
						{
							dataField:"No",
							text:"No",
							style: {
								textAlign:"center"
							},
							formatter: (value, row) => {
							  return (
								<div>
								  <h6 className="table-tr-futura">
									{value}
								  </h6>
								</div>
							  );
							},
						},{
							dataField:"代码",
							text:"代码",
							style: {},
							formatter: (value, row) => {
							  return (
								<div>
								  <h6 className="table-tr-yahei">
									{value}
								  </h6>
								</div>
							  );
							},
						},{
							dataField:"名称",
							text:"名称",
							style: {},
							formatter: (value, row) => {
							  return (
								<div>
								  <h6 className="table-tr-yahei">
									{value}
								  </h6>
								</div>
							  );
							},
						},{
							dataField:"最新价",
							text:"最新价",
							sort:true,
							style: {
								textAlign:"right"
							},
							formatter: (value, row) => {
							  return (
								<div>
								  <h6 className="table-tr-futura">
									{value}
								  </h6>
								</div>
							  );
							},
						},{
							dataField:"涨跌额",
							text:"涨跌额",
							sort:true,
							style: {
								textAlign:"right"
							},
							formatter: (value, row) => {
							  return (
								<div>
								  <h6 className="table-tr-increase">
									{value}
								  </h6>
								</div>
							  );
							},
						},{
							dataField:"涨跌幅",
							text:"涨跌幅",
							sort:true,
							style: {
								textAlign:"right"
							},
							formatter: (value, row) => {
							  return (
								<div>
								  <h6 className="table-tr-increase">
									{value}%
								  </h6>
								</div>
							  );
							},
						},{
							dataField:"昨收",
							text:"昨收",
							sort:true,
							style: {
								textAlign:"right"
							},
							formatter: (value, row) => {
							  return (
								<div>
								  <h6 className="table-tr-futura">
									{value}
								  </h6>
								</div>
							  );
							},
						},{
							dataField:"最高",
							text:"最高",
							sort:true,
							style: {
								textAlign:"right"
							},
							formatter: (value, row) => {
							  return (
								<div>
								  <h6 className="table-tr-futura">
									{value}
								  </h6>
								</div>
							  );
							},
						},{
							dataField:"最低",
							text:"最低",
							sort:true,
							style: {
								textAlign:"right"
							},
							formatter: (value, row) => {
							  return (
								<div>
								  <h6 className="table-tr-futura">
									{value}
								  </h6>
								</div>
							  );
							},
						},{
							dataField:"成交量（股）",
							text:"成交量（股）",
							sort:true,
							style: {
								textAlign:"right"
							},
							formatter: (value, row) => {
							  return (
								<div>
								  <h6 className="table-tr-futura">
									{value}万
								  </h6>
								</div>
							  );
							},
						},{
							dataField:"成交额",
							text:"成交额",
							sort:true,
							style: {
								textAlign:"right"
							},
							formatter: (value, row) => {
							  return (
								<div>
								  <h6 className="table-tr-futura">
									{value}
								  </h6>
								</div>
							  );
							},
						},{
							dataField:"成交均量（3月）",
							text:"成交均量（3月）",
							sort:true,
							style: {
								textAlign:"right"
							},
							formatter: (value, row) => {
							  return (
								<div>
								  <h6 className="table-tr-futura">
									{value}万
								  </h6>
								</div>
							  );
							},
						},{
							dataField:"振幅",
							text:"振幅",
							sort:true,
							style: {
								textAlign:"right"
							},
							formatter: (value, row) => {
							  return (
								<div>
								  <h6 className="table-tr-futura">
									{value}
								  </h6>
								</div>
							  );
							},
						},{
							dataField:"总市值",
							text:"总市值",
							sort:true,
							style: {
								textAlign:"right"
							},
							formatter: (value, row) => {
							  return (
								<div>
								  <h6 className="table-tr-futura">
									{value}亿
								  </h6>
								</div>
							  );
							},
						},{
							dataField:"市盈率（TTM）",
							text:"市盈率（TTM）",
							sort:true,
							style: {
								textAlign:"right"
							},
							formatter: (value, row) => {
							  return (
								<div>
								  <h6 className="table-tr-futura">
									{value}
								  </h6>
								</div>
							  );
							},
						},{
							dataField:"股息",
							text:"股息",
							sort:true,
							style: {
								textAlign:"right"
							},
							formatter: (value, row) => {
							  return (
								<div>
								  <h6 className="table-tr-futura">
									{value}
								  </h6>
								</div>
							  );
							},
						},{
							dataField:"每股收益",
							text:"每股收益",
							sort:true,
							style: {
								textAlign:"right"
							},
							formatter: (value, row) => {
							  return (
								<div>
								  <h6 className="table-tr-futura">
									{value}
								  </h6>
								</div>
							  );
							},
						},
					]
	
	
	return(
		<div>
			<div className="market-quotation-title">
				<div onClick={() => handleShowDetails(false)}>
					<Image src="/Group 863.png" style={{width:"16px",height:"16px"}}></Image>
				</div>
				<div className="market-quotation-genre" style={{marginLeft:"6px"}}>医药</div>
				<div style={{display:"flex",marginLeft:"6px",alignItems: "center"}}>
					<div className="market-quotation-text">共</div> 
					<div style={{padding:"0 6px",color:"blue"}}>{count}</div> 
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
						  keyField="id"
						  data={data}
						  columns={columns}
						/>
					  </div>
				  </div>
				
			</div>
		</div>
	);
}