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

export default function TeamSearch({Pageprocess, setteamid}){
    const {width,height} = useWindowDimensions();
    const [disable, setdisable] = useState(false)
    const [load, setload] = useState(false)
    const [teamdata,setteamdata] = useState([])
    const [submitable,setsubmitable] = useState(false)
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
                    return Leaderdata;
                }));
                console.log(newPeopleArray)
                const teamlist = []
                for (let i = 0; i < responsedata.length; i++) {
                    const LeaderInfo = newPeopleArray[i]
                    const teamInfo = responsedata[i]
                    teamInfo.leadername = LeaderInfo.last_name
                    teamInfo.leaderemail = LeaderInfo.email
                    teamlist.push(teamInfo)
                  }
                setteamdata(teamlist)

            } catch (e) {
                console.log(e);
            }
        }catch(e){
            console.log(e)
        }
    }
    const columns = [
        {
            dataField: 'avatar',
            text: '图片',
            sort: true,
            style: { width: "14.4%" },
            headerAttrs: {
                hidden: true
              },
            formatter: (value, row) =>{
                return (
                    <>
                    <div style={{display:"flex",justifyContent:"right"}}>
                    <Image src={value} rounded style={{width:"36px",height:"36px"}}/>
                    </div>
                    </>
                )
            }
        },
        {
            dataField: 'name',
            text: '团队名称',
            sort: true,
            style: { width: "100%" },
            headerAttrs: {
                hidden: true
              },
              formatter: (value,row) =>{
                return (
                    <>
                    <div>{value}</div> 
                    <div style={{display:"flex",justifyContent:"left"}}>
                    <div style={{marginRight:"0px"}}>{row.leadername} · {"主观赛道"} · {row.leaderemail}</div> 
                    {/* <div style={{marginRight:"7px"}}></div>
                    <div style={{marginRight:"7px"}}></div>    */}
                    </div> 
                            
                    </>
                )
            }
        },
        {
            dataField: 'leadername',
            text: '队长名称',
            sort: true,
            style: { width: "0%" },
            hidden: true,
            headerAttrs: {
                hidden: true
              },
              formatter: (value,row) =>{
                return (
                    <>
                            
                    </>
                )
            }
        },
        {
            dataField: 'leaderemail',
            text: '队长邮箱',
            sort: true,
            style: { width: "0%" },
            hidden: true,
            headerAttrs: {
                hidden: true
              },
              formatter: (value,row) =>{
                return (
                    <>
                            
                    </>
                )
            }
        },
    ]

    const selectRow = {
        mode: 'radio',
        clickToSelect: true,
        hideSelectAll:true,
        hideSelectColumn: true,
        style:{background:"#E7ECFD"},
        selected: [],
        onSelect: (row, isSelect, rowIndex, e) => {
            if (isSelect){
                setLinkedInstitution({value:row.name})
                setteamid(row.id)
                setScrollswitch(false)
                setsubmitable(true)
            }else{

            }  
            
          },
      };

      const nextbuttonSubmit = () =>{
          if (submitable && typeof(linkedInstitution) === 'object'){
              Pageprocess()
          }else{
              alert("队伍名称错误，请重新搜索")
          }
      }

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
                      keyField="name"
                      data={ teamdata? teamdata :null }
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
                             value={linkedInstitution.value}
                             ref={ n => setLinkedInstitution(n)}
                             onChange={() => {
                                 handleSearch({...props.searchProps});
                                 searchSwitch();
                        }
                    }     
                        />   
                        </InputGroup>          
                        <Collapse in= {scrollswitch}>
                         <div style={{position:"absolute",height:"250px",marginLeft:"0px",zIndex:999, width:"360px",background: "white", overflow:"scroll",borderRadius: "4px 4px 4px 4px",border: "1px solid #C0C3CE"}}>
                        <BootstrapTable 
                        { ...props.baseProps}
                         hover = {true}
                         condensed ={true}
                         selectRow={selectRow}
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
                        onClick={() => nextbuttonSubmit()}
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