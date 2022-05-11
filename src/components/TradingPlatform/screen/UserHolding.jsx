import data from '../../../static/holdingdata.json'
import React from "react";
import { Button } from "react-bootstrap";
import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider, { Search, CSVExport } from 'react-bootstrap-table2-toolkit';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { Collapse } from "react-bootstrap";
import { red } from '@material-ui/core/colors';
import {MoneyOffOutlined} from '@material-ui/icons'


const { SearchBar } = Search;
const { ExportCSVButton } = CSVExport;

function priceFormatter(column, colIndex) {
    return (
        <div style={{display:"fixed",flexDirection:"column"}}>{column.text}</div>
      
    );
  }

export default function UserHolding(){
    // =========================================================================
    // should pass the data to props
    // Its parent component should fetch user holding by user id from the server
    // =========================================================================

    const columns = [
        {
            dataField: 'symbol',
            text: '股票代码',
            sort: true,
            style: { width: '15%', position:"relative",zIndex:"1"},
            headerFormatter:priceFormatter
        },
        {
            dataField: 'holdingshares',
            text: "市值/数量",
            sort: true,
            style: { width: '16%' },
            formatter:(value,row) => {
                return(
                    <div>
                            <h6 style={{fontSize:"16px",textAlign:"right"}}>{(value * row.price).toFixed(2)}</h6>
                            <h6 style={{textAlign:"right",opacity:0.7}}>{value}</h6>
                
                    </div>
                )
            },
        },
        {
            dataField: 'price',
            text: "现价/成本",
            sort: true,
            style: { width: '18%' },
            formatter:(value,row) => {
                return(
                    <div>
                            <h6 style={{fontSize:"16px",textAlign:"center"}}>{value}</h6>
                            <h6 style={{textAlign:"center",opacity:0.7}}>{row.avgprice}</h6>
                
                    </div>
                )
            },
        },
        {   
            dataField:'price',
            text: "持仓盈亏",
            sort: true,
            style: { width: '16%' },
            formatter:(value,row) => {
                let balance = ((value-row.avgprice) * row.holdingshares).toFixed(2);
                let pl = (((value) / (row.avgprice) -1)*100).toFixed(2);
                return(
                    <div>
                        { balance < 0  ? (<>
                            <h6 style={{fontSize:"16px",textAlign:"right",color:"red"}}>{balance}</h6>
                            <h6 style={{textAlign:"right",opacity:0.7,color:"red"}}>{pl}%</h6></>
                        ) : (<><h6 style={{fontSize:"16px",textAlign:"right",color:"green"}}>{balance}</h6>
                        <h6 style={{textAlign:"right",opacity:0.7,color:"green"}}>{pl}%</h6></>)}
                    </div>
                )
            },
        },
        {
            dataField: 'position',
            text: '持仓占比',
            sort: true,
            style: { width: '16%' },
            formatter:(value) => {
                return(
                    <div>
                            <h6 style={{fontSize:"18px",textAlign:"center",paddingTop:"10%"}}>{value}%</h6>
                
                    </div>
                )
            },
        },
        {
            sort: true,
            style: { width: '8%' },
            formatter:() => {
                return(
                    <div>
                        <MoneyOffOutlined/>
                    </div>
                )
            },
        }


    ];

    const indication =()=>{
        return (
            <>
            <p style={{padding:"50px", textAlign:"center"}}>请先登录账号</p>
            </>
        )
    }

    return (
        <ToolkitProvider
            bootstrap4
            keyField="id"
            data={ data }
            columns={ columns }
            
            search
            exportCSV={ {
                fileName: '用户信息.csv',
                separator: '|',
                ignoreHeader: true,
                noAutoBOM: false
            }}
    >
    {
      props =>(
        <div>
          <div className="search-div">
            <SearchBar
                {...props.searchProps}
                      srText={false}
                      placeholder="搜索持有股票"
            />

            </div>
          <hr />
          <Collapse in= {true}>
             <div className ="scroll2">
          
          <BootstrapTable
           style="table"
           { ...props.baseProps}
           bordered={ false }
            hover
            condensed 
            noDataIndication={indication}
            />

          
          </div>
          </Collapse>
        

{/* <div className="search-div">
<ExportCSVButton 
    {...props.csvProps}>
      <Button>导出CSV</Button>
</ExportCSVButton>
</div> */}
</div>

        
                          
      )
         
         
    }
</ToolkitProvider>
    )
}