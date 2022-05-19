import React, { useEffect,useState } from 'react';
import axios from 'axios';
import './KeyIndicator.css'

export default function KeyIndicators(){
	const [data, setData] = useState('')
	const [extend, setExtend] = useState(true)
	
	useEffect(()=>{
		if(extend){
			getIndicator()
		}
	})
	
	const getIndicator= () => {
	    return axios.get('http://82.157.18.223:10987/api/live/ticker?symbol=SH.000001')
		.then(function (response) {
	        console.log(response.data.data)
			setData(response.data.data)
			setExtend(false)
	      })
	      .catch(function (error) {
	        console.log(error);
	      });
	}
	
	
	return(
		<div>
			<div style={{width:"39.584%"}}>
				<div className="indicator-simple-title">关键指标</div>
				<div className="simple-line"></div>
				<div className="indicator-simple">
					{Object.keys(data).map((obj,idx)=>(
						<div className="indicator-simple-div" key={idx}>
							<div className="indicator-simple-key">{obj}</div>
							<div className="indicator-simple-value"> {data[obj]}</div>
						</div>
					))
					}
				
				</div>
			</div>
		</div>
	)
}