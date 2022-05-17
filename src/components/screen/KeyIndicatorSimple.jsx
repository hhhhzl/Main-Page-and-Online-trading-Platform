

import './KeyIndicator.css'

export default function KeyIndicators(){
	return(
		<div>
			<div style={{width:"39.584%"}}>
				<div className="indicator-simple-title">关键指标</div>
				<div className="simple-line"></div>
				<div className="indicator-simple">
					<div className="indicator-simple-div">
						<div className="indicator-simple-key">开盘</div>
						<div className="indicator-simple-value">46.25</div>
					</div>
					<div className="indicator-simple-div">
						<div className="indicator-simple-key">昨收</div>
						<div className="indicator-simple-value">46.25</div>
					</div>
					<div className="indicator-simple-div">
						<div className="indicator-simple-key">最高</div>
						<div className="indicator-simple-value">46.25</div>
					</div>
					<div className="indicator-simple-div">
						<div className="indicator-simple-key">最低</div>
						<div className="indicator-simple-value">46.25</div>
					</div>
					<div className="indicator-simple-div">
						<div className="indicator-simple-key">成交额</div>
						<div className="indicator-simple-value">1.17亿</div>
					</div>
					<div className="indicator-simple-div">
						<div className="indicator-simple-key">成交均量（三月）</div>
						<div className="indicator-simple-value">35.91万</div>
					</div>
					<div className="indicator-simple-div">
						<div className="indicator-simple-key">52周最高</div>
						<div className="indicator-simple-value">46.25</div>
					</div>
					<div className="indicator-simple-div">
						<div className="indicator-simple-key">52周最低</div>
						<div className="indicator-simple-value">46.25</div>
					</div>
				</div>
			</div>
		</div>
	)
}