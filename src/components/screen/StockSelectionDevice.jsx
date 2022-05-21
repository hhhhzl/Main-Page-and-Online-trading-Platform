import React,{useState} from "react";
import './StockSelectionDevice.css'
import data from '../../static/Strategy.json'
import {Form,InputGroup,Image} from "react-bootstrap";
import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';

export default function StockSelectionDevice(){
	const [current, setCurrent] = useState(0);
	const changeCurrent = (index) => {
	  setCurrent(index);
	};
	const categories =[
		{value:"quanbu",label:"全部"}
	]
	
	const marks ={
		  0: {
			  style:{
				  fontSize: "12px",
				  fontFamily: "Microsoft YaHei UI-Regular, Microsoft YaHei UI",
				  fontWeight: 400,
				  color: "#2A2B30",
				  lineHeight: "20px",
				  letterSpacing: "1px",
			  },
			  label:<strong>0</strong>,
		  },
		  100: {
		    style:{
				  fontSize: "12px",
				  fontFamily: "Microsoft YaHei UI-Regular, Microsoft YaHei UI",
				  fontWeight: 400,
				  color: "#2A2B30",
				  lineHeight: "20px",
				  letterSpacing: "1px",
		    },
		    label: <strong>23</strong>,
		  },
	}
	return(
		<div style={{width: "25%"}}>
			<div className="stock-selection-device-tabs">
				<div 
					onClick={() => changeCurrent(0)}
					className={current == 0 ? "stock-selection-device-active-font" : "stock-selection-device-normal-font"}>条件选股</div>
				<div 
					onClick={() => changeCurrent(1)}
					style={{marginLeft:"24px"}}
					className={current == 1 ? "stock-selection-device-active-font" : "stock-selection-device-normal-font"}>我的策略</div>
			</div>
			<div style={{borderBottom: "1px solid #E5E8EE"}}></div>
			<div>
				{
					current==0?(
						<div>
							<div style={{margin:"24px  0 0 48px"}}>
								<div className="stock-selection-device-title">市场</div>
								<div style={{padding: "22px 0 0 0"}}>
									<div className="market">
										<div className="stock-selection-device-label">交易所</div>
										<div style={{width: "55.557%"}}>
											<select className="stock-selection-device-select">
												<option>全部</option>
											</select>
										</div>
									</div>
									<div className="market"
										style={{
											marginTop:"16px"
										}}>
										<div className="stock-selection-device-label">板块</div>
										<div style={{width: "55.557%"}}>
											<select className="stock-selection-device-select">
												<option>全部</option>
											</select>
										</div>
									</div>
								</div>
								<div
									style={{
										marginTop:"36px",
										display:"flex",
									}}>
										<div className="stock-selection-device-title" >行情指标</div>
										<div style={{
											marginLeft:"auto"
										}}>
											<Image src="/Group 981.png" width="24px" heigth="24px"></Image>
										</div>
								</div>
								<div style={{padding: "22px 0 0 0"}}>
									<div className="market">
										<div className="stock-selection-device-label">市值</div>
										<div style={{width: "55.557%"}}>
											<Form.Group>
												<InputGroup>
													<Form.Control type="text" />
													<InputGroup.Text>@</InputGroup.Text>
												</InputGroup>
											</Form.Group>
										</div>
									</div>
									<div style={{
											width:"100%",
											marginTop:"62px"
										}}>
										<Slider min={0} marks={marks} step={0} range allowCross={false} defaultValue={[10, 20]} />								
									</div>
								</div>
								
								<div 
									style={{
										marginTop:"59px",
										display:"flex",
									}}>
										<div className="stock-selection-device-title" >财务指标</div>
										<div style={{
											marginLeft:"auto"
										}}>
											<Image src="/Group 981.png" width="24px" heigth="24px"></Image>
										</div>
								</div>
								<div style={{padding: "16px 0px 0px"}}>
									<div className="market">
										<div className="stock-selection-device-label">每股收益</div>
										<div style={{paddingLeft:"120px"}}>
											<Form.Group>
												<InputGroup>
													<Form.Control type="text" className="stock-selection-device-select"/>
													<InputGroup.Text>@</InputGroup.Text>
												</InputGroup>
											</Form.Group>
										</div>
									</div>
									<div style={{
										marginTop:"56px"
									}}>
										<Slider min={0} marks={marks} step={0} range allowCross={false} defaultValue={[10, 20]} />								
									</div>
								</div>
							</div>
							<div 
								style={{
									position: "fixed",
									background:"#ffffff",
									width:"100%"
								}}>
								<div
									style={{
										padding:"24px 48px",
										display:"flex",
										alignItems:"center"
									}}
								>
									<div className="stock-selection-device-label">策略名称</div>
									<div style={{paddingLeft:"120px"}}>
										<Form.Group>
											<InputGroup>
												<Form.Control type="text" />
											</InputGroup>
										</Form.Group>
									</div>
								</div>
							</div>
						</div>
					):(
						<div>
							{data.map((item, idx) => (
								   <div className="list-label">
								   	<div className="stock-selection-device-title">{item.title}</div>
								   	<div className="stock-selection-device-label" style={{paddingTop:"12px"}}>板块：{item.plate}</div>
								   	<div className="stock-selection-device-label">股息收益率：{item.dividendYield}</div>
								   </div>
								))
							}
						</div>
					)
				}
				
			</div>
		</div>
	)
}