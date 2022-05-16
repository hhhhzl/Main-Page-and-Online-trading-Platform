import data from '../../static/tradingdata.json'
import React from "react";
import { Button } from "react-bootstrap";
import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider, { Search, CSVExport } from 'react-bootstrap-table2-toolkit';
import { Collapse } from "react-bootstrap";


const { SearchBar } = Search;
const { ExportCSVButton } = CSVExport;

export default function MarketTopGains(){
    const columns = [
        {
            dataField: 'symbol',
            text: '股票代码',
            sort: true,
        },
        {
            dataField: 'tradingDate',
            text: "交易时间",
            sort: true,
        },
        {
            dataField: 'tradingtype',
            text: "方向",
            sort: true,
            formatter:(value) => {
                return(
                    <div>
                        {value.toLowerCase() ==="sell" ? (
                            <h6 style={{color:"red"}}>{value}</h6>
                        ) : (<h6 style={{color:"green"}}>{value}</h6>)}
                    </div>
                )
                
            
      
            },
        },
        {
            dataField: 'shares',
            text: "股数",
            sort: true,
            

            
        },
        {
            dataField: 'price',
            text: "价格",
            sort: true,
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
                fileName: '用户信息.csv',
                separator: '|',
                ignoreHeader: true,
                noAutoBOM: false
            }}
    >
    {
      props =>(
        <div>
          <Collapse in= {true}>
             <div className ="scroll3">
          
          <BootstrapTable
           { ...props.baseProps}
            hover
            bordered={ false }
            condensed 
            noDataIndication={ indication }
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