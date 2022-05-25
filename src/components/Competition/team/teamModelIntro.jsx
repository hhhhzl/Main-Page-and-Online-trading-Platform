import React, {useState} from "react"
import { Modal, Button, Card, Image } from "react-bootstrap";
import PorforlioMoveGraph from "../../screen/PortforlioMoveGraph";

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
              <Card style={{border:0}} > 
                  <Card.Body>
          <div style={{
        marginTop:"-10px",
        marginBottom:"24px",
        height:"40px",
        fontSize:"24px",
        fontFamily:"Microsoft YaHei UI-Bold, Microsoft YaHei UI;",
        fontWeight:"bold",
        color:"#2A2B30",
        lineHeight:"56px",
        letterSpacing:"1px",
        }}>团队名称</div>
        <div>
        <PorforlioMoveGraph widthratio ={700}/>
        </div>

        




        <div style={{height:"224px", display:"flex",justifyContent:"left",padding:"36px 0% 0% 0%"}}>

        {data.map((elem) => {
            return (
        <div style ={{width:"123px",textAlign:"center",}}>
        <Image
        src="/homeCutout/Mask group.png"
        roundedCircle
        style={{
          position: "relative",
          width: "96px",
          height: "96px",
        }}
      />
      <div style={{
          marginTop:"8px",
          height:"24px",
          fontSize:"16px",
          fontFamily:"Microsoft YaHei UI-Bold, Microsoft YaHei UI",
          fontWeight:"bold",
          color:"#2A2B30",
          lineHeight:"24px",
        }}>{elem.username}</div>
        
        <div style={{marginTop:"0px",
        height:"24px",
        fontSize:"14px",
        fontFamily:"Microsoft YaHei UI-Regular, Microsoft YaHei UI",
        fontWeight:"400",
        color:"#6E7184",
        lineHeight:"24px",
        }}>{elem.school}</div>



</div>
            )

        })}

        </div>
        </Card.Body>
        </Card>        
          </Modal.Body>
          </Modal>
        </>

    )

}

