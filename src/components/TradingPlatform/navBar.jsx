import React, { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import { Container } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import Image from 'react-bootstrap/Image'
import EditIcon from '@material-ui/icons/EditTwoTone';
import ExitToAppIcon from '@material-ui/icons/ExitToAppTwoTone';



export default function NavBarTest(props) {
    const [user, setuser] = useState(props.username)
    const [authorized, setauthorized] = useState(false)
    console.log(user)



    return (
        <Navbar bg="light" variant="info" id="app-header">
            <Container className='padding-right' >
                <Nav className="me-auto">
                </Nav>
                {!user ? (<>未登录</>) : (<>欢迎你，{props.usertype} {props.username}</>)}
                <Nav className="ml-auto">
                    <NavDropdown
                        title={
                            <div >
                                <Image
                                    src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2231&q=80"
                                    width="40"
                                    height="40"
                                    alt="无法显示图片"
                                    style={{ marginTop: "50%", objectFit: "cover" }}
                                    roundedCircle
                                />
                            </div>
                        }
                        id="collasible-nav-dropdown"
                    >
                        <div className="dropdownleft;" >
                            <NavDropdown.Item href="#action/3.1"><EditIcon style={{ color: "rgba(0, 0, 0, 0.54)" }} /> 修改密码</NavDropdown.Item>
                            <NavDropdown.Item onClick={props.logoutUser} ><ExitToAppIcon style={{ color: "rgba(0, 0, 0, 0.54)" }} /> 退出</NavDropdown.Item>
                        </div>
                    </NavDropdown>
                </Nav>
            </Container>
        </Navbar>
    );
}