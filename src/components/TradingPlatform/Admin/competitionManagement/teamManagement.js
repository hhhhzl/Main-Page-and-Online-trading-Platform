import React, { useState, useEffect } from 'react';
import { Button, Col, Row, ButtonGroup, ToggleButton } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

// Edit Button for Supervisor projects
export default function TeamManagement(props) {

    // Control Modal
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    // Fake handleSubmit
    const handleSubmit = (event) => {
        setShow(false);
    }
    const [validated, setValidated] = useState(false);

    // 股票默认购买比例100%
    const [proportion, setProportion] = useState(100);

    // false: 股票停用
    // true: 股票启用
    const states = [
        { name: '停用', value: false },
        { name: '启用', value: true },
    ];

    // ==============================================
    // 后端 fetch 次股票的状态, setStateValue (股票状态)
    // 股票 id 是 props.value.id
    // ==============================================
    // bug: 更改完状态后button没有高亮显示，但是stateValue已被修改。等接入数据后再修复


    return (
        <> {/* Button appear at the right-end of each row of the table */}
            <Link
                style={{ color: "white" }}
                to={`${match.url}/admin`}
            >
                <Button variant="outline-primary" style={{ width: "100%" }} size='sm' onClick={handleShow} >
                    团队信息
                </Button>
            </Link>
        </>
    );
}