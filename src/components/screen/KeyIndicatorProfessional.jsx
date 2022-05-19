import data from '../../static/indicator.json'
import './KeyIndicator.css'

export default function KeyIndicators(){
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