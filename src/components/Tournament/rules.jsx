import Image from "react-bootstrap/Image";
import "./rules.css";
import { React, useState, useEffect } from "react";

const Rules = () => {
	const [current, setCurrent] = useState(0);
	const changeCurrent = (item) => {
	  setCurrent(item);
	};
	
	return (
	  <div>
		<div className="rules">
			<div className="rules-title">参赛详情</div>
			<div className="rules-top-30">
				<div>
					<div className="rules-title-two">一、参赛对象：</div>
					<div className="rules-centent">报名选手必须为在读本科生或研究生；入围决赛的选手需向官方提供所在大学就读的相关证明（例如：学生证，校园卡，录取通知书等）。</div>
				</div>
				<div className="rules-top-20">
					<div className="rules-title-two">二、队伍组建：</div>
					<div className="rules-centent">比赛可由个人或团队（1-4人）形式进行报名。若团队人数大于2人，所有队员共享一个团队赛事账户（赛事期间需自行做好分工）。</div>
				</div>
				<div className="rules-top-20">
					<div className="rules-title-two">三、团队成员限制：</div>
					<div className="rules-centent">每位参赛选手只能创立/加入一个赛事队伍。</div>
				</div>
				<div className="rules-top-20">
					<div className="rules-title-two">四、赛道选择：</div>
					<div className="rules-centent">赛事分为量化赛道和主观多头赛道。每位参赛选手只能选择其中一个赛道进行报名。</div>
				</div>
				<div className="rules-top-20">
					<div className="rules-title-two">五、报名赛事：</div>
					<div className="rules-centent">详情见上方“ <span style={{color: "blue"}}>如何报名</span> ”。 </div>
				</div>
				<div className="rules-top-20">
					<div className="rules-title-two">六、操作平台：</div>
					<div className="rules-centent">赛事报名成功后，个人/团队参赛者将在“交易平台”获得一份赛事账户，所有操作均在“交易平台”完成。</div>
				</div>
			</div>
			<div className="rules-p-two">
				<div className="rules-title">交易规则</div>
				<div className="rules-top-30">
					<div>
						<div className="rules-title-two">初始资金：</div>
						<div className="rules-centent">200万人民币</div>
					</div>
					<div className="rules-top-20">
						<div className="rules-title-two">交易规则：</div>
						<div className="rules-centent">比赛遵循A股正常交易规则，并允许交易港股通（详细交易规则参考A股交易规则）。</div>
					</div>
					<div className="rules-top-20">
						<div className="rules-title-two">交易限制：</div>
						<div className="rules-centent">不允许交易ETF、债券、期权期货等衍生品。</div>
					</div>
					<div className="rules-top-20">
						<div className="rules-title-two">持仓限制：</div>
						<div className="rules-centent">每支证券买入时不得超过账户总资产的25%。</div>
					</div>
					<div className="rules-top-20">
						<div className="rules-title-two">涨/跌停板：</div>
						<div className="rules-centent">待补充</div>
					</div>
				</div>
			</div>
			<div className="rules-p-two">
				<div className="rules-title">财经洞悉</div>
			</div>
			<div className="rules-top-30">
				<div className="rules-centent">参赛个人或团队需在赛事期间提交至少3份研报模块，未交满选手则无法获得初赛入围资格。注：研报模块质量不会被进行评分，且不影响综合分数。详情见上方“<span style={{color: "blue"}}>财经洞悉</span>”。</div>
			</div>
			<div className="rules-p-two">
				<div className="rules-title">评判规则</div>
			</div>
			<div className="rules-p-two" style={{display:"flex"}}>
				<div style={{flex:"1"}}>
					<div style={{textAlign:"center"}}>
						<div className="judge-rules-title">初赛</div>
						<div className="judge-rules-time">2022年6月20日</div>
						<div style={{marginTop:"16px"}}>
							<Image src="/tournament/Group 142.png"></Image>
							<div className="horizontal-line"></div>
							<div className="vertical-line"></div>
						</div>
						<div className="judge-rules-subtitle" style={{marginTop:"16px"}}>指标分数</div>
					</div>
					<div className="judge-rules-li" style={{marginTop:"14px"}}>
						<div>
							<Image src="/tournament/Ellipse 11.png"></Image>
						</div>
						<div className="judge-rules-content" style={{marginLeft:"6px",width: "300px"}}>初赛将围绕“收益率”及“夏普指数”进行加权打分</div>
					</div>
					<div className="judge-rules-li" style={{marginTop:"12px"}}>
						<div>
							<Image src="/tournament/Ellipse 11.png"></Image>
						</div>
						<div className="judge-rules-content" style={{marginLeft: "6px",width: "300px"}}>初赛将围绕“收益率”及“夏普指数”进行加权打分</div>
					</div>
					<div>
						<div 
							className="show-details"
							onMouseEnter={() => changeCurrent(1)}
							onMouseLeave={() => changeCurrent(0)}>展示详情</div>
						<div style={{
							width:"381px",
							background: "#FFFFFF",
							position: "absolute",
							margin: "-236px 0 0 -41px",
							display:current==1?"flex":"none"
						}}>
							<Image src="/tournament/Group 771.png" style={{padding: "36px 48px"}}></Image>
						</div>
						
					</div>
					
				</div>
				
				<div style={{flex:"1"}}>
					<div style={{textAlign:"center"}}>
						<div className="judge-rules-title">复赛</div>
						<div className="judge-rules-time">2020年9月2日</div>
						<div style={{marginTop:"16px"}}>
							<Image src="/tournament/Group 142.png"></Image>
							<div className="horizontal-line"></div>
							<div className="vertical-line"></div>
						</div>
						<div className="judge-rules-subtitle" style={{marginTop:"16px"}}>主观报告筛选</div>
					</div>
					<div className="judge-rules-li" style={{marginTop:"14px"}}>
						<div>
							<Image src="/tournament/Ellipse 11.png"></Image>
						</div>
						<div className="judge-rules-content" style={{marginLeft:"6px",width: "300px"}}>指标分数排名前100名的选手入围第二轮主观筛选，并提交一份概略的投资报告。</div>
					</div>
					<div className="judge-rules-li" style={{marginTop:"12px"}}>
						<div>
							<Image src="/tournament/Ellipse 11.png"></Image>
						</div>
						<div className="judge-rules-content" style={{marginLeft: "6px",width: "300px"}}>UFA评委将结合指标分数以及投资报告质量选出15名决赛入围选手。</div>
					</div>
					<div className="annotations">*投资报告的具体框架将在初赛结束时公布。</div>
					<div>
						<div 
							className="show-details"
							onMouseEnter={() => changeCurrent(2)}
							onMouseLeave={() => changeCurrent(0)}>展示详情</div>
						<div
							style={{
								width: "381px",
								background: "#FFFFFF",
								margin: "-232px 0 0 -30px",
								position: "absolute",
								display:current==2?"flex":"none",
								flexDirection:"column"
							}}
						>
							<div style={{padding: "36px 48px 12px 48px"}}>
								<span className="pop-up-text">量化投资赛道：</span>评委将结合选手的因子挖掘、选股策略以及综合知识储备三个维度对投资 报告进行评分。
							</div>
							<div style={{padding: "0 48px 36px 48px"}}>
								<span className="pop-up-text">主观多头赛道：</span>评委将结合选手的研究能力、投资管理能力以及综合知识储备三个维度对 投资报告进行评分。
							</div>
						</div>
					</div>
				</div>
				
				<div style={{flex:"1"}}>
					<div style={{textAlign:"center"}}>
						<div className="judge-rules-title">决赛</div>
						<div className="judge-rules-time">2020年9月24日</div>
						<div style={{marginTop:"16px"}}>
							<Image src="/tournament/Group 142.png"></Image>
							<div className="horizontal-line"></div>
							<div className="vertical-line"></div>
						</div>
						<div className="judge-rules-subtitle" style={{marginTop:"16px"}}>PPT线上展示</div>
					</div>
					<div className="judge-rules-li" style={{marginTop:"14px"}}>
						<div>
							<Image src="/tournament/Ellipse 11.png"></Image>
						</div>
						<div className="judge-rules-content" style={{marginLeft:"6px",width: "300px"}}>决赛入围选手/团队将于9月17日进行10分钟PPT线上展示，以及5分钟的评委互动环节。</div>
					</div>
					<div className="judge-rules-li" style={{marginTop:"12px"}}>
						<div>
							<Image src="/tournament/Ellipse 11.png"></Image>
						</div>
						<div className="judge-rules-content" style={{marginLeft: "6px",width: "300px"}}>评委将结合选手的专业能力以及综合能力进行评分，给予决赛分数。</div>
					</div>
					<div className="judge-rules-li" style={{marginTop:"12px"}}>
						<div>
							<Image src="/tournament/Ellipse 11.png"></Image>
						</div>
						<div className="judge-rules-content" style={{marginLeft: "6px",width: "300px"}}>最终排名将基于初赛指标分数（40%）+ 决赛分数（60%）。</div>
					</div>
					<div className="annotations">*PPT的展示具体框架将在决赛前夕公布</div>
					<div>
						<div 
							className="show-details"
							onMouseEnter={() => changeCurrent(3)}
							onMouseLeave={() => changeCurrent(0)}>展示详情
						</div>
						<div
							style={{
								width: "381px",
								background: "#FFFFFF",
								margin: "-232px 0 0 -30px",
								position: "absolute",
								display:current==3?"flex":"none",
								flexDirection:"column"
							}}
						>
							<div style={{padding: "36px 48px 12px 48px"}}>
								<span className="pop-up-text">量化投资赛道：</span>评委将结合选手的因子挖掘、选股策略以及综合知识储备三个维度对投资 报告进行评分。
							</div>
							<div style={{padding: "0 48px 36px 48px"}}>
								<span className="pop-up-text">主观多头赛道：</span>评委将结合选手的研究能力、投资管理能力以及综合知识储备三个维度对 投资报告进行评分。
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	  </div>
	);
	
	
}




export default Rules;
