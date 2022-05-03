import React, { useState, useEffect } from 'react';
import { Button, Col, Row, ButtonGroup, ToggleButton } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import { useDispatch, useSelector } from 'react-redux';

// Edit Button for Supervisor projects
export default function StockStateManagement(props) {

    // Control Modal
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // Fake handleSubmit
    const handleSubmit = (event) => {
        setShow(false);
    }

    // 不清楚后端股票state数据怎么储存
    // 默认key为"state", 激活状态为"active"
    const [stateValue, setStateValue] = useState(props.value.state === "active"? true : false);
    
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
                    <Modal.Title>股票状态管理</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    状态
                    <br />
                    <br />
                    <ButtonGroup>
                        {states.map((state, idx) => (
                            <ToggleButton
                                key={idx}
                                id={`radio-${idx}`}
                                type="radio"
                                variant={idx % 2 ? 'outline-success' : 'outline-danger'}
                                name="state"
                                value={state.value}
                                checked={stateValue === state.value}
                                onChange={(e) => {setStateValue(e.currentTarget.value); console.log(idx)}}
                            >
                                {state.name}
                            </ToggleButton>
                        ))}
                    </ButtonGroup>
                    {console.log(props.value.state === "active")}
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