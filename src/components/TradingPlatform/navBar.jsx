import React, {useState} from 'react';
import Navbar from 'react-bootstrap/Navbar'
import { Container, Form, Badge } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import Image from 'react-bootstrap/Image'
import EditIcon from '@material-ui/icons/EditTwoTone';
import ExitToAppIcon from '@material-ui/icons/ExitToAppTwoTone';
import useWindowDimensions from '../../utils/sizewindow';
import { NotificationsActive, NotificationsActiveRounded, NotificationsActiveSharp, NotificationsActiveTwoTone, NotificationsNoneOutlined} from '@material-ui/icons';
import { style } from '@material-ui/system';
import { IconButton } from '@material-ui/core';


export default function NavBarTest(props) {
    const {height,width} = useWindowDimensions();
    const [user, setuser] = useState(props.username)
    const [authorized, setauthorized] = useState(false)
    const [news, setnews] = useState(true)
    return (    
        <Navbar id="app-header" style={{height:height*0.1}}>
            <Container className='padding-right' >
                <Nav className="me-auto">
                    <Form>
                        <Form.Control style={{position:"fixed",top:height*0.03,left: width > 1068? "250px" :"50px", borderRadius:"25px", width: width > 800? "300px" :"250px"}} placeholder={"搜索股票"}></Form.Control>
                    </Form>
                </Nav>
                <div style={{marginRight:"20px"}}>
                <Badge pill bg="success">安全</Badge>
                {' '}
                </div>
                <div style={{marginRight:"20px"}}>
                    {news?
                     <IconButton>
                    <NotificationsActive sx={{color:"red"}}/> 
                    </IconButton>
                    : 
                    <IconButton>
                    <NotificationsNoneOutlined/>
                    </IconButton> } 
                </div>
                <div>   
                {!user? (<>未登录</>) : width> 800 ? <> {props.usertype} {props.username}</> : null}
                </div>
                <Nav >
                    <NavDropdown 
                        title={
                            <div >
                                <Image
                                    src="/head.jpeg"
                                    width="100%"
                                    height="40"
                                    alt="无法显示图片"
                                    style={{marginTop:"50%"}}
                                    roundedCircle
                                />
                            </div>
                        }
                        id="collasible-nav-dropdown"
                    >
                        <div>
                        <NavDropdown.Item href="stocks"><EditIcon style={{color: "rgba(0, 0, 0, 0.54)"}}/> 设置</NavDropdown.Item>
                        <NavDropdown.Item href="/stocks"><EditIcon style={{color: "rgba(0, 0, 0, 0.54)"}}/> 修改密码</NavDropdown.Item>
                        <NavDropdown.Item onClick ={props.logoutUser} ><ExitToAppIcon  style={{color: "rgba(0, 0, 0, 0.54)"}}/> 退出</NavDropdown.Item>
                        </div>
                    </NavDropdown>
                </Nav>
            </Container>
        </Navbar>
       
    );
}