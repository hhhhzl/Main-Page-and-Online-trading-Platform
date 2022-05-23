import React,{useState} from "react";
import './StockSelectionDevice.css'
import data from '../../static/Strategy.json'
import { Form,InputGroup,Image,Button } from 'react-bootstrap'
import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';

export default function StockSelectionDevice(){
	const [current, setCurrent] = useState(0);
	const changeCurrent = (index) => {
	  setCurrent(index);
	};
	
	const marks ={
		  0: {
			  style:{
				  left: "2%",
				  fontSize: "12px",
				  fontFamily: "Microsoft YaHei UI-Regular, Microsoft YaHei UI",
				  fontWeight: 400,
				  color: "#2A2B30",
				  lineHeight: "20px",
				  letterSpacing: "1px",
				  width:"30px"
			  },
			  label:<strong>0亿</strong>,
		  },
		  100: {
		    style:{
				  fontSize: "12px",
				  fontFamily: "Microsoft YaHei UI-Regular, Microsoft YaHei UI",
				  fontWeight: 400,
				  color: "#2A2B30",
				  lineHeight: "20px",
				  letterSpacing: "1px",
				  width:"30px"
		    },
		    label: <strong>23亿</strong>,
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
							<Form
								style={{marginLeft:"48px"}}
							>
								<Form.Group style={{
									marginTop:"24px"
								}}>
									<Form.Label  className="stock-selection-device-title stock-selection-device-label">市场</Form.Label>
								</Form.Group>
								<Form.Group className="stock-selection-device-group">
									<Form.Label className="stock-selection-device-label label-text">交易所</Form.Label>
									<Form.Select className="stock-selection-device-select">
										<option value="全部">全部</option>
									</Form.Select>
								</Form.Group>
								<Form.Group className="stock-selection-device-group">
									<Form.Label className="stock-selection-device-label label-text">板块</Form.Label>
									<Form.Select className="stock-selection-device-select">
										<option value="全部">全部</option>
									</Form.Select>
								</Form.Group>
								<Form.Group style={{paddingTop:"36px"}}>
									<Form.Label className="stock-selection-device-title stock-selection-device-label">行情指标</Form.Label>
									<Form.Label style={{
										marginLeft: "67.826%"
									}}>
										<Image src="/Group 981.png" style={{width:"24px", height:"24px"}} ></Image>
									</Form.Label>
								</Form.Group>
								<Form.Group className="stock-selection-device-group">
									<Form.Label className="stock-selection-device-label label-text">市值</Form.Label>
									<InputGroup
										style={{
											width: "107px",
											height:"36px",
											marginLeft: "21.25%"
										}}
									>
										<Form.Control 
											type="number"
											placeholder="0.00"
											defaultValue={null}
											/>
										<InputGroup.Text style={{backgroundColor:"white"}}>亿</InputGroup.Text>
									</InputGroup>
									<Form.Label 
										style={{padding:"6px"}}
										>至</Form.Label>
									<InputGroup
										style={{
											width: "107px",
											height:"36px",
										}}
									>
										<Form.Control 
											placeholder="0.00"
											required
											defaultValue={null}
											type="number"
											/>
										<InputGroup.Text style={{backgroundColor:"white"}}>亿</InputGroup.Text>
									</InputGroup>
								</Form.Group>
								<Form.Group
									style={{
										width: "92%",
										marginTop: "20px"
									}}
								>
									<Slider min={0} marks={marks} step={0} range allowCross={false} defaultValue={[10, 20]} />
								</Form.Group>
								<Form.Group style={{paddingTop:"36px"}}>
									<Form.Label className="stock-selection-device-title stock-selection-device-label">财务指标</Form.Label>
									<Form.Label style={{
										marginLeft: "67.826%"
									}}>
										<Image src="/Group 981.png" style={{width:"24px", height:"24px"}} ></Image>
									</Form.Label>
								</Form.Group>
								
								<Form.Group className="stock-selection-device-group">
									<Form.Label className="stock-selection-device-label stock-selection-device-label label-text">每股收益</Form.Label>
									<InputGroup
										style={{
											width: "107px",
											height:"36px",
											marginLeft: "21.25%"
										}}
									>
										<Form.Control 
											type="number"
											placeholder="0.00"
											defaultValue={null}
											/>
										<InputGroup.Text style={{backgroundColor:"white"}}>亿</InputGroup.Text>
									</InputGroup>
									<Form.Label 
										style={{padding:"6px"}}
										>至</Form.Label>
									<InputGroup
										style={{
											width: "107px",
											height:"36px",
										}}
									>
										<Form.Control 
											placeholder="0.00"
											required
											defaultValue={null}
											type="number"
											/>
										<InputGroup.Text style={{backgroundColor:"white"}}>亿</InputGroup.Text>
									</InputGroup>
								</Form.Group>
								<Form.Group
									style={{
										width: "92%",
										marginTop: "20px"
									}}
								>
									<Slider min={0} marks={marks} step={0} range allowCross={false} defaultValue={[10, 20]} />
								</Form.Group>
							</Form>
							<Form.Group className="fixed">
								<Form.Group className="stock-selection-device-group">
									<Form.Label className="stock-selection-device-label label-text">策略名称</Form.Label>
									<Form.Control type="text" className="stock-selection-device-select"/>
								</Form.Group>
								<Form.Group>
									<Button
									style={{
										margin: "24px 24px 0 175px",
										width: "100px",
										background: "#F5F6F8",
										color: "#2A2B30",
										border: "0px",
									}}
										  type ="submit"
										  size = 'sm'
										  variant="secondary"
										>
										  重置
										</Button>
									<Button
									style={{
										marginTop: "24px",
										width: "100px",
									}}
										  type ="submit"
										  size = 'sm'
										  variant="primary"
										>
										  下单
										</Button>
								</Form.Group>
							</Form.Group>
						</div>
					):(
						<div>
							{data.map((item, idx) => (
								   <div className="list-label">
								   	<div className="stock-selection-device-title">{item.title}</div>
								   	<div className="strategy-label" style={{paddingTop:"12px"}}>板块：{item.plate}</div>
								   	<div className="strategy-label" style={{marginTop:"4px"}}>股息收益率：{item.dividendYield}</div>
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