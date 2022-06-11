import React, {useContext, useEffect, useState} from "react";
import {Button, Form, Row, Col, Badge, Modal, Collapse} from "react-bootstrap";
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
import {getFileName, setautologin} from "../../../utils";
import {useHistory} from "react-router";
import TeamRegisterModel from "../../screen/modal/TeamRegisterModel";
import { IconButton } from "@material-ui/core";
import { mapUserDegree } from "constants/maps";
import { apiRegisterUser } from "api/main_platform/users";
import ToolkitProvider from "react-bootstrap-table2-toolkit";
import BootstrapTable from "react-bootstrap-table-next";
import schooldata from "../../../constants/学校.json"
import areadata from "../../../constants/地区.json"
import data from "../../../static/searchdataSmallTabel.json"
import { SampleData } from "static/Stockdata";
import AuthContext from "context/AuthContext";

export default function RegisterForm(props) {
    const {autologin} = useContext(AuthContext)
    const [userState, setUserState] = useState({})
    const [show, setShow] = useState(false);
    const [showerror, setshowerror] = useState(false)
    const [showfail, setshowfail] = useState(false)
    const [showfailpassward, setshowfailpassward] = useState(false)

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
    const [page, setpage] = useState(1)
    const [experienceList, setExperienceList] = useState([
        {company: "", position: "", detail:""}
    ])
    const [disable, setdisable] = useState(true)


    const addExperience = () => {
        let obj = {company: "", position: "", detail:""};
        experienceList.push(obj);
        console.log(experienceList);
        setExperienceList([...experienceList]);
    }
    const handleDelete = (idx) => {
        experienceList.splice(idx, 1);
        console.log(experienceList);
        setExperienceList([...experienceList]);
    };
    const [submit, setsubmit] = useState(false)

    
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
            return "^.{8,15}";
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

    const submitregisterForm = async (e) => {
        e.preventDefault();
        // console.log(typeof(headPortrait),154)
        // setUserState({...userState, ...{institution:linkedSchool.value},...{region:linkedArea.value},...{avatar:headPortrait}})
        console.log(userState,155)
        try{
            const JsonData = JSON.stringify(userState)
            const response = await apiRegisterUser(JsonData)
            console.log(response)
            if (response.data.msg == "The data in request body is invalid."){
                setshowerror(true)
            }else if (response.data.msg == "OK."){
                const props = {}
                props.email = userState.email
                props.password = userState.password
                setautologin(JSON.stringify(props))
                autologin()
            }else if (response.data.msg == "The password does not meet the complexity requirement.") {
                setshowfailpassward(true)
            }else{
                setshowfail(true)
            }
        }catch(e){
            console.log(e)
            setshowfail(true)
        }
    }

    const sendUser = (id) =>{
        if (id == 1){
            history.push("/login")
        }else{
            history.push("/")
        }

    }


    const [linkedSchool, setLinkedSchool] = useState("")
    const [linkedArea, setLinkedArea] = useState("")
    const handleSearchS = (propes) => {
        propes.onSearch(linkedSchool.value);
    };

    const handleSearchA = (propes) => {
        propes.onSearch(linkedArea.value);
    };
    const [scrollswitchS, setScrollswitchS] = useState(false);
    const [scrollswitchA, setScrollswitchA] = useState(false);

    const searchSwitchS = () => {
        if (linkedSchool.value != ""){
            // setUserState({...userState, ...{institution:linkedSchool.value}})
            setScrollswitchS(true)
        }else{
            setScrollswitchS(false)
        }
    };

    const searchSwitchA = () => {
        if (linkedArea.value != ""){
            // setUserState({...userState, ...{institution:linkedSchool.value}})
            setScrollswitchA(true)
        }else{
            setScrollswitchA(false)
        }
    };

    const Schoolcolumns = [
        {
            dataField: "school", 
            text: "school",
            headerAttrs: {
                hidden: true
            },
        }
    ]

    const Areacolumns = [
        {
            dataField: "area", 
            text: "area",
            headerAttrs: {
                hidden: true
            },
        }
    ]

    const selectRowS = {
        mode: 'radio',
        clickToSelect: true,
        hideSelectAll:true,
        hideSelectColumn: true,
        style:{background:"#E7ECFD"},
        selected: [],
        onSelect: (row, isSelect, rowIndex, e) => {
            if (isSelect){
                setLinkedSchool({value:row.school})
                setOrg(row.school)
                const institution = row.school
                setUserState({...userState, ...{institution}})
                setScrollswitchS(false)
            }else{

            }  
            
          },
      };

      const selectRowA = {
        mode: 'radio',
        clickToSelect: true,
        hideSelectAll:true,
        hideSelectColumn: true,
        style:{background:"#E7ECFD"},
        selected: [],
        onSelect: (row, isSelect, rowIndex, e) => {
            if (isSelect){
                setLinkedArea({value:row.area})
                setRegin(row.area)
                const region = row.area
                setUserState({...userState, ...{region}})
                setScrollswitchA(false)
            }else{

            }  
            
          },
      };


    useEffect(()=>{
        if (submit){
            if (headPortrait === "/homeCutout/Group 1074.png"){
                setUserState({...userState, ...{institution:linkedSchool.value},...{region:linkedArea.value}})
                setsubmit(false)

            }else{
                setUserState({...userState, ...{institution:linkedSchool.value},...{region:linkedArea.value},...{avatar:headPortrait}})
                setsubmit(false)
            }
            
            console.log(userState)
            
        }
    }, [submit, userState])

    useEffect(() =>{
        console.log(linkedSchool,linkedArea)
    })


    return (
        <>

       <Modal
        show={show}
        centered
        >
          <Modal.Header></Modal.Header>
          <Modal.Body style={{textAlign:"center"}}>用户已成功注册 </Modal.Body>
        <Modal.Footer style={{width:"100%", display:"flex",justifyContent:"center"}}  >
            <Button style={{marginRight:"20px"}} className="modal-btn modal-btn-submit"  variant="primary" onClick ={() => sendUser(0)}>
            回主页
          </Button>
          <Button style={{marginLeft:"20px"}} className="modal-btn modal-btn-submit"  variant="primary" onClick ={() => sendUser(1)}>
            去登录
          </Button>
          </Modal.Footer>
        </Modal>


        <Modal
        show={showerror}
        onHide={() => setshowerror(false)}
        style={{textAlign:"center"}}
        >
          <Modal.Header closeButton> 用户名/邮箱已被注册,请更改用户名/邮箱</Modal.Header>

        </Modal>

        <Modal
        show={showfail}
        onHide={() => setshowfail(false)}
        style={{textAlign:"center"}}
        >
          <Modal.Header closeButton> 系统错误, 注册失败, 请稍后重试...</Modal.Header>

        </Modal>

        <Modal
        show={showfailpassward}
        onHide={() => setshowfailpassward(false)}
        style={{textAlign:"center"}}
        >
          <Modal.Header closeButton> 密码过于简单，请修改后重试</Modal.Header>

        </Modal>


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
                                  style={{color: "#1442ED", marginLeft: "0px"}}>上传头像（选填）</span>
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
                            pattern= "^[A-Za-z0-9_\u4e00-\u9fff]{4,12}$"
                            onChange={(e) => {
                                const username = e.target.value
                                setUsername(e.target.value)
                                setUserState({...userState, ...{username}});
                            }
                            }
                        ></Form.Control>
                        <Form.Control.Feedback type="invalid">
                            用户名长度为4至12
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="loadingusername">
                        <Form.Label column sm={2}>
                            邮箱
                        </Form.Label>

                        <Form.Control
                            className="loadinglogin"
                            required
                            value={email}
                            onChange={(e) => {
                                const email = e.target.value
                                setEmail(e.target.value)
                                setUserState({...userState, ...{email}});
                            }
                            }
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
                            pattern="^[A-Za-z0-9]{8,15}$"
                        ></Form.Control>
                        <Form.Control.Feedback type="invalid">
                            请输入最少8位，最多15位密码！
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
                                // const mobile_number = 13883729275
                                // setUserState({...userState, ...{mobile_number}});
                            }}
                            pattern={IsPassword(confirmPassword)}
                        ></Form.Control>
                        <Form.Control.Feedback type="invalid">
                            两次输入密码不一致！
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="loadingusername">

                        <Form.Label>
                            微信号（便于邀请您进入赛事微信群）
                        </Form.Label>

                        <Form.Control
                            className="loadinglogin"
                            required
                            value={wechat}
                            onChange={(e) => {
                                const wechat_id = e.target.value;
                                setwechat(e.target.value)
                                setUserState({...userState, ...{wechat_id}})
                            }}
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
                        onChange={(e) => {
                            const last_name = e.target.value;
                            const first_name = e.target.value;
                            setrealName(e.target.value)
                            setUserState({...userState, ...{first_name},...{last_name}})
                        }}
                    ></Form.Control>
                    </Form.Group>

                    <Form.Group style={{display:"flex",justifyContent:"space-between"}} className="loadingusername">
                        <div style={{width:"200px"}}>
                            <Form.Label>
                                性别
                            </Form.Label>
                            <Form.Select
                            className="loadinglogin" required value={sex} defaultValue={""}
                                onChange={(e) =>
                                    {
                                        const gender = e.target.value;
                                        setSex(e.target.value)
                                        setUserState({...userState, ...{gender}})
                                    }
                                }>
                                <option value= "">选择性别</option>
                                <option value="M">男</option>
                                <option value="F">女</option>

                            </Form.Select>
                        </div>
                        <div style={{width:"200px"}}>
                            <Form.Label>
                                生日
                            </Form.Label>

                            <Form.Control
                                className="loadinglogin"
                                type = "date"
                                required
                                value={birthday}
                                onChange={(e) => {
                                    setbirthday(e.target.value)
                                    const birthday = e.target.value
                                    setUserState({...userState, ...{birthday}})
                                }
                                }
                            >
                            </Form.Control>
                        </div>
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
                     <IconButton onClick={() => {
                         setLinkedSchool({value:linkedSchool.value})
                         setLinkedArea({value:linkedArea.value})
                         console.log(linkedSchool,linkedArea)
                         setpage(1)}
                     }>
                         <ArrowBack style={{color:"black"}} />
                     </IconButton>
                     </div>

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


            <Form style= {{marginTop:"60px"}} noValidate validated={validated2} id="addProject" onSubmit={(e) => {
                    const form = e.currentTarget;
                    if (form.checkValidity() === false) {
                    e.preventDefault();
                    e.stopPropagation();
                    setValidated2(true)
                    }else{
                      setsubmit(true)
                      submitregisterForm(e)
                      
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
                            onChange={(e) =>
                                {const degree = e.target.value;
                                setDegree(e.target.value)
                                setUserState({...userState, ...{degree}})
                            }}
                        >
                            <option value="">请选择学历</option>
                            {Object.entries(mapUserDegree).map(([icode, iname]) => (
                                            <option key={icode} value={icode}>
                                                {iname}
                                            </option>
                            ))}
                        </Form.Select>
                    </Form.Group>

                    <ToolkitProvider
                            keyField="school"
                            data = {schooldata}
                            columns = { Schoolcolumns}  
                            search
                            >
                    {props => (
                    <>

                    <Form.Group className="loadingusername">

                        <Form.Label column>
                            大学名称（海外大学请搜索英文）
                        </Form.Label>

                        <Form.Control
                            className="loadinglogin"
                            type="text"
                            required            
                            ref = { n => {setLinkedSchool(n)}}
                            value={linkedSchool? linkedSchool.value : userState.institution}
                            pattern="^.{4,200}"
                            onChange={(e) => {  
                                handleSearchS({...props.searchProps});
                                searchSwitchS();
                                // setOrg(e.target.value)
                                // setLinkedSchool(e.target.value)
                            
                            }}
                        ></Form.Control>

                            <Collapse in= {scrollswitchS}>
                                 <div style={{
                          maxHeight:"200px",
                          overflow:"auto",
                          position: "relative",
                          marginLeft: "0%",
                          marginTop:"-10px",
                          zIndex: 999,
                          width: "420px",
                          background: "white",
                          border:"0",
                          boxShadow: "0px 1px 2px 1px rgba(0, 0, 0, 0.02), 0px 2px 4px 1px rgba(0, 0, 0, 0.02), 0px 4px 8px 1px rgba(0, 0, 0, 0.02), 0px 8px 16px 1px rgba(0, 0, 0, 0.02), 0px 16px 32px 1px rgba(0, 0, 0, 0.02), 0px 32px 64px 1px rgba(0, 0, 0, 0.02)",

                        }}>
                                <BootstrapTable 
                                {...props.baseProps}
                                 hover = {true}
                                 condensed ={true} 
                                 selectRow = {selectRowS}         
                                //  rowEvents={ rowEvents }
                                />  
                                </div>
                               </Collapse>  

                    </Form.Group>
                    </>
                    )}
                </ToolkitProvider>

                <ToolkitProvider
                            keyField="area"
                            data = {areadata}
                            columns = { Areacolumns}  
                            search
                            >
                    {props => (
                    <>

                    <Form.Group className="loadingusername">

                        <Form.Label column>
                            所在国家/省份/地区
                        </Form.Label>

                        <Form.Control
                            className="loadinglogin"
                            type="text"
                            required            
                            ref = { n => {setLinkedArea(n)}}
                            value={linkedArea? linkedArea.value : userState.region}
                            pattern="^.{2,200}"
                            onChange={(e) => 
                                {
                                    handleSearchA({...props.searchProps});
                                    searchSwitchA();
                                    // const region = e.target.value;
                                    // setRegin(e.target.value)
                                    // setUserState({...userState, ...{region}})
                                }
                                }
                        ></Form.Control>
                         <Collapse in= {scrollswitchA}>
                                 <div style={{
                          maxHeight:"200px",
                          overflow:"auto",
                          position: "relative",
                          marginLeft: "0%",
                          marginTop:"-10px",
                          zIndex: 999,
                          width: "420px",
                          background: "white",
                          border:"0",
                          boxShadow: "0px 1px 2px 1px rgba(0, 0, 0, 0.02), 0px 2px 4px 1px rgba(0, 0, 0, 0.02), 0px 4px 8px 1px rgba(0, 0, 0, 0.02), 0px 8px 16px 1px rgba(0, 0, 0, 0.02), 0px 16px 32px 1px rgba(0, 0, 0, 0.02), 0px 32px 64px 1px rgba(0, 0, 0, 0.02)",

                        }}>
                                <BootstrapTable 
                                { ...props.baseProps}
                                 hover = {true}
                                 condensed ={true} 
                                 selectRow = {selectRowA}         
                                //  rowEvents={ rowEvents }
                                />  
                                </div>
                               </Collapse>  

                    </Form.Group>
                    </>
                    )}
                </ToolkitProvider>


                    <Form.Group className="loadingusername">

                        <Form.Label column>
                            专业
                        </Form.Label>

                        <Form.Control
                            className="loadinglogin"
                            required
                            value={job}
                            onChange={(e) => {
                                const major = e.target.value
                                setjob(e.target.value)
                                setUserState({...userState, ...{major}})
                            }}
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
                                                const experience = experienceList;
                                                setUserState({...userState, ...{experience}});
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
                                                    experienceList[idx].position = e.target.value;
                                                    setExperienceList(experienceList);
                                                    const experience = experienceList;
                                                    setUserState({...userState, ...{experience}});
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
                        <Form.Group>
                            <Form.Check
                             required
                             checked={!disable}
                             onClick = {(e) => setdisable(!disable)}
                            // type="radio"
                             feedback="注册前请先同意"
                             feedbackType="invalid"
                             />
                            </Form.Group>
                            <div style={{
                                fontSize: "14px",
                                fontFamily: "Microsoft YaHei UI-Regular, Microsoft YaHei UI",
                                fontWeight: "400",
                                color: "#6E7184",
                                lineHeight: "24px",
                                marginLeft: "8px"
                            }}>
                                我已同意...
                            </div>
                            <Button style={{
                                padding:"0",
                                backgroundColor:"white",
                                fontSize: "14px",
                                fontFamily: "Microsoft YaHei UI-Regular, Microsoft YaHei UI",
                                fontWeight: "400",
                                borderRadius:"0",
                                borderLeft:0,
                                borderRight:0,
                                borderTop:0,
                                borderBottom:"1 solid blue",
                                color: "#6E7184",
                                lineHeight: "24px",
                                marginLeft: "8px"
                            }}>隐私政策和服务条款</Button>
                        </div>
                    </div>


                    <Form.Group as={Row}
                    className="loadinglogin"
                    style={{
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
                            type="submit"
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
