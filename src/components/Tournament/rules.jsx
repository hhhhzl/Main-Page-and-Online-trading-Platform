import Image from "react-bootstrap/Image";
import "./rules.css";
import { React, useState, useEffect } from "react";
import useWindowDimensions from "../../utils/sizewindow";
import RulesModal from "../screen/modal/RulesModal";

const Rules = ({ changeEventKey }) => {
  const { width, height } = useWindowDimensions();
  const [current, setCurrent] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [bodyscrollrdTop, setbodyscrollTop] = useState(0);

  const openModal = (current) => {
    setShowModal(true);
    setCurrent(current);
  };

  const hideModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setbodyscrollTop(
        document.documentElement.scrollTop || document.body.scrollTop
      );
      console.log("屏幕向下距离", bodyscrollrdTop);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [bodyscrollrdTop]);

  return (
    <>
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
        }}
      ></div>

      <div>
        <RulesModal
          showModal={showModal}
          hideModal={hideModal}
          current={current}
        ></RulesModal>
        <div
          style={{
            position: "relative",
            width: width,
            height: "96px",
            background: "#FFFFFF",
          }}
        ></div>
        <div className="rules">
          <div className="rules-title">参赛详情</div>
          <div className="rules-top-30">
            <div>
              <div className="rules-title-two">一、参赛对象：</div>
              <div className="rules-centent">
                报名选手必须为在读本科生或研究生；入围决赛的选手需向官方提供所在大学就读的相关证明（例如：学生证，校园卡，录取通知书等）。
              </div>
            </div>
            <div className="rules-top-20">
              <div className="rules-title-two">二、队伍组建：</div>
              <div className="rules-centent">
                比赛可由个人或团队（1-4人）形式进行报名。若团队人数大于2人，所有队员共享一个团队赛事账户（赛事期间需自行做好分工）。
              </div>
            </div>
            <div className="rules-top-20">
              <div className="rules-title-two">三、团队成员限制：</div>
              <div className="rules-centent">
                每位参赛选手只能创立/加入一个赛事队伍。
              </div>
            </div>
            <div className="rules-top-20">
              <div className="rules-title-two">四、赛道选择：</div>
              <div className="rules-centent">
                赛事分为量化赛道和主观多头赛道。每位参赛选手只能选择其中一个赛道进行报名。
              </div>
            </div>
            <div className="rules-top-20">
              <div className="rules-title-two">五、报名赛事：</div>
              <div className="rules-centent">
                详情见上方“{" "}
                <span
                  style={{ color: "blue", cursor: "pointer" }}
                  className="button-hover"
                  onClick={() => changeEventKey(4)}
                >
                  如何报名
                </span>{" "}
                ”。{" "}
              </div>
            </div>
            <div className="rules-top-20">
              <div className="rules-title-two">六、操作平台：</div>
              <div className="rules-centent">
                赛事报名成功后，个人/团队参赛者将在“交易平台”获得一份赛事账户，所有操作均在“{" "}
                <a href="/competition">
                  <span
                    style={{ color: "blue", cursor: "pointer" }}
                    className="button-hover"
                  >
                    交易平台
                  </span>
                </a>
                ”完成。
              </div>
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
                <div className="rules-centent">
                  比赛遵循A股正常交易规则，并允许交易港股通（详细交易规则参考A股交易规则）。
                </div>
              </div>
              <div className="rules-top-20">
                <div className="rules-title-two">交易限制：</div>
                <div className="rules-centent">
                  不允许交易ETF、债券、期权期货等衍生品。
                </div>
              </div>
              <div className="rules-top-20">
                <div className="rules-title-two">持仓限制：</div>
                <div className="rules-centent">
                  每支证券买入时不得超过账户总资产的25%。
                </div>
              </div>
              {/*<div className="rules-top-20">*/}
              {/*	<div className="rules-title-two">涨/跌停板：</div>*/}
              {/*	<div className="rules-centent">待补充</div>*/}
              {/*</div>*/}
            </div>
          </div>
          <div className="rules-p-two">
            <div className="rules-title">财经洞悉</div>
          </div>
          <div className="rules-top-30">
            <div className="rules-centent">
              赛事期间，UFA将定期发布热点财经新闻话题，并邀请大学生撰写话题分析。投稿者有机会获得“杰出财经大学生”奖，以及金融机构推荐资格。详情见上方“
              <span
                style={{ color: "blue", cursor: "pointer" }}
                className="button-hover"
                onClick={() => changeEventKey(3)}
              >
                财经洞悉
              </span>
              ”。
            </div>
          </div>
          <div className="rules-p-two">
            <div className="rules-title">评判规则</div>
          </div>
          <div className="rules-p-two" style={{ marginBottom: "120px" }}>
            <div
              style={{
                display: "flex",
                justifyContent: width <= 903 ? "center" : "space-between",
                flexWrap: "wrap",
              }}
            >
              <div
                style={{
                  flex: width > 1400 ? "0 0 35%" : "0 0 45%",
                }}
              >
                <div style={{ textAlign: "center" }}>
                  <div className="judge-rules-title">初赛</div>
                  <div className="judge-rules-time">2022年6月20日</div>
                  <div style={{ marginTop: "16px" }}>
                    <Image
                      src="/tournament/Group 142@2x.png"
                      style={{ width: "24px", height: "24px" }}
                    ></Image>
                    <div className="horizontal-line"></div>
                    {/* <div className="vertical-line"></div> */}
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <div
                        style={{
                          height: "48px",
                          background: "rgb(229, 232, 238)",
                          width: "1px",
                        }}
                      ></div>
                    </div>
                  </div>
                  <div
                    className="judge-rules-subtitle"
                    style={{ marginTop: "16px" }}
                  >
                    指标分数
                  </div>
                </div>
                <div>
                  <div className="judge-rules-li" style={{ marginTop: "14px" }}>
                    <div>
                      <Image
                        className="judge-rules-dot"
                        src="/tournament/Ellipse 11@2x.png"
                      ></Image>
                    </div>
                    <div
                      className="judge-rules-content"
                      style={{ marginLeft: "6px" }}
                    >
                      初赛将围绕“收益率”及“夏普指数”进行加权打分
                    </div>
                  </div>
                  {/* <div className="judge-rules-li" style={{ marginTop: "12px" }}>
                    <div>
                      <Image
                        className="judge-rules-dot"
                        src="/tournament/Ellipse 11@2x.png"
                      ></Image>
                    </div>
                    <div
                      className="judge-rules-content"
                      style={{ marginLeft: "6px" }}
                    >
                      初赛将围绕“收益率”及“夏普指数”进行加权打分
                    </div>
                  </div> */}
                </div>
                <div
                  className="show-details"
                  style={{ margin: "4px 0px 0 36.553%", textAlign: "center" }}
                  onClick={() => openModal(1)}
                >
                  展示详情
                </div>
              </div>
              <div
                style={{
                  flex: width > 1400 ? "0 0 30%" : "0 0 40%",
                  marginTop: width < 903 ? "50px" : "0",
                }}
              >
                <div style={{ textAlign: "center" }}>
                  <div className="judge-rules-title">复赛</div>
                  <div className="judge-rules-time">2020年9月2日</div>
                  <div style={{ marginTop: "16px" }}>
                    <Image
                      src="/tournament/Group 142@2x.png"
                      style={{ width: "24px", height: "24px" }}
                    ></Image>
                    <div className="horizontal-line"></div>
                    {/* <div className="vertical-line"></div> */}
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <div
                        style={{
                          height: "48px",
                          background: "rgb(229, 232, 238)",
                          width: "1px",
                        }}
                      ></div>
                    </div>
                  </div>
                  <div
                    className="judge-rules-subtitle"
                    style={{ marginTop: "16px" }}
                  >
                    主观报告筛选
                  </div>
                </div>
                <div className="judge-rules-li" style={{ marginTop: "14px" }}>
                  <div>
                    <Image
                      className="judge-rules-dot"
                      src="/tournament/Ellipse 11@2x.png"
                    ></Image>
                  </div>
                  <div
                    className="judge-rules-content"
                    style={{ marginLeft: "6px" }}
                  >
                    指标分数排名前100名的选手入围第二轮主观筛选，并提交一份概略的投资报告。
                  </div>
                </div>
                <div className="judge-rules-li" style={{ marginTop: "12px" }}>
                  <div>
                    <Image
                      className="judge-rules-dot"
                      src="/tournament/Ellipse 11@2x.png"
                    ></Image>
                  </div>
                  <div
                    className="judge-rules-content"
                    style={{ marginLeft: "6px" }}
                  >
                    UFA评委将结合指标分数以及投资报告质量选出8名决赛入围选手。
                  </div>
                </div>
                <div className="show-details" onClick={() => openModal(2)}>
                  展示详情
                </div>
              </div>
              <div
                style={{
                  flex: width > 1400 ? "0 0 35%" : "0 0 45%",
                  marginTop: width < 903 ? "50px" : "0",
                }}
              >
                <div style={{ textAlign: "center" }}>
                  <div className="judge-rules-title">决赛</div>
                  <div className="judge-rules-time">2020年9月24日</div>
                  <div style={{ marginTop: "16px" }}>
                    <Image
                      src="/tournament/Group 142@2x.png"
                      style={{ width: "24px", height: "24px" }}
                    ></Image>
                    <div className="horizontal-line"></div>
                    {/* <div className="vertical-line"></div> */}
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <div
                        style={{
                          height: "48px",
                          background: "rgb(229, 232, 238)",
                          width: "1px",
                        }}
                      ></div>
                    </div>
                  </div>
                  <div
                    className="judge-rules-subtitle"
                    style={{ marginTop: "16px" }}
                  >
                    PPT线上展示
                  </div>
                </div>
                <div className="judge-rules-li" style={{ marginTop: "14px" }}>
                  <div>
                    <Image
                      className="judge-rules-dot"
                      src="/tournament/Ellipse 11@2x.png"
                    ></Image>
                  </div>
                  <div
                    className="judge-rules-content"
                    style={{ marginLeft: "6px" }}
                  >
                    决赛入围选手/团队将于9月17日进行10分钟PPT线上展示，以及5分钟的评委互动环节。
                  </div>
                </div>
                <div className="judge-rules-li" style={{ marginTop: "12px" }}>
                  <div>
                    <Image
                      className="judge-rules-dot"
                      src="/tournament/Ellipse 11@2x.png"
                    ></Image>
                  </div>
                  <div
                    className="judge-rules-content"
                    style={{ marginLeft: "6px" }}
                  >
                    评委将结合选手的专业能力以及综合能力进行评分，给予决赛分数。
                  </div>
                </div>
                <div className="judge-rules-li" style={{ marginTop: "12px" }}>
                  <div>
                    <Image
                      className="judge-rules-dot"
                      src="/tournament/Ellipse 11@2x.png"
                    ></Image>
                  </div>
                  <div
                    className="judge-rules-content"
                    style={{ marginLeft: "6px" }}
                  >
                    赛事将基于初赛指标分数（占比40%）与决赛分数（占比60%）做出最终排名。
                  </div>
                </div>
                <div className="show-details" onClick={() => openModal(3)}>
                  展示详情
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Rules;
