import data from '../../static/tradingdata.json'
import React from "react";
import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider, { Search, CSVExport } from 'react-bootstrap-table2-toolkit';
import { Collapse } from "react-bootstrap";

const { SearchBar } = Search;
const { ExportCSVButton } = CSVExport;

export default function UserTradingHistory(){
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
                fileName: '交易记录.csv',
                separator: '|',
                ignoreHeader: true,
                noAutoBOM: false
            }}
    >
    {
      props =>(
        <div >
          <div className="search-div">
            <SearchBar
                {...props.searchProps}
                      srText={false}
                      placeholder="搜索交易记录"
            />

            </div>
          <hr />
          <Collapse in= {true}>
             <div className ="scroll2">
          
          <BootstrapTable
           { ...props.baseProps}
            hover
            striped
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