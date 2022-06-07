import React, { useEffect,useState } from 'react';
import axios from 'axios';
import './KeyIndicator.css'
import useWindowDimensions from '../../utils/sizewindow';
import { changeUnit } from '../../utils/index.js';

export default function KeyIndicators({
	stockdata
}){
	const {width,height} = useWindowDimensions()

	
	return(
		<>
		
			<div className="indicator-professional">
				<div className="indicator-professional-div">
					<div className="indicator-professional-title">关键指标</div>
				</div>
				<div className="professional-line"></div>
				<div style={{height:height*0.6,minHeight:"300px",overflow:"auto"}}>
					{Object.keys(stockdata).map((obj,idx)=>{
						return (
							<>
							{
								obj != "ts" && obj != "代码" && obj != "股票简称" && obj != "涨跌幅" ? 
								<>
								<div className="indicator-professional-div" key={idx}>
							<div className="indicator-professional-key">{
							obj}</div>
							<div className="indicator-professional-value">
								{obj === "总市值" || obj == "总股本" || obj == "成交均量(3月)" || obj == "成交额" || obj == "成交量" || obj == "流通市值" || obj == "流通股本"? 
								 changeUnit(stockdata[obj]) : stockdata[obj]
								 }
								
								</div>
						</div>

								</>
								:
								null
							}
							</>

						)

					}
						
							
						
						
					
					)}
				</div>
			</div>
		</>
	)
}