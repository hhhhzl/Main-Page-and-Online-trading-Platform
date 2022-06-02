import React, { useEffect, useState } from "react";
import "./StockSelectionDevice.css";
import data from "../../static/Strategy.json";
import { Form, InputGroup, Image, Button, Card, Dropdown, Collapse } from "react-bootstrap";
import Slider, { Range } from "rc-slider";
import "rc-slider/assets/index.css";
import useWindowDimensions from "utils/sizewindow";

export default function StockSelectionDevice() {
  const {width,height} = useWindowDimensions()
  const [current, setCurrent] = useState(0);
  const [showQuotesCard, setShowQuotesCard] = useState(false);
  const [showFinanceCard, setShowFinanceCard] = useState(false);
  const [quotestChecker, setquotestChecker] = useState([
    {
      id: 1,
      label: "市值",
      checked: true,
    },
    {
      id: 2,
      label: "当前价",
      checked: false,
    },
    {
      id: 3,
      label: "当日涨跌幅",
      checked: false,
    },
    {
      id: 4,
      label: "成交量",
      checked: false,
    }
  ])
  const [earningChecker, setearningChecker] = useState([
      {
        id: 1,
        label: "市盈率",
        checked: true,
      },
      {
        id: 2,
        label: "每股收益",
        checked: false,
      },
      {
        id: 3,
        label: "股息",
        checked: false,
      },
      {
        id: 4,
        label: "市盈率(TTM)",
        checked: false,
      }
    ]);

  const changeCurrent = (index) => {
    setCurrent(index);
  };

  const handleShowQuotesCard = () => {
    setShowQuotesCard(!showQuotesCard);
  };

  const handleShowFinanceCard = () => {
    setShowFinanceCard(!showFinanceCard);
  };

  const financeCheck = [
    {
      label: "市盈率",
    },
    {
      label: "每股收益",
    },
    {
      label: "股息",
    },
    {
      label: "市盈率(TTM)",
    },
  ];

  const marks = {
    0: {
      style: {
        left: "2%",
        fontSize: "12px",
        fontFamily: "Microsoft YaHei UI-Regular, Microsoft YaHei UI",
        fontWeight: 400,
        color: "#2A2B30",
        lineHeight: "20px",
        letterSpacing: "1px",
        width: "30px",
      },
      label: <strong>0亿</strong>,
    },
    100: {
      style: {
        fontSize: "12px",
        fontFamily: "Microsoft YaHei UI-Regular, Microsoft YaHei UI",
        fontWeight: 400,
        color: "#2A2B30",
        lineHeight: "20px",
        letterSpacing: "1px",
        width: "30px",
      },
      label: <strong>23亿</strong>,
    },
  };

  const Changstate = (e,i,j) => {
    const clonedData = [...quotestChecker];
      clonedData[i]["checked"] = !clonedData[i]["checked"];
    setquotestChecker(clonedData);
  };

  const ChangstateEarning = (e,i,j) => {
    const clonedData = [...quotestChecker];
      clonedData[i]["checked"] = !clonedData[i]["checked"];
    setearningChecker(clonedData);
  };
  

  return (
    <div style={{ width: "100%" }}>
      <div className="stock-selection-device-tabs">
        <div
          onClick={() => changeCurrent(0)}
          className={
            current == 0
              ? "stock-selection-device-active-font"
              : "stock-selection-device-normal-font"
          }
        >
          条件选股
        </div>
        <div
          onClick={() => changeCurrent(1)}
          style={{ marginLeft: "24px" }}
          className={
            current == 1
              ? "stock-selection-device-active-font"
              : "stock-selection-device-normal-font"
          }
        >
          我的策略
        </div>
      </div>
      <div style={{ borderBottom: "1px solid #E5E8EE" }}></div>
      <div>
        {current == 0 ? (
          <>
          <Collapse in = {true}>
          <div style={{height: height-280, overflow:"auto"}}>
            <Form style={{ marginLeft: "48px", marginRight:"48px" }}>
              <Form.Group
                style={{
                  marginTop: "24px",
                }}
              >
                <Form.Label className="stock-selection-device-title stock-selection-device-label">
                  市场
                </Form.Label>
              </Form.Group>
              <Form.Group className="stock-selection-device-group">
                <Form.Label className="stock-selection-device-label label-text">
                  交易所
                </Form.Label>
                <Form.Select className="stock-selection-device-select">
                  <option value="全部">全部</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="stock-selection-device-group">
                <Form.Label className="stock-selection-device-label label-text">
                  板块
                </Form.Label>
                <Form.Select className="stock-selection-device-select">
                  <option value="全部">全部</option>
                </Form.Select>
              </Form.Group>


              <div style={{width:"100%", marginTop:"36px", display:"flex",justifyContent:"space-between"}}>
              <Form.Group >
                <Form.Label className="stock-selection-device-title stock-selection-device-label">
                  行情指标
                </Form.Label>
              </Form.Group>

                  <Dropdown style={{paddingTop:"0",height:"24px"}} id={`dropdown-button-drop-end`} drop={"end"}>
                    <Dropdown.Toggle variant="link" bsPrefix="p-0">
                    <Image
                    src="/Group 981.png"
                    style={{ width: "24px", height: "24px" }}
                  ></Image>
                    </Dropdown.Toggle>
                    <Dropdown.Menu style={{position:"fixed"}}>
                    <Card className="quotes-card">
                      {quotestChecker.map((item,i) => (
                        <div style={{ display: "flex",justifyContent:"space-between" }}>
                          <Form.Check
                            type="checkBox"
                            checked={item.checked}
                            onChange = {(e) => Changstate(e,i)}
                          />
                          <span style={{ marginLeft: "8px" }}>
                            {item.label}
                          </span>
                        </div>
                      ))}
                    </Card>
                    </Dropdown.Menu>
                    </Dropdown>
                    </div>                

              {
                quotestChecker.map(elem => {
                  if (elem.checked){
                    return(
                      <>
           
                        <Form.Group className="stock-selection-device-group">
                          <Form.Label className="stock-selection-device-label label-text">
                            {elem.label}
                            </Form.Label>
                            <InputGroup
                              style={{
                                width: "107px",
                                height: "36px",
                                marginLeft: "21.25%",
                                border:"1px solid #C0C3CE",
                                borderBottom:"1px solid #C0C3CE",
                                borderRadius:"4px",
                              }}
                            >
                              <Form.Control
                                style={{backgroundColor:"rgba(0, 0, 0, 0)",border:"0"}}
                                type="float"
                                placeholder="0.00"
                                defaultValue={null}
                              />
                              <InputGroup.Text style={{ width:"28px", padding:"0px", backgroundColor: "rgba(0, 0, 0, 0)" ,border:"0"}}>
                              <div style={{
                                  width: "14px",
                                  height: "24px",fontSize: "14px",
                                  fontFamily: "Microsoft YaHei UI-Regular, Microsoft YaHei UI",
                                   fontWeight: "400",
                                   color: "#C0C3CE",
                                  lineHeight: "24px",}}> 亿</div>
                              </InputGroup.Text>
                            </InputGroup>
                            <Form.Label style={{ marginTop:"6px",padding: "6px" }}><div style={{
                                  width: "14px",
                                  height: "24px",
                                  fontSize: "14px",
                                  fontFamily: "Microsoft YaHei UI-Regular, Microsoft YaHei UI",
                                   fontWeight: "400",
                                   color: "#2A2B30",
                                  lineHeight: "24px",}}> 至</div></Form.Label>
                            <InputGroup
                              style={{
                                width: "107px",
                                height: "36px",
                                border:"1px solid #C0C3CE",
                                borderRadius:"4px",
                              }}
                            >
                              <Form.Control
                                style={{backgroundColor:"rgba(0, 0, 0, 0)",border:"0"}}
                                type="float"
                                placeholder="0.00"
                                defaultValue={null}
                              />
                              <InputGroup.Text style={{ width:"28px", padding:"0px", backgroundColor: "rgba(0, 0, 0, 0)", border:"0"}}>
                              <div style={{
                                  width: "14px",
                                  height: "24px",fontSize: "14px",
                                  fontFamily: "Microsoft YaHei UI-Regular, Microsoft YaHei UI",
                                   fontWeight: "400",
                                   color: "#C0C3CE",
                                  lineHeight: "24px",}}> 亿</div>
                              </InputGroup.Text>
                            </InputGroup>
                          </Form.Group>

                          <div
                            style={{
                              width: "100%",
                              marginTop: "20px",
                              marginBottom:"11px"
                            }}
                          >
                            <Slider
                              min={0}
                              marks={marks}
                              step={0}
                              range
                              allowCross={false}
                              defaultValue={[10, 20]}
                            />
                          </div>
                          <div style={{width:"100%",height:"16px"}}></div>
                      </>
                    )
                  }
                })
              }

              

            

            <div style={{width:"100%", marginTop:"36px", display:"flex",justifyContent:"space-between"}}>
              <Form.Group >
                <Form.Label className="stock-selection-device-title stock-selection-device-label">
                  财务指标
                </Form.Label>
              </Form.Group>

                  <Dropdown style={{paddingTop:"0",height:"24px"}}>
                    <Dropdown.Toggle variant="link" bsPrefix="p-0">
                    <Image
                    src="/Group 981.png"
                    style={{ width: "24px", height: "24px" }}
                  ></Image>
                    </Dropdown.Toggle>
                    <Dropdown.Menu 


//TO DO fix Zindex...............................................
                    // style={{position:"absolute",zIndex:999, marginLeft:"100px"}}
                     
                    >
                    <Card className="quotes-card">
                      {earningChecker.map((item,i) => (
                        <div style={{ display: "flex",justifyContent:"space-between" }}>
                          <Form.Check
                            type="checkBox"
                            checked={item.checked}
                            onChange = {(e) => ChangstateEarning(e,i)}
                          />
                          <span style={{ marginLeft: "8px" }}>
                            {item.label}
                          </span>
                        </div>
                      ))}
                    </Card>
                    </Dropdown.Menu>
                    </Dropdown>
                    </div> 



                    {
                earningChecker.map(elem => {
                  if (elem.checked){
                    return(
                      <>
           
                        <Form.Group className="stock-selection-device-group">
                          <Form.Label className="stock-selection-device-label label-text">
                            {elem.label}
                            </Form.Label>
                            <InputGroup
                              style={{
                                width: "107px",
                                height: "36px",
                                marginLeft: "21.25%",
                                border:"1px solid #C0C3CE",
                                borderBottom:"1px solid #C0C3CE",
                                borderRadius:"4px",
                              }}
                            >
                              <Form.Control
                                style={{backgroundColor:"rgba(0, 0, 0, 0)",border:"0"}}
                                type="float"
                                placeholder="0.00"
                                defaultValue={null}
                              />
                              <InputGroup.Text style={{ width:"28px", padding:"0px", backgroundColor: "rgba(0, 0, 0, 0)" ,border:"0"}}>
                              <div style={{
                                  width: "14px",
                                  height: "24px",fontSize: "14px",
                                  fontFamily: "Microsoft YaHei UI-Regular, Microsoft YaHei UI",
                                   fontWeight: "400",
                                   color: "#C0C3CE",
                                  lineHeight: "24px",}}> 亿</div>
                              </InputGroup.Text>
                            </InputGroup>
                            <Form.Label style={{ marginTop:"6px",padding: "6px" }}><div style={{
                                  width: "14px",
                                  height: "24px",
                                  fontSize: "14px",
                                  fontFamily: "Microsoft YaHei UI-Regular, Microsoft YaHei UI",
                                   fontWeight: "400",
                                   color: "#2A2B30",
                                  lineHeight: "24px",}}> 至</div></Form.Label>
                            <InputGroup
                              style={{
                                width: "107px",
                                height: "36px",
                                border:"1px solid #C0C3CE",
                                borderRadius:"4px",
                              }}
                            >
                              <Form.Control
                                style={{backgroundColor:"rgba(0, 0, 0, 0)",border:"0"}}
                                type="float"
                                placeholder="0.00"
                                defaultValue={null}
                              />
                              <InputGroup.Text style={{ width:"28px", padding:"0px", backgroundColor: "rgba(0, 0, 0, 0)", border:"0"}}>
                              <div style={{
                                  width: "14px",
                                  height: "24px",fontSize: "14px",
                                  fontFamily: "Microsoft YaHei UI-Regular, Microsoft YaHei UI",
                                   fontWeight: "400",
                                   color: "#C0C3CE",
                                  lineHeight: "24px",}}> 亿</div>
                              </InputGroup.Text>
                            </InputGroup>
                          </Form.Group>

                          <div
                            style={{
                              width: "100%",
                              marginTop: "20px",
                              marginBottom:"11px"
                            }}
                          >
                            <Slider
                              min={0}
                              marks={marks}
                              step={0}
                              range
                              allowCross={false}
                              defaultValue={[10, 20]}
                            />
                          </div>
                          <div style={{width:"100%",height:"16px"}}></div>
                      </>
                    )
                  }
                })
              }

             
            </Form>
            <Form.Group className="fixed" style={{position:"fixed",bottom:0,width:"25%",minWidth:"320px"}}>
              <Form.Group className="stock-selection-device-group">
                <Form.Label className="stock-selection-device-label label-text">
                  策略名称
                </Form.Label>
                <Form.Control
                  type="text"
                  className="stock-selection-device-select"
                />
              </Form.Group>
              <Form.Group
                style={{
                  position: "absolute",
                  right: "34px",
                  top: "96px",
                }}
              >
                <Button
                  style={{
                    width: "100px",
                    background: "#F5F6F8",
                    color: "#2A2B30",
                    border: "0px",
                  }}
                  type="submit"
                  size="sm"
                  variant="secondary"
                >
                  重置
                </Button>
                <Button
                  style={{
                    marginLeft: "24px",
                    width: "100px",
                  }}
                  type="submit"
                  size="sm"
                  variant="primary"
                >
                  保存
                </Button>
              </Form.Group>
            </Form.Group>
          </div>
          </Collapse>
          </>
        ) : (





          ////////////////////////////////////我的策略/////////////////////////////////////
          <div>
            {data.map((item, idx) => (
              <div className="list-label">
                <div className="stock-selection-device-title">{item.title}</div>
                <div className="strategy-label" style={{ paddingTop: "12px" }}>
                  板块：{item.plate}
                </div>
                <div className="strategy-label" style={{ marginTop: "4px" }}>
                  股息收益率：{item.dividendYield}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
