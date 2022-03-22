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

export default function WatchListTable(){
    const columns = [
        {
            dataField: 'symbol',
            text: '名称',
            sort: true,
            style: { width: '15%' }
        },
       
        {   
            dataField:'price',
            text: "价格/涨跌",
            sort: true,
            style: { width: '16%' },
            headerAlign: (column, colIndex) => 'right',
    
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
                fileName: '自选股票.csv',
                separator: '|',
                ignoreHeader: true,
                noAutoBOM: false
            }}
    >
    {
      props =>(
        <div>
          <div className="search-div">

            </div>
          <hr />
  
          
          <BootstrapTable
           { ...props.baseProps}
           bordered={ false }
            
            condensed 
            bootstrap4={true}
            hover={true}
            noDataIndication={indication}

            />

          
      
        

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