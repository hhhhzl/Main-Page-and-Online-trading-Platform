import React, {useState, useEffect} from 'react'
import useWindowDimensions from '../../../utils/sizewindow';
import {IconButton} from '@material-ui/core';
import {ArrowBack, ArrowForward} from '@material-ui/icons';
import {Button, Col, Form, Image} from 'react-bootstrap';
import {useHistory} from 'react-router';

export default function TeamRegister({
                                         Pageprocess,
                                         backPageprocess,
                                         grade,
                                         setGrade,
                                         investmentTime,
                                         setInvestmentTime,
                                         attentionIndustry,
                                         setAttentionIndustry,
                                     }) {
    const {width, height} = useWindowDimensions();
    const [disable, setdisable] = useState(false)
    const history = useHistory()
    const sendUserback = () => {
        history.push("/team/register")
    }

    const [showModal, setShowModal] = useState(true);
    const hideModal = () => {
        setShowModal(false);
    };

    useEffect(() => {
        if (grade && investmentTime && attentionIndustry) {
            setdisable(false)
        }  else {
            setdisable(true)
        }
    }, [grade,investmentTime,attentionIndustry,disable])

    const openModel = () => {
        setShowModal(true)
    }

    return (
        <>

            <div style={{
                marginTop: height * 0,
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                backgroundColor: "#F5F6F8"
            }}>

                <div style={{width: "48px", maxWidth: "18.75%"}}></div>
                <div style={{
                    width: "1200px", minWidth: "fix-content", minHeight: "700px",
                    height: "max-content",
                    marginBottom:"84px",
                }}>
                    <div style={{marginTop: "64px", height: "111px", width: "100%"}}>
                        <div style={{
                            paddingBottom: "24px",
                            paddingTop: "48px",
                            fontSize: "24px",
                            fontFamily: "Microsoft YaHei U-Bold, Microsoft YaHei UI",
                            fontWeight: "bold",
                            color: "#2A2B30",
                            lineHeight: "40px",
                            letterSpacing: "1px"
                        }}>
                            填写团队信息
                        </div>
                    </div>
                    <div style={{height: "700px", width: "100%", backgroundColor: "white"}}>

                        <div style={{marginLeft: "24px", height: "8.57%"}}>
                            <IconButton onClick={() => backPageprocess()}
                                        style={{paddingTop: "24px", paddingBottom: "16px"}}>
                                <ArrowBack/>
                            </IconButton>
                        </div>

                        <div style={{marginTop: "36px", display: "flex", justifyContent: "center"}}>
                            <div style={{
                                fontSize: "20px",
                                fontFamily: "Microsoft YaHei UI-Bold, Microsoft YaHei UI;",
                                fontWeight: "bold",
                                color: "#2A2B30",
                                lineHeight: "40px",
                                letterSpacing: "1px",
                            }}>
                                所在年级
                            </div>
                        </div>

                        <div style={{marginTop: "12px", display: "flex", justifyContent: "center"}}>
                            <Form>
                                <Form.Select
                                    style={{
                                        width: "360px",
                                        height: "40px",
                                        textAlign: "center",
                                        paddingTop: "8px",
                                        border: "1px solid #C0C3CE",
                                        background: "white",
                                        borderRadius: "4px 4px 4px 4px"
                                    }}
                                    required value={grade} defaultValue={""}
                                    onChange={(e) => setGrade(e.target.value)}>
                                    <option value="">请选择</option>
                                    <option value="1">大一</option>
                                    <option value="2">大二</option>
                                    <option value="3">大三</option>
                                    <option value="4">大四</option>
                                    <option value="5">研一</option>
                                    <option value="6">研二</option>
                                    <option value="7">博士</option>
                                </Form.Select>
                            </Form>
                        </div>

                        <div style={{marginTop: "36px", display: "flex", justifyContent: "center"}}>
                            <div style={{
                                fontSize: "20px",
                                fontFamily: "Microsoft YaHei UI-Bold, Microsoft YaHei UI;",
                                fontWeight: "bold",
                                color: "#2A2B30",
                                lineHeight: "40px",
                                letterSpacing: "1px",
                            }}>个人投资时长
                            </div>
                        </div>

                        <div style={{marginTop: "12px", display: "flex", justifyContent: "center"}}>
                            <Form>
                                <Form.Select
                                    style={{
                                        width: "360px",
                                        height: "40px",
                                        textAlign: "center",
                                        paddingTop: "8px",
                                        border: "1px solid #C0C3CE",
                                        background: "white",
                                        borderRadius: "4px 4px 4px 4px"
                                    }}
                                    required value={investmentTime} defaultValue={""}
                                    onChange={(e) => setInvestmentTime(e.target.value)}>
                                    <option value="">请选择</option>
                                    <option value="1">小于一年</option>
                                    <option value="2">一年至三年</option>
                                    <option value="3">大于三年</option>
                                </Form.Select>
                            </Form>

                        </div>
                        <div style={{marginTop: "36px", display: "flex", justifyContent: "center"}}>
                            <div style={{
                                fontSize: "20px",
                                fontFamily: "Microsoft YaHei UI-Bold, Microsoft YaHei UI;",
                                fontWeight: "bold",
                                color: "#2A2B30",
                                lineHeight: "40px",
                                letterSpacing: "1px",
                            }}>
                                关注的行业

                            </div>
                        </div>

                        <div style={{marginTop: "12px", display: "flex", justifyContent: "center"}}>
                            <Form>
                                <Form.Control placeholder={"请填写行业"}
                                              style={{
                                                  width: "360px",
                                                  height: "40px",
                                                  textAlign: "center",
                                                  paddingTop: "8px",
                                                  border: "1px solid #C0C3CE",
                                                  background: "white",
                                                  borderRadius: "4px 4px 4px 4px"
                                              }}
                                              value={attentionIndustry}
                                              onChange={(e) => setAttentionIndustry(e.target.value)}
                                />
                            </Form>
                        </div>
                        <div style={{marginTop: "60px", display: "flex", justifyContent: "center"}}>

                            <Button disabled={disable}
                                    style={{
                                        width: "288px",
                                        height: "48px",
                                        background: disable ? "#F5F6F8" : "linear-gradient(135deg, #2B8CFF 0%, #2346FF 100%)",
                                        border: "1px solid #F5F6F8",
                                        borderRadius: "4px 4px 4px 4px",
                                        boxShadow: disable ? null : "0px 1px 2px 1px rgba(35, 97, 255, 0.08), 0px 2px 4px 1px rgba(35, 97, 255, 0.08), 0px 4px 8px 1px rgba(35, 97, 255, 0.08), 0px 8px 16px 1px rgba(35, 97, 255, 0.08), 0px 16px 32px 1px rgba(35, 97, 255, 0.08)",
                                    }}
                                    onClick={() => Pageprocess()}
                            >
                                <div style={{display: "flex", justifyContent: "right"}}>
                                    <div style={{
                                        fontSize: "14px",
                                        fontFamily: "Microsoft YaHei UI-Bold, Microsoft YaHei UI;",
                                        fontWeight: "bold",
                                        color: disable ? "#C0C3CE" : "white",
                                        lineHeight: "24px",
                                        paddingRight: "95px"
                                    }}>
                                        下一步
                                    </div>
                                    <ArrowForward style={{color: disable ? "#C0C3CE" : "white"}}/>

                                </div>

                            </Button>

                        </div>

                    </div>
                </div>
                <div style={{width: "48px", maxWidth: "18.75%"}}></div>

            </div>


        </>


    )
}
