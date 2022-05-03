import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form'
import { Button, Col, Row, ButtonGroup, ToggleButton } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import { useDispatch, useSelector } from 'react-redux';

// Edit Button for Supervisor projects
export default function CompetitionInfo(props) {

    // Control Modal
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // Set the default variables in table
    const [id, setId] = useState(props.value.id);
    const [name, setName] = useState(props.value.name);
    const [regTime, setRegTime] = useState(props.value.registration_time);
    const [startTime, setStartTime] = useState(props.value.start_time);
    const [endTime, setEndTime] = useState(props.value.start_time);

    const [is_active, setIsActive] = useState(props.value.state);


    // Fake handleSubmit
    const handleSubmit = (event) => {
        setShow(false);
    }

    return (
        <> {/* Button appear at the right-end of each row of the table */}
            <Button variant="outline-primary" style={{ width: "100%" }} size='sm' onClick={handleShow} >
                修改赛事信息
            </Button>


            {/* Modal will apear after click the above Button */}
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>修改赛事信息</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form noValidate id="addProject">
                        <Form.Group className="mb-3" controlId="nomeaning">
                            <Form.Label>序号</Form.Label>
                            <Form.Control
                                required
                                size="lg"
                                type="text"
                                value={id}
                                onChange={e => {
                                    const id = e.target.value;
                                    setId(id)
                                }}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="nomeaning">
                            <Form.Label>赛事名称</Form.Label>
                            <Form.Control
                                required
                                size="lg"
                                type="text"
                                placeholder="请输入赛事名称"
                                value={name}
                                onChange={e => {
                                    const name = e.target.value;
                                    setName(name)
                                }}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="nomeaning">
                            <Form.Label>报名开始时间</Form.Label>
                            <Form.Control
                                required
                                size="lg"
                                type="text"
                                placeholder="请输入用户地区"
                                value={regTime}
                                onChange={e => {
                                    const regTime = e.target.value;
                                    setRegTime(regTime)
                                }}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="nomeaning">
                            <Form.Label>赛事开始时间</Form.Label>
                            <Form.Control
                                required
                                size="lg"
                                type="text"
                                placeholder="请输入用户邮箱地址"
                                value={startTime}
                                onChange={e => {
                                    const start_time = e.target.value;
                                    setStartTime(start_time)
                                }}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="nomeaning">
                            <Form.Label>赛事结束时间</Form.Label>
                            <Form.Control
                                required
                                size="lg"
                                type="text"
                                placeholder="请输入用户手机号码"
                                value={endTime}
                                onChange={e => {
                                    const end_time = e.target.value;
                                    setEndTime(end_time)
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