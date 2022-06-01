import React, {useState} from "react";
import {Button, Form, Row, Col, FormGroup, FormLabel, FormControl} from "react-bootstrap";
import {propTypes} from "react-bootstrap/esm/Image";
import {SentimentSatisfiedAlt} from "@material-ui/icons";
import './loginpage.css';
import Image from 'react-bootstrap/Image';
import {Link} from 'react-router-dom';
import useWindowDimensions from "../../../utils/sizewindow";
import {Nav} from 'react-bootstrap';
import {ArrowBack} from "@material-ui/icons";
import {connect} from "react-redux";
import {RegisterAuthAction} from "../../../redux/actions/AuthAction";
import {getFileName} from "../../../utils";
import {useHistory} from "react-router";

function NextRegisterForm(props) {
    const {
        user,
        register
    } = props;
    const [userState, setUserState] = useState({})
    const [show, setShow] = useState(false);
    const {width, height} = useWindowDimensions();
    const history = useHistory()
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [email, setEmail] = useState("");
    const [lastName, setLastName] = useState("");
    const [firstName, setFirstName] = useState("");
    const [sex, setSex] = useState("M");
    const [mobileNumber, setMobileNumber] = useState("");
    const [degree, setDegree] = useState("1");
    const [org, setOrg] = useState("1");
    const [regin, setRegin] = useState("")
    const [userType, setUserType] = useState("U");
    const [experienceList, setExperienceList] = useState([
        {company: "密歇根大学", experience: "实习经历实习经历实习经历实习经历实习经历实习"}
    ])
    const [disable, setdisable] = useState(true)

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const testData = {
        last_name: lastName,
        first_name: firstName,
        username: username,
        password: password,
        sex: sex,
        org: org,
        email: email,
        mobile_number: mobileNumber,
        degree: degree,
        user_type: userType,
    };

    const [validated, setValidated] = useState(false);

    const uploadFile = React.createRef();
    const addExperience = () => {
        let obj = {company: "密歇根大学", experience: "实习经历实习经历实习经历实习经历实习经历实习"};
        experienceList.push(obj);
        console.log(experienceList);
        setExperienceList([...experienceList]);
    }
    const handleDelete = (idx) => {
        experienceList.splice(idx, 1);
        console.log(experienceList);
        setExperienceList([...experienceList]);
    };

    function IsEmail(str) {
        let reg = /^\w+@[a-zA-Z0-9]{2,10}(?:\.[a-z]{2,4}){1,3}$/;
        let bool = reg.test(str);
        console.log("bool" + bool)
        return bool;
    }

    return (
        <div>

            <div className="login-container"
                 style={{marginLeft: width > 800 ? "18.75%" : "10%", marginTop: height * 0.1}}>
                <Link className="Link-hover" style={{
                    color: "black",
                    textDecoration: "none",
                }} to="/register"><ArrowBack/></Link>
                <Form noValidate validated={validated} id="addProject" onSubmit={(event) => {
                    event.preventDefault();
                    register(userState)
                }}>
                    <Form.Group className="loadingusername">
                        <Form.Label  column>
                            学历
                        </Form.Label>

                        <Form.Select
                            className="loadinglogin"
                            required
                            value={degree}
                            onChange={(e) => setDegree(e.target.value)}
                        >
                            <option value="college">本科</option>
                            <option value="graduate">研究生</option>
                            <option value="phd">博士</option>
                        </Form.Select>
                    </Form.Group>


                    <Form.Group className="loadingusername">

                        <Form.Label column>
                            大学名称（中文）
                        </Form.Label>

                        <Form.Control
                            className="loadinglogin"
                            required
                            value={password}
                            onChange={(e) => setOrg(e.target.value)}
                        ></Form.Control>

                    </Form.Group>

                    <Form.Group className="loadingusername">

                        <Form.Label column>
                            所在国家
                        </Form.Label>

                        <Form.Control
                            className="loadinglogin"
                            required
                            value={password}
                            onChange={(e) => setRegin(e.target.value)}
                        ></Form.Control>

                    </Form.Group>

                    <Form.Group className="loadingusername">

                        <Form.Label column>
                            希望未来从事职业
                        </Form.Label>

                        <Form.Control
                            className="loadinglogin"
                            required
                            value={password}
                            onChange={(e) => setRegin(e.target.value)}
                        ></Form.Control>

                    </Form.Group>
                    <div>
                        <div className="information">实习经历（选填）</div>
                        {
                            experienceList.map((item, idx) => (
                                <div key={idx} style={{marginTop: "24px", display: "flex"}}>
                                    <FormGroup>
                                        <FormLabel className="edit-form-label">实习公司</FormLabel>
                                        <FormControl
                                            type="text"
                                            value={item.company}
                                            style={{width: "100%", height: "48px"}}
                                            placeholder="请输入文字"
                                            onChange={(e) => {
                                                experienceList[idx].company = e.target.value;
                                                setExperienceList(experienceList);
                                                setUserState({...userState, ...{setExperienceList}});
                                            }}
                                        />
                                    </FormGroup>

                                    <FormGroup style={{marginLeft: "4%"}}>
                                        <FormLabel className="edit-form-label">实习职位</FormLabel>
                                        <div style={{display: "flex", alignItems: "center"}}>
                                            <FormControl
                                                type="text"
                                                value={experienceList[idx].experience}
                                                style={{width: "85%", height: "48px"}}
                                                placeholder="请输入文字"
                                                onChange={(e) => {
                                                    experienceList[idx].experience = e.target.value;
                                                    setExperienceList(experienceList);
                                                    setUserState({...userState, ...{setExperienceList}});
                                                }}
                                            />
                                            <Image
                                                show={experienceList.length != 1}

                                                onClick={() => handleDelete(idx)}
                                                src="/Frame-delete@2x.png"
                                                style={{
                                                    marginLeft:"24px",
                                                    width: "22px",
                                                    height: "22px",
                                                    display: experienceList.length == 1 ? "none" : 'block'
                                                }}
                                            />
                                        </div>

                                    </FormGroup>

                                </div>

                            ))

                        }
                        <FormGroup style={{marginTop: "36px"}}>
                            <Button
                                onClick={addExperience}
                                style={{
                                    width: "46%",
                                    height: "48px",
                                    backgroundColor: "#F5F6F8",
                                    border: 0,
                                    color: "black",fontWeight:"bold"
                                }}>
                                <Image
                                    src="/homeCutout/Group 864.png"
                                    style={{width: "16px", height: "16px"}}
                                />
                                新增一条 实习经历
                            </Button>
                        </FormGroup>
                    </div>

                    <div style={{marginTop: "32px", display: "flex"}}>
                        <div style={{display: "flex", justifyContent: "left"}}>
                            <Form.Check type="radio" checked={!disable} onClick={(e) => setdisable(!disable)}/>
                            <div style={{
                                fontSize: "14px",
                                fontFamily: "Microsoft YaHei UI-Regular, Microsoft YaHei UI;",
                                fontWeight: "400",
                                color: "#6E7184",
                                lineHeight: "24px",
                                marginLeft: "8px"
                            }}>
                                我已同意...隐私政策和服务条款
                            </div>

                        </div>


                    </div>

                    <Form.Group as={Row} className="loadinglogin" style={{
                        background: "linear-gradient(135deg,#2B8CFF 0%, #2346FF 100%)",
                        borderRadius: "4px 4px 4px 4px",
                        marginTop: "24px"
                    }}>

                        <Button
                            onClick={() => {
                                history.push("/NextRegisterForm")
                            }}
                            style={{
                                color: "white",
                                marginLeft:"0px",
                                marginRight:"0px",
                                fontWeight:"bold"
                            }}
                            // onClick={() => {
                            //   const data = {
                            //     username,
                            //     password,
                            //     email,
                            //     last_name: lastName,
                            //     first_name: firstName,
                            //     sex,
                            //     mobile_number: mobileNumber,
                            //     degree,
                            //     org: org,
                            //     user_type: userType,
                            //   };
                            //   dispatch(register({ data }));
                            // }}
                        >
                            注册
                        </Button>
                    </Form.Group>
                </Form>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        user: state,

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        register: (userState) => {
            dispatch(RegisterAuthAction(userState));
            console.log(userState, 335)
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NextRegisterForm)
