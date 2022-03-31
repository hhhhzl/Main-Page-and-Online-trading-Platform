import React from "react";
import { Button } from "react-bootstrap";
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import ToolkitProvider, { Search, CSVExport } from 'react-bootstrap-table2-toolkit';
import data from "./stock.json";
import ProgressBar from 'react-bootstrap/ProgressBar';
import { Collapse } from "react-bootstrap";
import useWindowDimensions from "../../../utils/sizewindow";
import StockStateManagement from "./StockManagement/stockStateManagement";
import StockSetting from "./StockManagement/stockSetting";

const { SearchBar } = Search;
const { ExportCSVButton } = CSVExport;

export default function StockManageTable(){
    const {height,width} = useWindowDimensions();
    const columns = [
        {
            dataField: 'id',
            style: { width: '10%'},
            text: "序号",
            sort: true
        },

        {
            dataField: 'stockname',
            text: '股票名',
            style: { width: '15%'},
            sort: true
        },
        {
            dataField: 'symbol',
            text: "股票代码",
            style: { width: '15%'},
            sort: true,
        },
        {
            text: "设置购买比例",
            isDummyField: true,
            style: { width: '20%'},
            formatter:(cell, row) => {
              return (
                  <div style={{margin: 0,
                      position: "relative",
                      textAlign: 'center',
                      transform: "-moz-initial"}} >
                      {/* <Button variant="outline-primary"  style={{width:"100%"}} size = 'sm'>
                          查看用户
                      </Button>{' '} */}
                      <StockSetting value={row} />
                  </div>
              )
    
          },
          events: {
            onClick: (e, column, columnIndex, row, rowIndex) => {
            }
            
          }
          },
          
          {
            text: "管理股票状态",
            isDummyField: true,
            style: { width: '20%'},
            formatter:(cell, row) => {
              return (
                  <div style={{margin: 0,
                      position: "relative",
                      textAlign: 'center',
                      transform: "-moz-initial"}} >
                      {/* <Button variant="outline-primary" style={{width:"100%"}} size = 'sm'>
                          状态管理
                      </Button>{' '} */}
                      <StockStateManagement value={row} />
                  </div>
              )
    
          },
          events: {
            onClick: (e, column, columnIndex, row, rowIndex) => {
            }
            
          }
          },
    ];
    

    return(
        <div>
            <h2><Button size='lg'>添加股票</Button></h2>
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
            <SearchBar
                {...props.searchProps}
                      srText={false}
                      placeholder="搜索股票"
            />

       
          <hr />
          <Collapse in= {true}>
             <div style={{maxHeight: (width>height) ? "25rem": "37rem", overflow:"auto"}} >
          
          <BootstrapTable
           { ...props.baseProps}
           striped
            hover
            condensed 
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
            
        </div>

    )
}