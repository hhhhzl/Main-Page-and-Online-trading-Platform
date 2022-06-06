import React,{useEffect, useState} from "react";
import {Image} from "react-bootstrap";
import './StockSelectionDevice.css'
import data from "../../static/StockSelectionDeviceList.json";
import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider from "react-bootstrap-table2-toolkit";
import { Collapse } from "react-bootstrap";
import paginationFactory from 'react-bootstrap-table2-paginator';
import useWindowDimensions from "utils/sizewindow";


export default function MarketQuotationList({allstocks}){
	const {width,height} = useWindowDimensions()
	const [count, setCount] = useState(null)
	const [searchData, setsearchData] = useState(null)

	const pagination = paginationFactory({
        sizePerPageList: [{
            text: '200', value: 200
        }, {}]
    });
	

	const columns= [
		{
			dataField:"#",
			text:"No.",
			style:{
				textAlign:"center"
			},
			formatter: (value, row, rowIndex) => {
			  return (
				<div>
				  <h6 className="table-tr-futura">
					{rowIndex + 1}
				  </h6>
				</div>
			  );
			},
		},{
			dataField:"代码",
			text:"代码",
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
			style:{
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
			style:{
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
			style:{
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
			style:{
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
			style:{
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
			style:{
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
			style:{
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
			style:{
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
			style:{
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
		}
	]
	return(
		<div>
			<div style={{display:"flex",margin:"15px 0 0 12px",alignItems: "center"}}>
				<div className="choose-text">找到</div> 
				<div style={{padding:"0 6px",color:"blue"}}>{allstocks? allstocks.length : "--"}</div> 
				<div className="choose-text">只股票{allstocks? allstocks.length>200?  ", 当前仅展示200只":null :null}</div>
			</div>
			<div>
				  <div>
					<hr style={{ marginBottom: "0px" }} />
					  <div className="choose-table">
						<BootstrapTable
						  style="table"
						  bordered={false}
						  hover
						  condensed
						  keyField="代码"
						  data={allstocks? allstocks.slice(2) : []}
						  columns={columns}
						  pagination={pagination}
						/>
					  </div>
				  </div>
				
			</div>
		</div>
	);
}