import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form'
import { Button, Col, Row } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import { useDispatch, useSelector } from 'react-redux';
// import { updateProject } from '../../../state/slices/projs';
// import { fetchAllUsers, selectLastUpdatedAtUsers } from '../../../state/slices/users';
// import { shouldRefetchList } from '../../../state/store';

// Edit Button for Supervisor projects
export default function UserStateManagement(props) {

    // Control Modal
    const [validated, setValidated] = useState(false);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // Get User State
    const [is_active, setIsActive] = useState(props.value.state);

    // Fake handleSubmit
    const handleSubmit = (event) => {
    }

    return (
        <> {/* Button appear at the right-end of each row of the table */}
            <Button variant="outline-primary" style={{ width: "100%" }} size='sm' onClick={handleShow} >
                状态管理
            </Button>


            {/* Modal will apear after click the above Button */}
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>用户状态管理</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    {/* The form to edit data for each project */}
                    <Form noValidate validated={validated} id="addProject">
                        
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