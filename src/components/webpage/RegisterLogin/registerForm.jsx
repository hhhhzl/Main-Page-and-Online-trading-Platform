import React, {useState} from "react";
import {Button, Form, Row, Col} from "react-bootstrap";
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
import TeamRegisterModel from "../../screen/modal/TeamRegisterModel";

function RegisterForm(props) {
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

    const uuid = () => {
        let s = [];
        let hexDigits = "0123456789abcdef";
        for (let i = 0; i < 36; i++) {
            s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
        }
        s[14] = "4";
        s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1);
        s[8] = s[13] = s[18] = s[23] = "-";
        let uuid = s.join("");
        return uuid;
    };
    const [headPortrait, setHeadPortrait] = useState('/homeCutout/Group 1074.png')
    const [fileList, setFileList] = useState([]);
    const uploadFile = React.createRef();
    const chooseFile = () => {
        uploadFile.current.click();
    };
    const fileChange = (e) => {
        let file = e.target.files;
        if (file.length != 0) {
            for (let i = 0; i < file.length; i++) {
                let suffixArr = file[i].name.split(".");
                let suffix = suffixArr[suffixArr.length - 1];
                console.log(suffix);
                if (suffix == "png" || suffix == "jpg" || suffix == "jpeg") {
                    // file
                    // let id =
                    file[i].newFileName = getFileName(file[i].name)
                    file[i].id = uuid();
                    file[i].suffix = suffix;
                    fileList.push(file[i]);
                } else {
                    alert("文件格式错误");
                }
            }
        }
        setFileList([...fileList]);
        e.target.value = "";
    };

    const handleSubmit = () => {
        setValidated(true);
    };

    function IsPassword(confirmPassword) {
        if (password === confirmPassword) {
            return "^.{8,20}";
        } else {
            return "^.{200,500}";
        }
    }

    const [imgSrc, setImgSrc] = useState('')
    const [showModal, setShowModal] = useState(false);

    function onSelectFile(e: React.ChangeEvent<HTMLInputElement>) {
        if (e.target.files && e.target.files.length > 0) {
            const reader = new FileReader()
            reader.addEventListener('load', () =>
                setImgSrc(reader.result.toString() || ''),
            )
            reader.readAsDataURL(e.target.files[0])
            setShowModal(true)
            e.target.value = "";
        }
    }

    const hideModal = () => {
        setShowModal(false);
        setImgSrc('');
    };
    const getBase64 = (url) => {
        setShowModal(false)
        setHeadPortrait(url);
    }

    return (
        <div>

            <div className="login-container"
                 style={{marginLeft: width > 800 ? "18.75%" : "10%", marginTop: height * 0.1}}>
                <Link className="Link-hover" style={{color: "black", textDecoration: "none"}} to="/home"><ArrowBack/></Link>
                <Row style={{width: "100%"}}><Col xs={7}>
                    <h2 style={{
                        width: "250px",
                        height: "80px",
                        fontSize: "40px",
                        fontFamily: "Microsoft YaHei UI-Bold",
                        fontWeight: "bold",
                        color: "#2A2B30",
                        lineHeight: "80px",
                        letterSpacing: "5px",
                    }}>欢迎注册</h2>

                </Col>
                    <Col xs={6} style={{marginLeft: "0px", width: "110px", marginTop: "35px"}}>
                    </Col></Row>
                <div>
                    <div >
                        <div style={{
                            width: "88px",
                            height: "24px",
                        }}>
                            <h6 style={{
                                fontSize: "14px",
                                fontFamily: "Microsoft YaHei UI-Bold",
                                color: "#2A2B30",
                                lineHeight: "24px"
                            }}>已有账户？</h6>
                        </div>
                    </div>
                    <div >
                        <div style={{
                            width: "88px",
                            height: "24px",
                            position:"relative",
                            left:"75px",
                            top:"-25px",
                        }}>
                            <Link style={{
                                height: "28px",
                                fontSize: "14px",
                                fontFamily: "Microsoft YaHei UI-Bold",
                                fontWeight: "400",
                                color: "#6E7184",
                                lineHeight: "24px",
                            }} to="/login">去登录

                            </Link></div>
                    </div>
                </div>
                <br/>
                <br/>
                <div style={{marginBottom: "20px"}}>
                    <Image
                        src={headPortrait}
                        style={{width: "44px", height: "44px",borderRadius: "50%"}}
                    />
                    <Button
                        type="primary"
                        className="publish-upload-file"
                        onClick={chooseFile}
                        style={{borderRadius: "6px", background: "white", paddingBottom: "5px"}}
                    >
                            <span className="publish-upload-file-text"
                                  style={{color: "#1442ED", marginLeft: "0px"}}>上传头像</span>
                        <input
                            hidden
                            ref={uploadFile}
                            type="file"
                            accept="image/*"
                            onChange={onSelectFile}/>
                    </Button>
                </div>
                <Form noValidate validated={validated} id="addProject" onSubmit={(event) => {
                    setValidated(true);
                    event.preventDefault();
                    history.push("/NextRegisterForm")
                    // register(userState)
                }}>


                    <TeamRegisterModel showModal={showModal} hideModal={hideModal} getBase64={getBase64}
                                       imgSrc={imgSrc}></TeamRegisterModel>

                    <Form.Group className="loadingusername">
                        <Form.Label column>
                            用户名
                        </Form.Label>

                        <Form.Control
                            className="loadinglogin"
                            required
                            value={username}
                            onChange={(e) => {
                                const username = e.target.value
                                setUsername(e.target.value)
                                setUserState({...userState, ...{username}});

                            }
                            }
                        ></Form.Control>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label column sm={2}>
                            邮箱
                        </Form.Label>

                        <Form.Control
                            className="loadinglogin"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            pattern="^([a-zA-Z\d][\w-]{2,})@(\w{2,})\.([a-z]{2,})(\.[a-z]{2,})?$"
                        ></Form.Control>
                        <Form.Control.Feedback type="invalid">
                            邮箱格式错误
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label column>
                            密码
                        </Form.Label>
                        <Form.Control
                            className="loadinglogin"
                            required
                            type="password"
                            value={password}
                            onChange={(e) => {
                                const password = e.target.value;
                                setPassword(e.target.value)
                                setUserState({...userState, ...{password}});
                            }}
                            pattern="^.{8,20}"
                        ></Form.Control>
                        <Form.Control.Feedback type="invalid">
                            请输入最少8位，最多20位的密码！
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label column>
                            确认密码
                        </Form.Label>
                        <Form.Control
                            className="loadinglogin"
                            required
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => {
                                const confirmPassword = e.target.value;
                                setConfirmPassword(e.target.value)
                                setUserState({...userState, ...{confirmPassword}});
                            }}
                            pattern={IsPassword(confirmPassword)}
                        ></Form.Control>
                        <Form.Control.Feedback type="invalid">
                            两次输入密码不一致！
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label column>
                            微信号
                        </Form.Label>

                        <Form.Control
                            className="loadinglogin"
                            required
                            value={mobileNumber}
                            onChange={(e) => setMobileNumber(e.target.value)}
                        ></Form.Control>
                    </Form.Group>
                    <Form.Label column>
                        真实姓名
                    </Form.Label>

                    <Form.Control
                        className="loadinglogin"
                        required
                        value={mobileNumber}
                        onChange={(e) => setMobileNumber(e.target.value)}
                    ></Form.Control>

                    <Form.Group as={Row}>
                        <Col sm={3}>
                            <Form.Label className="loadingusername" column sm={6}>
                                性别
                            </Form.Label>
                            <Form.Select className="loadinglogin" required value={sex}
                                         onChange={(e) => setSex(e.target.value)}>
                                <option value="male">男</option>
                                <option value="wemale">女</option>

                            </Form.Select>
                        </Col>
                        <Col sm={3}>
                            <Form.Label className="loadingusername" column>
                                年
                            </Form.Label>

                            <Form.Select
                                className="loadinglogin"
                                required
                                value={degree}
                                onChange={(e) => setDegree(e.target.value)}
                            >
                                <option value="1">2022</option>
                            </Form.Select>
                        </Col>
                        <Col sm={3}>
                            <Form.Label className="loadingusername" column>
                                月
                            </Form.Label>

                            <Form.Select
                                className="loadinglogin"
                                required
                                value={degree}
                                onChange={(e) => setDegree(e.target.value)}
                            >
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                                <option value="11">11</option>
                                <option value="12">12</option>
                            </Form.Select>
                        </Col>
                        <Col sm={3}>
                            <Form.Label className="loadingusername" column>
                                日
                            </Form.Label>

                            <Form.Select
                                className="loadinglogin"
                                required
                                value={degree}
                                onChange={(e) => setDegree(e.target.value)}
                            >
                                <option value="1">1</option>
                            </Form.Select>
                        </Col>
                    </Form.Group>

                    {/*  <Form.Group className="loadingusername">

                        <Form.Label column>
                            院校/单位
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
                            地区
                        </Form.Label>

                        <Form.Control
                            className="loadinglogin"
                            required
                            value={password}
                            onChange={(e) => setRegin(e.target.value)}
                        ></Form.Control>

                    </Form.Group>*/}

                    {/* <Row>
            <Col xs={8}>
            <Link style ={{color:"black",fontSize:16,padding:25}} to="/login">去登陆</Link>
            </Col>
            <Col xs ={4}>
              <Nav.Item>
                <Link style ={{color:"black",fontSize:16,padding:25}} to="/home">回到主页</Link>
              </Nav.Item>

            </Col>
            </Row> */}
                    <br/>


                    <Form.Group as={Row} className="loadinglogin" style={{
                        background: "linear-gradient(135deg,#2B8CFF 0%, #2346FF 100%)",
                        borderRadius: "4px 4px 4px 4px"
                    }}>

                        <Button
                            // onClick={() => {
                            //     handleSubmit()
                            // }}
                            style={{
                                color: "white",
                                marginLeft:"0px",
                                marginRight:"0px",
                                fontWeight:"bold"
                            }}
                            type="submit"
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
                            下一步
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

export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm)
