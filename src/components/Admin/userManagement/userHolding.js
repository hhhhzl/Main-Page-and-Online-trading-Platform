import React, { useState, useEffect } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import { useDispatch, useSelector } from 'react-redux';
import UserHolding from '../../screen/UserHolding';

// Edit Button for Supervisor projects
export default function CheckUserHoding(props) {

    // ===========================================
    // Fetch User Holding from Server by User id (props.id)
    // Pass the User Holding to component UserHolding as 'holding'
    const data = []
    // ===========================================

    // Modal Control
    const [validated, setValidated] = useState(false);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // Fake handleSubmit
    const handleSubmit = (event) => {
        setShow(false)
    }

    return (
        <> {/* Button appear at the right-end of each row of the table */}
            <Button variant="outline-primary" style={{ width: "100%" }} size='sm' onClick={handleShow} >
                用户收益
            </Button>


            {/* Modal will apear after click the above Button */}
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>用户收益</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <UserHolding holding={data}/>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        关闭
                    </Button>
                    {/* <Button variant="primary" type="submit" onClick={handleSubmit}>
                        保存
                    </Button> */}
                </Modal.Footer>
            </Modal>
        </>
    );
}