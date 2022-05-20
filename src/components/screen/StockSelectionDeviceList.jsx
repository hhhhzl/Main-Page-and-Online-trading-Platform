import React,{useState} from "react";
import {Image} from "react-bootstrap";
import './StockSelectionDeviceList.css'
import data from "../../static/StockSelectionDeviceList.json";
import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider from "react-bootstrap-table2-toolkit";
import { Collapse } from "react-bootstrap";

export default function MarketQuotation(){
	const [count, setCount] = useState(177)
	const columns= [
		{
			dataField:"No",
			text:"No",
			sort:true,
			style:{
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
			sort:true,
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
			sort:true,
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
				<div style={{padding:"0 6px",color:"blue"}}>{count}</div> 
				<div className="choose-text">只股票，当前最多展示200只</div>
			</div>
			<div>
				<ToolkitProvider
					bootstrap4
					keyField="id"
					data={data}
					columns={columns}
					search
					key={0}
				>
					{(props) => (
					  <div>
					    <hr style={{ marginBottom: "0px" }} />
					    <Collapse in={true}>
					      <div className="choose-table">
					        <BootstrapTable
					          style="table"
					          {...props.baseProps}
					          bordered={false}
					          hover
					          condensed
					        />
					      </div>
					    </Collapse>
					  </div>
					)}
				</ToolkitProvider>
				
			</div>
		</div>
	);
}