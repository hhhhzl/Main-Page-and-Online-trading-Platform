import React, {useState} from 'react';
import Navbar from 'react-bootstrap/Navbar'
import { Container } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import Image from 'react-bootstrap/Image'
import EditIcon from '@material-ui/icons/EditTwoTone';
import ExitToAppIcon from '@material-ui/icons/ExitToAppTwoTone';



export default function NavBarTest(props) {
    const [user, setuser] =useState(props.username)
    const [authorized, setauthorized] = useState(false)
    console.log(user)
    
    
  
    return (    
        <Navbar bg="light" variant="info" id="app-header">
            <Container className='padding-right' >
                <Nav className="me-auto">
                </Nav>
                {!user? (<>未登录</>) : (<>欢迎你，{props.usertype} {props.username}</>)}
                <Nav className="ml-auto">

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
                        <div className="dropdownleft;" >
                        <NavDropdown.Item href="stock"><EditIcon style={{color: "rgba(0, 0, 0, 0.54)"}}/> 设置</NavDropdown.Item>
                        <NavDropdown.Item href="/stocks"><EditIcon style={{color: "rgba(0, 0, 0, 0.54)"}}/> 修改密码</NavDropdown.Item>
                        <NavDropdown.Item onClick ={props.logoutUser} ><ExitToAppIcon  style={{color: "rgba(0, 0, 0, 0.54)"}}/> 退出</NavDropdown.Item>
                        </div>
                    </NavDropdown>
                </Nav>
            </Container>
        </Navbar>
       
    );
}