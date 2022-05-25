import React from "react";
import { Badge, Button } from "react-bootstrap";
import { Row, Col, Container } from "react-bootstrap";
import { Image } from "react-bootstrap";
import "./introduce.css";
import useWindowDimensions from "../../utils/sizewindow";

export default function Introduce() {
  const { width, height } = useWindowDimensions();

  return (
    <div className="introduce">
      <div className="introduce-content gray-bg">
        <div className="introduce-mark">
          <div className="top-image">
            <Image
              src="/tournament/Group 110.png"
              style={{ width: "36px", height: "36px" }}
            />
          </div>
          <div className="center-content">
            大赛旨在为全球华人大学生提供知识实践以及投资学习的平台支持，鼓励大学生以知促行，以行促知，培养创新精神与实践能力，推动金融创新人才培养机制的建立。大赛愿景希望联结全球未来华人精英，共同建设祖国金融未来。
          </div>
          <div className="bottom-image">
            <Image
              src="/tournament/Group 172.png"
              style={{ width: "36px", height: "36px" }}
            />
          </div>
        </div>
      </div>
      {/* 比赛流程 */}
      <div className="match white-bg">
        <div className="left">
          <div className="match-text">比赛流程</div>
          <div className="left-round">
            <div className="round">
              <div className="time-wrapper">
                <div className="month">6.8</div>
                <div className="year">2022</div>
              </div>
            </div>
            <div className="left-line"></div>
            <div className="icon-wrapper">
              <Image
                src="/tournament/Group 142.png"
                style={{ width: "24px", height: "24px" }}
              />
            </div>
          </div>

          <div className="match-end">
            <div className="match-end-text">团队组建截止</div>
          </div>

          <div className="flex-end" style={{ marginTop: "145px" }}>
            <div className="month">6.20</div>
            <div className="right-line bg"></div>
            <div className="icon-wrapper">
              <Image
                src="/tournament/Group 142.png"
                style={{ width: "24px", height: "24px" }}
              />
            </div>
          </div>

          <div className="match-end" style={{ marginTop: "131px" }}>
            <div className="match-end-text">初赛结束，复赛开始</div>
			<div className="match-end-content">
			  <div>
			    指标分数排名前100名的选手进入复赛，并提交一份逻辑报告(逻辑报告模版将于复赛开始时公布)
			  </div>
			</div>
          </div>
		  

          <div className="flex-end" style={{ marginTop: "143px" }}>
            <div className="month">9.16</div>
            <div className="right-line bg"></div>
            <div className="icon-wrapper">
              <Image
                src="/tournament/Group 142.png"
                style={{ width: "24px", height: "24px" }}
              />
            </div>
          </div>

          <div className="match-end" style={{ marginTop: "161px" }}>
            <div className="match-end-text">决赛（全网直播）</div>
            <div className="match-end-content">
              <div>
                决赛选手将进行10-20分钟线上投资报告展示（具体展示模版将在初赛结束后公布），评委对其专业能力，以及综合素质进行打分。最终将结合初赛的指标分数（权重40%）以及决赛评委分数（权重60%）作出最终排名。
              </div>
            </div>
          </div>
        </div>

        <div className="right">
          <div className="match-begin">
            <div className="right-line"></div>
            <div className="match-begin-text">赛事报名通道开放</div>
          </div>

          <div className="flex-start" style={{ marginTop: "222px" }}>
            <div className="icon-wrapper-left">
              <Image
                src="/tournament/Group 142.png"
                style={{ width: "24px", height: "24px" }}
              />
            </div>
            <div className="right-line bg"></div>
            <div className="month" style={{ paddingLeft: "16px" }}>
              6.18
            </div>
          </div>

          <div className="finals-name">
            <div className="right-line"></div>
            <div className="finals-name-container">
              <div className="match-end-text" style={{ textAlign: "left" }}>
                初赛开始：指标分数
              </div>
              <div className="match-end-content" style={{ textAlign: "left" }}>
                <div>
					指标分数将根据3个月的“综合收益率”以及“夏普比率”两个指标进行打分
                </div>
              </div>
            </div>
          </div>

          <div className="flex-start" style={{ marginTop: "120px" }}>
            <div className="icon-wrapper-left">
              <Image
                src="/tournament/Group 142.png"
                style={{ width: "24px", height: "24px" }}
              />
            </div>
            <div className="right-line bg"></div>
            <div className="month" style={{ paddingLeft: "16px" }}>
              9.9
            </div>
          </div>

		  <div className="finals-name" style={{marginTop: "131px"}}>
		    <div className="right-line"></div>
		    <div className="finals-name-container">
		      <div className="match-end-text" style={{ textAlign: "left" }}>
		        复赛结束，公布决赛候选名单
		      </div>
		      <div className="match-end-content" style={{ textAlign: "left" }}>
		        <div>
					UFA评委将综合逻辑报告，以及指标分数筛选出15名入围决赛选手。
		        </div>
		      </div>
		    </div>
		  </div>
		  
		  

          <div className="flex-start" style={{ marginTop: "143px" }}>
            <div className="icon-wrapper-left">
              <Image
                src="/tournament/Group 142.png"
                style={{ width: "24px", height: "24px" }}
              />
            </div>
            <div className="right-line bg"></div>
            <div className="left-round" style={{ marginTop: "0px" }}>
              <div className="round">
                <div className="time-wrapper" style={{ padding: width > 1350 ? "80px 20px" : width > 900 ? '70px 10px' : '60px 15px' }}>
                  <div className="month">9.24</div>
                  <div className="year">2022</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 比赛奖项 */}

      <div className="match-awards-container gray-bg">
        <div className="awards-content">
          <div className="awards-title-wrapper">
            <div className="awards-title">比赛奖项</div>
            <div className="awards-text">
              量化赛道与主观多头赛道分开进行排名和奖励
            </div>
          </div>

          <div 
			className="awards-card-wrapper"
			style={{
				justifyContent:width > 1400?"space-between":"space-around"
			}}>
		  
            <div 
				className= {width < 559 ? "awards-card-container-small":"awards-card-container"}
			>
              <div className="awards-card">
                <div className="ranking awards-center">第一名</div>
                <div className="awards-pic awards-center">
                  <Image
                    src="/homeCutout/10086.png"
                    style={{ width: "220px", height: "220px" }}
                  />
                </div>

                <div className="award-content awards-center">
                  <div>团队获得10000元人民币</div>
                  <div>每位团员获得官方制定的冠军证书 </div>
                  <div>中信证券实习机会</div>
                </div>
              </div>
            </div>

            <div
			  className= {width < 559 ? "awards-card-container-small":"awards-card-container"}
            >
              <div className="awards-card">
                <div className="ranking awards-center">第二名</div>
                <div className="awards-pic awards-center">
                  <Image
                    src="/homeCutout/10086.png"
                    style={{ width: "220px", height: "220px" }}
                  />
                </div>

                <div className="award-content awards-center">
                  <div>团队获得8500元人民币</div>
                  <div>每位团员获得官方制定的冠军证书 </div>
                  <div>中信证券实习机会</div>
                </div>
              </div>
            </div>
			

            <div
				className= {width < 559 ? "awards-card-container-small":"awards-card-container"}
			>
              <div className="awards-card">
                <div className="ranking awards-center">第三名</div>
                <div className="awards-pic awards-center">
                  <Image
                    src="/homeCutout/10086.png"
                    style={{ width: "220px", height: "220px" }}
                  />
                </div>

                <div className="award-content awards-center">
                  <div>团队获得7000元人民币</div>
                  <div>每位团员获得官方制定的冠军证书 </div>
                  <div>中信证券实习机会</div>
                </div>
              </div>
            </div>
          </div>
		  
		  <div
			className="awards-center flex-center"
		  >
			<div 
				className= {width < 559 ? "awards-card-container-small":"awards-card-container"}
			>
			  <div className="awards-card">
			    <div className="ranking awards-center">第五至十名</div>
			    <div className="awards-pic awards-center">
			      <Image
			        src="/homeCutout/10086.png"
			        style={{ width: "220px", height: "220px" }}
			      />
			    </div>
			
			    <div className="award-content awards-center">
			      <div>团队获得6000元人民币</div>
			      <div>每位团员获得官方制定的冠军证书 </div>
			      <div>中信证券实习机会</div>
			    </div>
			  </div>
			</div>
		  </div>


          <div className="other-awards">
            <Image
              src="/tournament/Group 208.png"
              style={{ width: "87%", height: "100%" }}
            />
          </div>

          <div className="awards-card-wrapper" style={{marginTop: "60px",justifyContent:"center"}}>
            <div
              className="awards-card-container"
              style={{ margin: "0px 60px" }}
            >
              <div className="awards-card">
                <div className="ranking awards-center">模范经纪人</div>
                <div className="awards-pic awards-center">
                  <Image
                    src="/homeCutout/10086.png"
                    style={{ width: "220px", height: "220px" }}
                  />
                </div>

                <div className="award-content awards-center">
                  <div>团队获得5000元人民币</div>
                  <div>每位团员获得官方制定的冠军证书 </div>
                  <div>中信证券实习机会</div>
                </div>
              </div>
            </div>

          </div>

          <div className="tips">
            注：所有奖项由UFA与中信证券官方签署制定，旨在为参赛选手提供背景提升，学习成长的机会。
          </div>
        </div>
      </div>
    </div>
  );
}
