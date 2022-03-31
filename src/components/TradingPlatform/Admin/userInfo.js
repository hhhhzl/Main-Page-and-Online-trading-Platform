import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form'
import { Button, Col, Row } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import { useDispatch, useSelector } from 'react-redux';
// import { updateProject } from '../../../state/slices/projs';
// import { fetchAllUsers, selectLastUpdatedAtUsers } from '../../../state/slices/users';
// import { shouldRefetchList } from '../../../state/store';

// Edit Button for Supervisor projects
export default function UserInfo(props) {
    // const dispatch = useDispatch();

    // // refresh admins
    // const lastUpdatedAt = useSelector(selectLastUpdatedAtUsers);
    // useEffect(() => {
    //     if (shouldRefetchList(lastUpdatedAt)) {
    //         dispatch(fetchAllUsers());
    //     }
    // }, [dispatch, lastUpdatedAt])

    // const admins = useSelector((state) => state.users.items.filter(u => u.user_type === "A"));

    const [validated, setValidated] = useState(false);
    const [show, setShow] = useState(false);

    // Set the default variables in table
    const [name, setName] = useState(props.value.username);
    const [school, setSchool] = useState(props.value.school);
    const [area, setArea] = useState(props.value.area);
    const [email, setEmail] = useState(props.value.email);
    const [phoneNumber, setPhoneNumber] = useState(props.value.phone_number);
    
    const [is_active, setIsActive] = useState(props.value.state);

    // functions to control Modal
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // // life-cycle function
    // useEffect(() => {
    //     setName(props.value.name);
    //     setSchool(props.value.school);
    //     setStartDateYear(props.value.start_time.slice(0, 4));
    //     setStartDateMonth(props.value.start_time.slice(5, 7));
    //     setStartDateDay(props.value.start_time.slice(8,10));
    //     setEndDateYear(props.value.end_time.slice(0, 4));
    //     setEndDateMonth(props.value.end_time.slice(5, 7));
    //     setEndDateDay(props.value.end_time.slice(8,10));
    //     setSendWith(props.value.send_with);
    //     setWillMark(props.value.will_mark);
    //     setIsActive(props.value.is_active);


    // }, [props.value])

    // // group the data into one object
    // const testData = {
    //     name: name,
    //     school: parseInt(school),
    //     send_with: send_with,
    //     will_mark: will_mark,
    //     start_time: start_date_year + "-" + startMonth + "-" + startDay + "T00:00:00",
    //     end_time: end_date_year + "-" + endMonth + "-" + endDay + "T23:59:59",
    //     is_active: is_active,
    // };

    // // Send to data to parents component (ProjectTableRow) when click submit
    // const handleSubmit = (event) => {
    //     const form = document.getElementById("addProject");
    //     if (form.checkValidity() === false) {
    //         event.preventDefault();
    //         event.stopPropagation();
    //     } else {
    //         console.log(testData)
    //         dispatch(updateProject({ projectID: props.value.id, data: testData }))
    //         setShow(false);
    //     }

    //     setValidated(true);
    // }
    const handleSubmit = (event) => {

    }

    return (
        <> {/* Button appear at the right-end of each row of the table */}
            <Button variant="outline-primary" style={{ width: "100%" }} size='sm' onClick={handleShow} >
                查看用户
            </Button>


            {/* Modal will apear after click the above Button */}
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>用户信息</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    {/* The form to edit data for each project */}
                    <Form noValidate validated={validated} id="addProject">
                        <Form.Group className="mb-3" controlId="nomeaning">
                            <Form.Label>用户名</Form.Label>
                            <Form.Control
                                required
                                size="lg"
                                type="text"
                                placeholder="请输入用户名称"
                                value={name}
                                onChange={e => {
                                    const name = e.target.value;
                                    setName(name)
                                }}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="nomeaning">
                            <Form.Label>学校</Form.Label>
                            <Form.Control
                                required
                                size="lg"
                                type="text"
                                placeholder="请输入用户学校"
                                value={school}
                                onChange={e => {
                                    const school = e.target.value;
                                    setSchool(school)
                                }}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="nomeaning">
                            <Form.Label>地区</Form.Label>
                            <Form.Control
                                required
                                size="lg"
                                type="text"
                                placeholder="请输入用户地区"
                                value={area}
                                onChange={e => {
                                    const area = e.target.value;
                                    setArea(area)
                                }}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="nomeaning">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                required
                                size="lg"
                                type="text"
                                placeholder="请输入用户邮箱地址"
                                value={email}
                                onChange={e => {
                                    const email = e.target.value;
                                    setEmail(email)
                                }}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="nomeaning">
                            <Form.Label>手机号码</Form.Label>
                            <Form.Control
                                required
                                size="lg"
                                type="text"
                                placeholder="请输入用户手机号码"
                                value={phoneNumber}
                                onChange={e => {
                                    const phoneNumber = e.target.value;
                                    setPhoneNumber(phoneNumber)
                                }}
                            />
                        </Form.Group>



                        <Form.Group className="mb-3">
                            <Form.Label>状态*</Form.Label>
                            <Form.Select
                                required
                                aria-label="Default select example"
                                value={is_active}
                                onChange={e => {
                                    const is_active = e.target.value;
                                    setIsActive(is_active);
                                }}
                            >
                                <option value="">请选择状态</option>
                                <option value="active">活跃</option>
                                <option value="stop">停用</option>
                            </Form.Select>
                        </Form.Group>


                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        关闭
                    </Button>
                    <Button variant="primary" type="submit" onClick={handleSubmit}>
                        保存
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
