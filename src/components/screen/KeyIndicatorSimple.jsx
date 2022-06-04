import React, { useEffect,useState } from 'react';
import axios from 'axios';
import './KeyIndicator.css'
import { changeUnit, fmoney } from 'utils';

export default function KeyIndicators({stockdata}){
	const [extend, setExtend] = useState(true)
	
	
	return(
		<div>
			<div style={{width:"100%"}}>
				<div className="indicator-simple-title">关键指标</div>
				<div className="simple-line"></div>
				<div className="indicator-simple">

					{!stockdata?
					
					/////TO DO
					<div style={{width:"100%",marginTop:"30px",display:"flex",justifyContent:"center"}}>	
					"loading...." 
					</div>
					:
					<>
				
					<div className="indicator-simple-div">
						<div className="indicator-simple-key">开盘</div>
						<div className="indicator-simple-value"> {stockdata.今开}</div>
					</div>
					<div className="indicator-simple-div">
						<div className="indicator-simple-key">昨收</div>
						<div className="indicator-simple-value"> {stockdata.昨收}</div>
					</div>
					<div className="indicator-simple-div">
						<div className="indicator-simple-key">最高</div>
						<div className="indicator-simple-value"> {stockdata.最高}</div>
					</div>
					<div className="indicator-simple-div">
						<div className="indicator-simple-key">最低</div>
						<div className="indicator-simple-value"> {stockdata.最低}</div>
					</div>
					<div className="indicator-simple-div">
						<div className="indicator-simple-key">成交额</div>
						<div className="indicator-simple-value"> {changeUnit(stockdata.成交额)}</div>
					</div>
					<div className="indicator-simple-div">
						<div className="indicator-simple-key">成交均量（三月）</div>
						<div className="indicator-simple-value"> {changeUnit(stockdata["成交均量(3月)"])}</div>
					</div>
					<div className="indicator-simple-div">
						<div className="indicator-simple-key">振幅</div>
						<div className="indicator-simple-value"> {stockdata.振幅}</div>
					</div>
					<div className="indicator-simple-div">
						<div className="indicator-simple-key">52周最高</div>
						<div className="indicator-simple-value"> {stockdata["52周最高"]}</div>
					</div>

					</>
					
					}
					
				
				</div>
			</div>
		</div>
	)
}