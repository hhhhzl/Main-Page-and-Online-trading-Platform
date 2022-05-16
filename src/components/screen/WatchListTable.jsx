import data from '../../static/holdingdata.json'
import React from "react";
import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider, { Search, CSVExport } from 'react-bootstrap-table2-toolkit';
import useWindowDimensions from '../../utils/sizewindow';
import AreaChartWatchList from '../graphs/AreaTableForWatchList';


const { SearchBar } = Search;
const { ExportCSVButton } = CSVExport;

export default function WatchListTable(){
    const {width,height} = useWindowDimensions();
    const columns = [
        {
            dataField: 'symbol',
            text: '名称',
            sort: true,
            style:{width:"33%"},
            headerAttrs: {
                hidden: true
              },
            formatter: (cellContent, row) => {
     
                return (
                    <div style={{paddingTop:"23px", paddingBottom:"24px",paddingLeft:"36px",
                    fontSize:"16px",
                    fontFamily:"Microsoft YaHei UI-Bold",
                    fontWeight:"bold",
                    color:"#2A2B30",
                    lineHeight:"24px"}}> 
                    {row.symbol}
                    </div>
                );
            }
       
        },
        {
        dataField: 'symbol',
        isDummyField: true,
        style:{width:"33.3%"},
        headerAttrs: {
            hidden: true
          },
        formatter: (cellContent, row) => {
     
            return (
                <div style={{marginTop:"20px", marginBottom:"24px"}}> 
                <AreaChartWatchList width={100}/>
                </div>
            );
        }
      },
       
        {   
            dataField:'price',
            text: "价格/涨跌",
            sort: true,
            style:{width:"25%"},
            headerAttrs: {
                hidden: true
              },
            headerAlign: (column, colIndex) => 'right',
    
            formatter:(value,row) => {
                let balance = ((value-row.avgprice) * row.holdingshares).toFixed(2);
                let pl = (((value) / (row.avgprice) -1)*100).toFixed(2);
                return(
                    <div>
                        { balance < 0  ? (<>
                            <h6 style={{paddingTop:"12px", paddingBottom:"0px",fontSize:"16px",textAlign:"right", paddingRight:"30px",color:"#2A2B30",fontFamily: "Futura-Medium, Futura",fontWeight: "500"}}>{balance}</h6>
                            <h6 style={{textAlign:"right",paddingTop:"0px", fontSize:"14px",paddingRight:"30px",color:"#EC1421",fontFamily: "Futura-Medium, Futura",fontWeight: "500"}}>{pl}%</h6></>
                        ) : (<><h6 style={{textAlign:"right",paddingTop:"12px", fontSize:"16px",paddingRight:"30px",color:"#2A2B30",fontFamily: "Futura-Medium, Futura",fontWeight: "500"}}>{balance}</h6>
                        <h6 style={{textAlign:"right",paddingTop:"0px", fontSize:"14px",paddingRight:"30px",color:"green",fontFamily: "Futura-Medium, Futura",fontWeight: "#16CE62"}}>{pl}%</h6></>)}
                    </div>
                )
            },
        },
       


    ];

    const indication =()=>{
        return (
            <>
            <p style={{padding:"50px", textAlign:"center"}}>无数据</p>
            </>
        )
    }

    const rowStyle = { borderColor:"white" };

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
        <>
             <div style= {{height:"36px",marginTop:"12px",marginBottom:"12px",borderRadius: "4px 4px 4px 4px",opacity: "1"}}>
            <SearchBar

                {...props.searchProps}
                style={{background:"#F5F6F8", width:"288px",marginLeft:"11%",height:"36px",borderRadius: "4px 4px 4px 4px",opacity: "1",fontSize:"14px"
                ,fontFamily: "Microsoft YaHei UI-Regular, Microsoft YaHei UI",
                          fontWeight: "400",
                          color: "#C0C3CE",
                          lineHeight: "24px"}}
                      
                      srText={false}
                      placeholder="代码/名称/拼音"
                      
            />

            </div>

       

            <div style= {{maxHeight:height*0.6,overflow:"auto",marginTop:"12px",marginBottom:"0px",borderRadius: "4px 4px 4px 4px",opacity: "1"}}>
            <BootstrapTable
           { ...props.baseProps}
           bordered={ false }
            
            condensed 
            bootstrap4={true}
            hover={true}
            noDataIndication={indication}
            rowStyle={ rowStyle }
            />

            </div>
          

          
      
        

{/* <div className="search-div">
<ExportCSVButton 
    {...props.csvProps}>
      <Button>导出CSV</Button>
</ExportCSVButton>
</div> */}
</>

        
                          
      )
         
         
    }
</ToolkitProvider>
    )
}