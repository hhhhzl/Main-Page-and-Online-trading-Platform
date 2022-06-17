import React, { useEffect, useState } from "react";
import { Badge, Button } from "react-bootstrap";
import { Row, Col, Container } from "react-bootstrap";
import { Image } from "react-bootstrap";
import "./introduce.css";
import useWindowDimensions from "../../utils/sizewindow";
import Fade from "react-reveal/Fade";

export default function Introduce({ changeEventKey }) {
  const { width, height } = useWindowDimensions();
  const [tobottom, setTobottom] = useState(true);
  const [bodyscrollrdTop, setbodyscrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (
        document.documentElement.scrollTop > bodyscrollrdTop ||
        document.body.scrollTop > bodyscrollrdTop
      ) {
        setbodyscrollTop(
          document.documentElement.scrollTop || document.body.scrollTop
        );
      }
    };
    console.log(bodyscrollrdTop);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [bodyscrollrdTop]);

  return (
    <>
      <Fade top>
        <div
          style={{
            position: "fixed",
            zIndex: 10,
            width: width > 800 ? "1px" : "",
            height: "662px",
            background: `linear-gradient(to top, #E5E8EE ${
              ((bodyscrollrdTop / (width / 2.97)) * 100).toString() + "%"
            }, rgba(255, 255, 255, 0.5) ${
              ((bodyscrollrdTop / (width / 2.97)) * 100).toString() + "%"
            })`,
            top: "64px",
            left: width / 2 - 1,
            className: "animated bounceInDown",
          }}
        ></div>
      </Fade>
      <div className="introduce" style={{ width: width }}>
        <div className="introduce-content gray-bg">
          <div
            style={{
              position: "relative",
              width: width,
              height: "48px",
              background: "#F5F6F8",
            }}
          ></div>
          <div className="line-container">
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
          <div
            style={{
              position: "relative",
              width: "100%",
              height: "48px",
              background: "#F5F6F8",
            }}
          ></div>
        </div>
        {/* 比赛流程 */}
        <div className="match white-bg">
          <div style={{ display: "flex" }}>
            <div className="left">
              <div className="match-text">比赛流程</div>

              <div className="match-ranking">
                <Image
                  src="/tournament/ranking@2x.png"
                  style={{
                    width: "81.1667%",
                    height: "8.8334%",
                    minHeight: "37px",
                    minWidth: "340px",
                  }}
                />
              </div>

              <Fade bottom when={bodyscrollrdTop > 700}>
                <div className="left-round">
                  <div className="round">
                    <div className="time-wrapper">
                      <div className="month">7.4</div>
                      {/*<div className="year">2022</div>*/}
                    </div>
                  </div>
                  <div className="left-line"></div>
                  <div className="icon-wrapper">
                    <Image
                      src="/tournament/Group 142@2x.png"
                      style={{ width: "24px", height: "24px" }}
                    />
                  </div>
                </div>
              </Fade>
              <Fade bottom when={bodyscrollrdTop > 1000}>
                <div className="match-end">
                  <div className="match-end-text">初赛开始 (指标分数)</div>
                </div>
              </Fade>
              <Fade bottom when={bodyscrollrdTop > 1200}>
                <div className="flex-end" style={{ marginTop: "145px" }}>
                  <div className="month">9.30</div>
                  <div className="right-line bg"></div>
                  <div className="icon-wrapper">
                    <Image
                      src="/tournament/Group 142@2x.png"
                      style={{ width: "24px", height: "24px" }}
                    />
                  </div>
                </div>
              </Fade>

              <Fade bottom when={bodyscrollrdTop > 1400}>
                <div
                  className="match-end"
                  style={{
                    marginTop: "180px",
                    justifyContent: "flex-end",
                    flexDirection: "row",
                  }}
                >
                  <div className="match-end-text" style={{ maxWidth: "500px" }}>
                    <div>复赛提交截止</div>
                  </div>
                  {/* <div className="match-end-content">
                    <div>
                      指标分数排名前100名的选手进入复赛，并提交一份逻辑报告(逻辑报告模版将于复赛开始时公布)
                    </div>
                  </div> */}
                </div>
              </Fade>

              <Fade bottom when={bodyscrollrdTop > 1700}>
                <div className="flex-end" style={{ marginTop: "143px" }}>
                  <div className="month">10.14</div>
                  <div className="right-line bg"></div>
                  <div className="icon-wrapper">
                    <Image
                      src="/tournament/Group 142@2x.png"
                      style={{ width: "24px", height: "24px" }}
                    />
                  </div>
                </div>
              </Fade>

              <Fade bottom when={bodyscrollrdTop > 2000}>
                <div
                  className="match-end"
                  style={{
                    marginTop: "275px",
                    flexDirection: "row",
                    justifyContent: "flex-end",
                  }}
                >
                  <div className="match-end-text" >
                    决赛队伍线上报告展示 (全网直播)
                  </div>
                  {/* <div className="match-end-content">
                    <div>
                      决赛选手将进行10-20分钟线上投资报告展示（具体展示模版将在初赛结束后公布），评委对其专业能力，以及综合素质进行打分。最终将结合初赛的指标分数（权重40%）以及决赛评委分数（权重60%）作出最终排名。
                    </div>
                  </div> */}
                </div>
              </Fade>
            </div>
            <div className="right" style={{borderLeft: width <= 800 ? "1px solid #E5E8EE" : ''}}>
              <Fade bottom when={bodyscrollrdTop > 700}>
                <div className="match-begin">
                  <div className="right-line"></div>
                  <div className="match-begin-text">报名截止</div>
                </div>
              </Fade>

              <Fade bottom when={bodyscrollrdTop > 1000}>
                <div className="flex-start six-one">
                  <div className="icon-wrapper-left">
                    <Image
                      src="/tournament/Group 142@2x.png"
                      style={{ width: "24px", height: "24px" }}
                    />
                  </div>
                  <div className="right-line bg"></div>
                  <div className="month" style={{ paddingLeft: "16px" }}>
                    7.5
                  </div>
                </div>
              </Fade>
              <Fade bottom when={bodyscrollrdTop > 1200}>
                <div className="finals-name">
                  <div className="right-line"></div>
                  <div className="finals-name-container">
                    <div
                      className="match-end-text"
                      style={{ textAlign: "left" }}
                    >
                      <div>初赛结束，复赛开始 (投资报告)</div>
                      <div style={{fontSize: "16px",
                        color: "#3D3F4E",
                        fontWeight: "400",
                        lineHeight: "28px",
                        fontFamily: "Songti SC-Regular, Songti SC",
                        marginTop:"12px"
                      }}>指标分数前100支队伍晋级复赛</div>
                    </div>
                    {/* <div
                      className="match-end-content"
                      style={{ textAlign: "left" }}
                    >
                      <div>
                        指标分数将根据3个月的“综合收益率”以及“夏普比率”两个指标进行打分
                      </div>
                    </div> */}
                  </div>
                </div>
              </Fade>
              <Fade bottom when={bodyscrollrdTop > 1400}>
                <div className="flex-start nine-point-nine">
                  <div className="icon-wrapper-left ">
                    <Image
                      src="/tournament/Group 142@2x.png"
                      style={{ width: "24px", height: "24px" }}
                    />
                  </div>
                  <div className="right-line bg"></div>
                  <div className="month" style={{ paddingLeft: "16px" }}>
                    10.7
                  </div>
                </div>
              </Fade>
              <Fade bottom when={bodyscrollrdTop > 1700}>
                <div className="finals-name" style={{ marginTop: "125px" }}>
                  <div className="right-line"></div>
                  <div className="finals-name-container">
                    <div
                      className="match-end-text"
                      style={{ textAlign: "left", maxWidth: "327px" }}
                    >
                      <div>复赛结束，公布决赛名单</div>
                      <div style={{fontSize: "16px",
                        color: "#3D3F4E",
                        fontWeight: "400",
                        lineHeight: "28px",
                        fontFamily: "Songti SC-Regular, Songti SC",
                        marginTop:"12px"
                      }}>双赛道各有8支队伍晋级决赛</div>
                    </div>
                    {/* <div
                      className="match-end-content"
                      style={{ textAlign: "left" }}
                    >
                      <div>
                        UFA评委将综合逻辑报告，以及指标分数筛选出15名入围决赛选手。
                      </div>
                    </div> */}
                  </div>
                </div>
              </Fade>
              <Fade bottom when={bodyscrollrdTop > 2000}>
                <div
                  className="flex-start nine-two"
                  style={{ marginTop: "143px" }}
                >
                  <div className="icon-wrapper-left">
                    <Image
                      src="/tournament/Group 142@2x.png"
                      style={{ width: "24px", height: "24px" }}
                    />
                  </div>
                  <div className="right-line bg"></div>
                  <div className="left-round" style={{ marginTop: "0px" }}>
                    <div className="round">
                      <div
                        className="time-wrapper"
                        style={{
                          padding:
                            width > 1350
                              ? "105px 50px"
                              : width > 900
                              ? "90px 50px"
                              : "80px 50px",
                        }}
                      >
                        <div className="month">10.29</div>
                        {/*<div className="year">2022</div>*/}
                      </div>
                    </div>
                  </div>
                </div>
              </Fade>
            </div>
          </div>
          <div
            className="match-bottom-wrapper"
            style={{ zIndex: 999, padding: "8px 0px" }}
          >
            <span className="match-bottom-details">详情请见</span>
            <div
              className="match-bottom-rules"
              onClick={() => changeEventKey(2)}
            >
              赛事规则
            </div>
          </div>
        </div>

        {/* 比赛奖项 */}
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "96px",
            background: "#F5F6F8",
          }}
        ></div>
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
                justifyContent: width < 850 ? "space-around" : "space-between",
              }}
            >
              <div
                className={
                  width < 559
                    ? "awards-card-container-small"
                    : "awards-card-container"
                }
              >
                <div className="awards-card">
                  <div className="ranking awards-center">第一名</div>
                  <div className="awards-pic awards-center">
                    <Image
                      src="/homeCutout/赛事介绍获奖.png"
                      style={{ width: "178px", height: "178px" }}
                    />
                  </div>

                  <div className="award-content awards-center">
                    <div>团队获得10000元人民币</div>
                    <div>中信证券实习机会</div>
                    <div>中信证券飞鹰计划名额（含结业证书）</div>
                    <div>埔思学院直接录取</div>
                    <div>由中信证券认证的冠军证书</div>
                    
                  </div>
                </div>
              </div>

              <div
                className={
                  width < 559
                    ? "awards-card-container-small"
                    : "awards-card-container"
                }
              >
                <div className="awards-card">
                  <div className="ranking awards-center">第二名</div>
                  <div className="awards-pic awards-center">
                    <Image
                      src="/homeCutout/赛事介绍获奖.png"
                      style={{ width: "178px", height: "178px" }}
                    />
                  </div>

                  <div className="award-content awards-center">
                    <div>团队获得8000元人民币</div>
                    <div>中信证券实习/面试机会</div>
                    <div>中信证券飞鹰计划名额（含结业证书）</div>
                    <div>埔思学院终面机会</div>
                    <div>由中信证券认证的亚军证书</div>
                    
                  </div>
                </div>
              </div>

              <div
                className={
                  width < 559
                    ? "awards-card-container-small"
                    : "awards-card-container"
                }
              >
                <div className="awards-card">
                  <div className="ranking awards-center">第三名</div>
                  <div className="awards-pic awards-center">
                    <Image
                      src="/homeCutout/赛事介绍获奖.png"
                      style={{ width: "178px", height: "178px" }}
                    />
                  </div>

                  <div className="award-content awards-center">
                    <div>团队获得7000元人民币</div>
                    <div>中信证券实习/面试机会</div>
                    <div>中信证券飞鹰计划名额（含结业证书）</div>
                    <div>埔思学院终面机会</div>
                    <div>由中信证券认证的季军证书</div>
                  </div>
                </div>
              </div>

              {width < 837 ? (
                <div
                  className={
                    width < 559
                      ? "awards-card-container-small"
                      : "awards-card-container"
                  }
                >
                  <div className="awards-card">
                    <div className="ranking awards-center">第四至十名</div>
                    <div className="awards-pic awards-center">
                      <Image
                        src="/homeCutout/赛事介绍获奖.png"
                        style={{ width: "178px", height: "178px" }}
                      />
                    </div>

                    <div className="award-content awards-center">
                      <div>团队获得5000元人民币</div>
                    <div>有机会获得中信证券面试机会</div>
                    <div>中信证券飞鹰计划面试机会（含结业证书）</div>
                    <div>公募机构决赛现场终面机会</div>
                    <div>由中信证券认证的决赛证书</div>
                    </div>
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>

            {width >= 837 ? (
              <div className="awards-center flex-center">
                <div
                  className={
                    width < 559
                      ? "awards-card-container-small"
                      : "awards-card-container"
                  }
                >
                  <div className="awards-card">
                    <div className="ranking awards-center">第四至十名</div>
                    <div className="awards-pic awards-center">
                      <Image
                        src="/homeCutout/赛事介绍获奖.png"
                        style={{ width: "178px", height: "178px" }}
                      />
                    </div>

                    <div className="award-content awards-center">
                    <div>团队获得5000元人民币</div>
                    <div>有机会获得中信证券面试机会</div>
                    <div>中信证券飞鹰计划面试机会（含结业证书）</div>
                    <div>公募机构决赛现场终面机会</div>
                    <div>由中信证券认证的决赛证书</div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}

            <div
              className="other-awards"
              style={{ padding: width < 480 ? "0px 15px" : "" }}
            >
              {width > 1200 ? (
                <Image
                  src="/tournament/Group 208@2x.png"
                  style={{ width: "86.667%", height: "100%" }}
                />
              ) : width > 485 ? (
                <Image
                  src="/tournament/Group 1118@2x.png"
                  style={{
                    minWidth: "410px",
                    minHeight: "67px",
                    width: "59.864%",
                    height: "8.75%",
                  }}
                />
              ) : (
                <Image
                  src="/tournament/Group 1123@2x.png"
                  style={{ width: "100%", height: "100%" }}
                />
              )}
            </div>

            <div
              className="awards-card-wrapper"
              style={{ marginTop: "60px", justifyContent: "center" }}
            >
              <div
                className={
                  width < 559
                    ? "awards-card-container-small"
                    : "awards-card-container"
                }
              >
                <div className="awards-card">
                  <div className="ranking awards-center">模范经纪人</div>
                  <div className="awards-pic awards-center">
                    <Image
                      src="/homeCutout/10086.png"
                      style={{ width: "178px", height: "178px" }}
                    />
                  </div>

                  <div className="award-content awards-center">
                  <div>获得“模范财经人”证书</div>
                      <div>有机会获得金融机构实习机会 </div>
                      <div>有机会获得UFA独家采访机会</div>
                      <div>进入“UFA精英群”，获得一手信息</div>
                  </div>
                </div>
              </div>
            </div>

            <div className={width > 766 ? "tips-end" : "tips-center"}>
              注：所有奖项由UFA与中信证券官方签署制定，旨在为参赛选手提供背景提升，学习成长的机会。
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
