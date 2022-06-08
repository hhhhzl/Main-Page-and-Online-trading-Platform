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
import { IconButton } from "@material-ui/core";

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

    const [realName, setrealName] = useState("");
    const [wechat, setwechat] = useState("");
    const [sex, setSex] = useState("");
    const [birthday, setbirthday] = useState("")
    const [mobileNumber, setMobileNumber] = useState("");

    const [degree, setDegree] = useState("");
    const [org, setOrg] = useState("");
    const [regin, setRegin] = useState("")
    const [job, setjob] = useState("")
    const [userType, setUserType] = useState("U");
    const [page, setpage] = useState(1)
    const [experienceList, setExperienceList] = useState([
        {company: "密歇根大学", experience: "实习经历实习经历实习经历实习经历实习经历实习"}
    ])
    const [disable, setdisable] = useState(true)


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

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [validated1, setValidated1] = useState(false);
    const [validated2, setValidated2] = useState(false);

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
        setValidated1(true);
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
        <>

            {page == 1?
            <>
            <div className="login-container"
                 style={{marginLeft: width > 800 ? "18.75%" : "10%", marginTop: height * 0.09}}>
                <Link className="Link-hover" style={{color: "black", textDecoration: "none"}} to="/home"><ArrowBack/></Link>
                <div style={{width: "100%"}}>
                    <div style={{
                        width: "250px",
                        height: "80px",
                        fontSize: "40px",
                        fontFamily: "Microsoft YaHei UI-Bold",
                        fontWeight: "bold",
                        color: "#2A2B30",
                        lineHeight: "80px",
                        letterSpacing: "5px",
                    }}>欢迎注册</div>
                </div>

                <div>
                    <div >
                        <div style={{
                            width: "88px",
                            height: "24px",
                        }}>
                            <h6 style={{
                                fontSize: "14px",
                                fontFamily: "Microsoft YaHei UI-Regular, Microsoft YaHei UI",
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
                                fontFamily: "Microsoft YaHei UI-Regular, Microsoft YaHei UI",
                                fontWeight: "400",
                                color: "#6E7184",
                                lineHeight: "24px",
                            }} to="/login">去登录

                            </Link></div>
                    </div>
                </div>
                <div style={{marginBottom: "20px", marginTop:"60px"}}>
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

                <Form noValidate validated={validated1} id="addProject" onSubmit={(event) => {
                    const form = event.currentTarget;
                    if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                    setValidated1(true)
                    }else{
                       setpage(2)
                    }
                    // history.push("/NextRegisterForm")
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

                    <Form.Group className="loadingusername">
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
                    <Form.Group className="loadingusername">
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
                    <Form.Group className="loadingusername">
                        <Form.Label column>
                            微信号（便于邀请您进入赛事微信群）
                        </Form.Label>

                        <Form.Control
                            className="loadinglogin"
                            required
                            value={wechat}
                            onChange={(e) => setwechat(e.target.value)}
                        ></Form.Control>
                    </Form.Group >

                    <Form.Group className="loadingusername">
                    <Form.Label column>
                        真实姓名
                    </Form.Label>

                    <Form.Control
                        className="loadinglogin"
                        required
                        value={realName}
                        onChange={(e) => setrealName(e.target.value)}
                    ></Form.Control>
                    </Form.Group>

                    <Form.Group as={Row} className="loadingusername">
                        <Col sm={6}>
                            <Form.Label  column sm={6}>
                                性别
                            </Form.Label>
                            <Form.Select
                            className="loadinglogin" required value={sex} defaultValue={""}
                                onChange={(e) => setSex(e.target.value)}>
                                <option value= "">选择性别</option>
                                <option value="male">男</option>
                                <option value="wemale">女</option>

                            </Form.Select>
                        </Col>
                        <Col sm={6}>
                            <Form.Label  column sm={6}>
                                生日
                            </Form.Label>

                            <Form.Control
                                className="loadinglogin"
                                type = "date"
                                required
                                value={birthday}
                                onChange={(e) => setbirthday(e.target.value)}
                            >
                            </Form.Control>
                        </Col>
                    </Form.Group>

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
                        >
                            下一步
                        </Button>
                    </Form.Group>
                </Form>
            </div>
            </>









            :
            <>
            <div className="login-container"
                 style={{marginLeft: width > 800 ? "18.75%" : "10%", marginTop: height * 0.1}}>
                     <div style={{marginLeft:"-10px"}}>
                     <IconButton onClick={() => setpage(1)}>
                         <ArrowBack style={{color:"black"}} />
                     </IconButton>
                     </div>


            <Form noValidate validated={validated2} id="addProject" onSubmit={(event) => {
                    const form = event.currentTarget;
                    if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                    setValidated2(true)
                    }else{
                       setpage(1)
                    }
                }}>
                    <Form.Group className="loadingusername">
                        <Form.Label column>
                            学历
                        </Form.Label>

                        <Form.Select
                            className="loadinglogin"
                            required
                            value={degree}
                            onChange={(e) => setDegree(e.target.value)}
                        >
                            <option value="">请选择学历</option>
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
                            value={org}
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
                            value={regin}
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
                            value={job}
                            onChange={(e) => setjob(e.target.value)}
                        ></Form.Control>

                    </Form.Group>
                    <div>
                        <div className="information">实习经历（选填）</div>
                        {
                            experienceList.map((item, idx) => (
                                <div key={idx} style={{marginTop: "24px", display: "flex"}}>
                                    <Form.Group >
                                        <Form.Label className="edit-form-label">实习公司</Form.Label>
                                        <Form.Control
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
                                    </Form.Group>

                                    <Form.Group style={{marginLeft: "4%"}}>
                                        <Form.Label className="edit-form-label">实习职位</Form.Label>
                                        <div style={{display: "flex", alignItems: "center"}}>
                                            <Form.Control
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

                                    </Form.Group>

                                </div>

                            ))

                        }
                        <Form.Group style={{marginTop: "36px"}}>
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
                        </Form.Group>
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
                            style={{
                                color: "white",
                                marginLeft:"0px",
                                marginRight:"0px",
                                fontWeight:"bold"
                            }}
                        >
                            注册
                        </Button>
                    </Form.Group>
                </Form>
                </div>
            </>
            }
     </>

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
