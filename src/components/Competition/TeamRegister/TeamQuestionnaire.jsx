import { IconButton } from '@material-ui/core';
import { ArrowBack, ArrowForward } from '@material-ui/icons';
import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { updateUser } from 'redux/reducers/users/usersSlices';
import useWindowDimensions from '../../../utils/sizewindow';

export default function TeamRegister({
                                         Pageprocess,
                                         backPageprocess,
                                         gradeAsk,
                                         setGradeAsk,
                                         investmentTime,
                                         setInvestmentTime,
                                         attentionIndustry,
                                         setAttentionIndustry,
                                     }) {
    const {width, height} = useWindowDimensions();
    const [disable, setdisable] = useState(false)
    const [userState, setuserState] = useState([])
    const history = useHistory()
    const dispatch = useDispatch()
    const sendUserback = () => {
        history.push("/team/register")
    }

    const [showModal, setShowModal] = useState(true);
    const hideModal = () => {
        setShowModal(false);
    };

    useEffect(() => {
        if (gradeAsk && investmentTime && attentionIndustry) {
            setdisable(false)
        }  else {
            setdisable(true)
        }
    }, [gradeAsk,investmentTime,attentionIndustry,disable])

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
                                        width: width > 360?  360 : 250,
                                        height: "40px",
                                        textAlign: "center",
                                        paddingTop: "8px",
                                        border: "1px solid #C0C3CE",
                                        background: "white",
                                        borderRadius: "4px 4px 4px 4px"
                                    }}
                                    required value={gradeAsk} defaultValue={""}
                                    onChange={(e) => {setGradeAsk(e.target.value);
                                    const grade = e.target.value
                                    setuserState({...userState,...{grade}})
                                    }}>
                                    <option value="">请选择</option>
                                    <option value="2">硕士或以上</option>
                                    <option value="5">大四</option>
                                    <option value="6">大三</option>
                                    <option value="7">大二</option>
                                    <option value="8">大一</option>
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
                                        width: width > 360?  360 : 250,
                                        height: "40px",
                                        textAlign: "center",
                                        paddingTop: "8px",
                                        border: "1px solid #C0C3CE",
                                        background: "white",
                                        borderRadius: "4px 4px 4px 4px"
                                    }}
                                    required value={investmentTime} defaultValue={""}
                                    onChange={(e) => {
                                        setInvestmentTime(e.target.value);
                                        const investment_duration = e.target.value
                                        setuserState({...userState, ...{investment_duration}});}}>
                                    <option value="">请选择</option>
                                    <option value="0">小于一年</option>
                                    <option value="1">一年至三年</option>
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
                                                  width: width > 360?  360 : 250,
                                                  height: "40px",
                                                  textAlign: "center",
                                                  paddingTop: "8px",
                                                  border: "1px solid #C0C3CE",
                                                  background: "white",
                                                  borderRadius: "4px 4px 4px 4px"
                                              }}
                                              value={attentionIndustry}
                                              onChange={(e) => {
                                                  setAttentionIndustry(e.target.value);
                                                const interested_field = e.target.value
                                                setuserState({...userState, ...{interested_field}});}}
                                />
                            </Form>
                        </div>
                        <div style={{marginTop: "60px", display: "flex", justifyContent: "center"}}>

                            <Button disabled={disable}
                                    style={{
                                        width: width > 288?  288 : "90%",
                                        height: "48px",
                                        background: disable ? "#F5F6F8" : "linear-gradient(135deg, #2B8CFF 0%, #2346FF 100%)",
                                        border: "1px solid #F5F6F8",
                                        borderRadius: "4px 4px 4px 4px",
                                        boxShadow: disable ? null : "0px 1px 2px 1px rgba(35, 97, 255, 0.08), 0px 2px 4px 1px rgba(35, 97, 255, 0.08), 0px 4px 8px 1px rgba(35, 97, 255, 0.08), 0px 8px 16px 1px rgba(35, 97, 255, 0.08), 0px 16px 32px 1px rgba(35, 97, 255, 0.08)",
                                    }}
                                    onClick={() => {
                                        dispatch(
                                            updateUser({
                                            data: userState
                                           }))
       
                                       ;Pageprocess()}}
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
