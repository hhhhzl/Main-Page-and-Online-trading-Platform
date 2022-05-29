import React, {useState} from "react"
import { Modal, Button, Card, Image } from "react-bootstrap";
import PorforlioMoveGraph from "../PortforlioMoveGraph";
import TeamInformationPage from "../TeamInformationPageCom";
import './competition.css'

export default function TeamModelIntro({show, handleClose}) {
    // const [show, setShow] = useState(true);
    // const handleClose = () => setShow(false);


    const data = [
        {
            username:"user1",
            school:"密歇根大学"
        },

        {
            username:"user2",
            school:"密歇根大学"
        },
        {
            username:"user3",
            school:"密歇根大学"
        },
        {
            username:"user4",
            school:"密歇根大学"
        },
    ]

    return (
        <>
        
           <Modal 
           show={show}
           onHide={handleClose} 
           centered 
           backdrop="static"
           size ="lg"
           keyboard={false} >
            
          <Modal.Header closeButton>

          </Modal.Header>
          <Modal.Body style ={{borderWidth:0}}>
              <TeamInformationPage/>   
          </Modal.Body>
          </Modal>
        </>

    )

}

