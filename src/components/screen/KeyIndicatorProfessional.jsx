

import './KeyIndicator.css'

export default function KeyIndicators(){
	return(
		<div>
			<div className="indicator-professional">
				<div className="indicator-professional-div">
					<div className="indicator-professional-title">关键指标</div>
				</div>
				<div className="professional-line"></div>
				<div>
					<div className="indicator-professional-div">
						<div className="indicator-professional-key">开盘</div>
						<div className="indicator-professional-value">46.25</div>
					</div>
					<div className="indicator-professional-div">
						<div className="indicator-professional-key">昨收</div>
						<div className="indicator-professional-value">46.25</div>
					</div>
					<div className="indicator-professional-div">
						<div className="indicator-professional-key">最高</div>
						<div className="indicator-professional-value">46.25</div>
					</div>
					<div className="indicator-professional-div">
						<div className="indicator-professional-key">最低</div>
						<div className="indicator-professional-value">46.25</div>
					</div>
					<div className="indicator-professional-div">
						<div className="indicator-professional-key">成交额</div>
						<div className="indicator-professional-value">1.17亿</div>
					</div>
					<div className="indicator-professional-div">
						<div className="indicator-professional-key">成交均量（三月）</div>
						<div className="indicator-professional-value">35.91万</div>
					</div>
					<div className="indicator-professional-div">
						<div className="indicator-professional-key">振幅</div>
						<div className="indicator-professional-value">46.25%</div>
					</div>
					<div className="indicator-professional-div">
						<div className="indicator-professional-key">52周最高</div>
						<div className="indicator-professional-value">46.25</div>
					</div>
					<div className="indicator-professional-div">
						<div className="indicator-professional-key">52周最低</div>
						<div className="indicator-professional-value">46.25</div>
					</div>
				</div>
			</div>
		</div>
	)
}