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
		<>
			<div className="indicator-professional">
				<div className="indicator-professional-div">
					<div className="indicator-professional-title">关键指标</div>
				</div>
				<div className="professional-line"></div>
				<div>
					{Object.keys(data).map((obj,idx)=>(
						<div className="indicator-professional-div" key={idx}>
							<div className="indicator-professional-key">{obj}</div>
							<div className="indicator-professional-value">{data[obj]}</div>
						</div>
					))
					}
				</div>
			</div>
		</>
	)
}