import react, {useState, useEffect} from 'react'
import HeaderCreate from '../../MainPage/header'
import useWindowDimensions from '../../../utils/sizewindow';
import Sidebar from '../../MainPage/Sidebar';
import { Collapse, IconButton } from '@material-ui/core';
import { ArrowBack, ArrowForward, SearchOutlined } from '@material-ui/icons';
import { Button, Form, Image, InputGroup, Modal } from 'react-bootstrap';
import ToolkitProvider, { Search, CSVExport } from 'react-bootstrap-table2-toolkit';
import BootstrapTable from 'react-bootstrap-table-next';
import { useHistory } from 'react-router';
import  SearchData  from "../../../static/SearchStock.json"
import { apiGetAllTeamAccounts } from 'api/main_platform/competitions';
import { apiGetUser } from 'api/main_platform/users';

const { SearchBar, ClearSearchButton } = Search;

export default function TeamSearch({Pageprocess}){
    const {width,height} = useWindowDimensions();
    const [disable, setdisable] = useState(false)
    const [load, setload] = useState(false)
    const [teamdata,setteamdata] = useState([])
    const history= useHistory()
    const sendUserback = () => {history.push("/team/register")}


    const [scrollswitch, setScrollswitch] = useState(false);
  const [linkedInstitution, setLinkedInstitution] = useState("")
  const handleSearch = (propes) => {
    propes.onSearch(linkedInstitution.value);
};

const searchSwitch = () => {
    if (linkedInstitution.value != ""){
        setScrollswitch(true)
    }else{
        setScrollswitch(false)
    }
};


 useEffect(() =>{
     if (!load){
        getteamInformation()
        setload(true)
     }   
 },[load])



    const getteamInformation = async ( ) =>{
        try {
            const response = await apiGetAllTeamAccounts()
            const responsedata = response.data.data
            console.log(responsedata)
            try {
                const newPeopleArray = await Promise.all(responsedata.map(async function(team) {
                    const responseUser = await apiGetUser(team.leader);
                    const Leaderdata = responseUser.data.data;
                    console.log(Leaderdata)
                    return Leaderdata;
                }));
                console.log(newPeopleArray)
                for (i == 0; i < responsedata.length; i++) {

                }
            } catch (e) {
                console.log(e);
            }
        }catch(e){
            console.log(e)
        }
    }
    const columns = [
        {
            dataField:'id',
            text:'ID',
            headerAttrs: {
                hidden: true
              },
        },
        {
            dataField: 'avatar',
            text: '图片',
            sort: true,
            headerAttrs: {
                hidden: true
              },
        },
        {
            dataField: 'learder',
            text: '图片',
            sort: true,
            headerAttrs: {
                hidden: true
              },
        },
    ]

    return (
        <>
        {/* <HeaderCreate toggle = {toggle} />
      {isOpen?(<Sidebar isOpen = {isOpen} toggle={toggle}/>) : null} */}

         <div  style={{marginTop:height*0,width:"100%",display:"flex",justifyContent:"space-between", backgroundColor:"#F5F6F8"}}>

        <div style={{width:"48px",maxWidth:"18.75%"}}></div>
        <div style={{width:"1200px",minWidth:"fix-content",minHeight: "700px",
            minWidth: "fix-content",
            height:"max-content",
            marginBottom:"84px",
            }}>
                <div style={{marginTop:"48px",height:"111px", width:"100%"}}>
                    <div style={{paddingBottom:"24px",paddingTop:"48px", fontSize:"24px", fontFamily:"Microsoft YaHei U-Bold, Microsoft YaHei UI", fontWeight:"bold", color:"#2A2B30", lineHeight:"40px",letterSpacing:"1px"}}>
                     搜索团队
                    </div>
                </div>
                <div style={{height:"700px",width:"100%", backgroundColor:"white"}}>

                    <div style={{marginLeft:"24px", height:"8.57%"}}>
                        <IconButton onClick={() => sendUserback()} style={{paddingTop:"24px", paddingBottom:"16px"}}>
                            <ArrowBack/>
                        </IconButton>
                    </div>

                    
                    
                    

                    <div style={{marginTop:"136px",display:"flex", justifyContent:"center"}}>
                        <div style={{
                        fontSize:"20px",
                        fontFamily:"Microsoft YaHei UI-Bold, Microsoft YaHei UI;",
                        fontWeight:"bold",
                        color:"#2A2B30",
                        lineHeight:"40px",
                        letterSpacing:"1px",
                    }}>
                            搜索团队

                        </div>
                    </div>

                    <div style={{marginTop:"12px",display:"flex", justifyContent:"center"}}>
                    <Form style={{width:"360px",height:"48px"}} >
        <ToolkitProvider  
                      keyField="id"
                      data={ SearchData }
                      columns={ columns }  
                      search
                    >
                        {props => (
                    <div className="expanded-container">
                        <InputGroup  controlId="formBasicPassword">
                            <Button disable style={{height:"48px",background:"#F5F6F8",marginTop:"14px",borderRadius: "4px 0px 0px 4px",opacity: 1,borderWidth:"0px",color:"#2A2B30" }}><SearchOutlined/></Button>
                             <Form.Control
                             style={{height:"48px",background:"#F5F6F8",marginTop:"14px",borderRadius: "0px 4px 4px 0px",opacity: 1,borderWidth:"0px"}}
                             type="text"
                             placeholder="搜索/团队/队长"
                             ref={ n => setLinkedInstitution(n)}
                             onChange={() => {
                                 handleSearch({...props.searchProps});searchSwitch();
                        }
                    }     
                        />   
                        </InputGroup>          
                        <Collapse in= {scrollswitch}>
                         <div className ="scroll" style={{position:"absolute",marginLeft:"3%",zIndex:999, width:"300px",background: "white"}}>
                        <BootstrapTable 
                        { ...props.baseProps}
                         hover = {true}
                         condensed ={true}
                         sort={ { dataField: 'label', order: 'asc' } }       
                         classes ="custom-row-class"
                        />  
                        </div>
                       </Collapse>  
                                                  
                    </div>
                    )
                    }
                    </ToolkitProvider>


        </Form>
                    </div>

                    


                    <div style={{marginTop:"312px",display:"flex", justifyContent:"center"}}>

                    <Button disabled={disable} style ={{width:"288px",height:"48px", backgroundColor:disable? "#F5F6F8" : "linear-gradient(135deg, #2B8CFF 0%, #2346FF 100%)", 
                        border:"1px solid #F5F6F8", borderRadius:"4px 4px 4px 4px",
                        boxShadow:disable? null : "0px 1px 2px 1px rgba(35, 97, 255, 0.08), 0px 2px 4px 1px rgba(35, 97, 255, 0.08), 0px 4px 8px 1px rgba(35, 97, 255, 0.08), 0px 8px 16px 1px rgba(35, 97, 255, 0.08), 0px 16px 32px 1px rgba(35, 97, 255, 0.08)",
                        }}
                        onClick={() => Pageprocess()}
                        >
                            <div style={{display:"flex",justifyContent:"right"}}>
                            <div style={{
                                fontSize:"14px",
                                fontFamily:"Microsoft YaHei UI-Bold, Microsoft YaHei UI;",
                                fontWeight:"bold",
                                color: disable?"#C0C3CE" : "white",
                                lineHeight:"24px",
                                paddingRight:"95px"
                                }}>
                            下一步 
                            </div>
                            <ArrowForward style={{ color: disable?"#C0C3CE" : "white"}}/>

                            </div>                        
                            </Button>
                        
                    </div>
                </div>
        </div>
        <div style={{width:"48px",maxWidth:"18.75%"}}></div>
        </div>

        </>
        

    )
}