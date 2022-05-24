import './RulesModual.css'

export default function RulesModual(){
	return(
		<div style={{width:"44.584%"}}>
			<div
				style={{
					padding: "36px 0 0 48px"
				}}
			>
				<div className="rules-modual-title">交易规则</div>
				<div>
					<div style={{paddingTop:"12px"}}>
						<div className="rules-modual-label">初始资金：</div>
						<div className="rules-modual-value">200万人民币</div>
					</div>
					<div style={{paddingTop:"12px"}}>
						<div className="rules-modual-label">交易规则：</div>
						<div className="rules-modual-value">比赛遵循A股正常交易规则，并允许交易港股通（详细交易规则参考A股交易规则）。</div>
					</div>
					<div style={{paddingTop:"12px"}}>
						<div className="rules-modual-label">交易限制：</div>
						<div className="rules-modual-value">不允许交易ETF、债券、期权期货等衍生品。</div>
					</div>
					<div style={{paddingTop:"12px"}}>
						<div className="rules-modual-label">持仓限制：</div>
						<div className="rules-modual-value">每支证券买入时不得超过账户总资产的25%。</div>
					</div>
					<div style={{paddingTop:"12px"}}>
						<div className="rules-modual-label">涨/跌停板：</div>
						<div className="rules-modual-value">待补充</div>
					</div>
				</div>
				<div className="rules-modual-title" style={{paddingTop:"24px"}}>财经洞悉</div>
				<div>
					<div style={{paddingTop:"12px"}}>
						<div className="rules-modual-value">
							参赛个人或团队需在赛事期间提交至少3份研报模块，未交满选手则无法获得初赛入围资格。 
							<br/>
							注: 研报模块质量不会被进行评分，且不影响综合分数。提交财经洞悉请到上方“财经洞悉”。
						</div>
					</div>
				</div>
				<div className="rules-modual-title" style={{paddingTop:"24px"}}>评判规则</div>
				<div>
					<div style={{paddingTop:"12px"}}>
						<div className="rules-modual-value">
							赛事分为初赛和决赛两个评分阶段：
							<br/>
							比赛最终按照初赛与决赛加权后的综合分数进行排名。
						</div>
					</div>
				</div>
				<div className="rules-modual-subtitle " style={{paddingTop:"24px"}}>初赛:</div>
				<div>
					<div>
						<div className="rules-modual-value">
							初赛将围绕指标分数“收益率”及“夏普指数”进行加权打分。
						</div>
					</div>
				</div>
				<div className="rules-modual-subtitle " style={{paddingTop:"24px"}}>复赛:</div>
				<div>
					<div>
						<div className="rules-modual-value">
							初赛分数排名前100名的选手入围复赛主观筛选，并提交一份概略的投资报告。UFA评委将结合指标分数以及投资报告质量选出15名决赛入围选手。
						</div>
					</div>
				</div>
				<div className="rules-modual-subtitle " style={{paddingTop:"24px"}}>决赛:</div>
				<div>
					<div>
						<div className="rules-modual-value">
							决赛入围选手/团队将于9月17日进行10分钟PPT线上展示，以及5分钟的评委互动环节。评委将结合选手的专业能力以及综合能力进行评分，给予决赛分数。
						</div>
						<div className="rules-modual-value">
							最终排名将基于初赛指标分数(40%)+ 决赛分数(60%)
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}