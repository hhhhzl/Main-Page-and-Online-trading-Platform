import React, { useState, useEffect } from 'react';
import { Button, Col, Row, ButtonGroup, ToggleButton } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form'
import { useDispatch, useSelector } from 'react-redux';

// Edit Button for Supervisor projects
export default function StockSetting(props) {

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
            <Button variant="outline-primary" style={{ width: "100%" }} size='sm' onClick={handleShow} >
                购买比例
            </Button>


            {/* Modal will apear after click the above Button */}
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>设置股票购买比例</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form noValidate validated={validated} id="addProject">
                        <Form.Group className="mb-3" controlId="nomeaning">
                            <Form.Label>购买比例 %</Form.Label>
                            <Form.Control
                                required
                                size="lg"
                                type="text"
                                placeholder="请输入用户名称"
                                value={proportion}
                                onChange={e => {
                                    const proportion = e.target.value;
                                    setProportion(proportion)
                                }}
                            />
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