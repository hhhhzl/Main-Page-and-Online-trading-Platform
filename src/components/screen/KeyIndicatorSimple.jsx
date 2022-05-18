import axios from 'axios';
import data from '../../static/indicator.json'
import './KeyIndicator.css'

export default function KeyIndicators(){
	return(
		<div>
			<div style={{width:"100%"}}>
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