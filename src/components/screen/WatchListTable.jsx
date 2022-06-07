import data from "../../static/holdingdata.json";
import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider, {
  Search,
  CSVExport,
} from "react-bootstrap-table2-toolkit";
import useWindowDimensions from "../../utils/sizewindow";
import AreaChartWatchList from "../graphs/AreaTableForWatchList";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { updateStock } from "redux/reducers/Stock/stockReducer";

const { SearchBar } = Search;
const { ExportCSVButton } = CSVExport;

export default function WatchListTable({ heightratio, searchwidth, watchlistdata, platformType}) {
  const { width, height } = useWindowDimensions();
  const dispatch = useDispatch()
  let history = useHistory()
  const columns = [
    {
      dataField: "名称",
      text: "名称",
      sort: true,
      style: { width: "33%" },
      headerAttrs: {
        hidden: true,
      },
      formatter: (cellContent, row) => {
        return (
          <div
            style={{
              paddingTop: "23px",
              paddingBottom: "24px",
              paddingLeft: "36px",
              fontSize: "16px",
              fontFamily: "Microsoft YaHei UI-Bold",
              fontWeight: "bold",
              color: "#2A2B30",
              lineHeight: "24px",
            }}
          >
            {row.名称}
          </div>
        );
      },
    },
    {
      dataField: "名称",
      isDummyField: true,
      style: { width: "33.3%" },
      headerAttrs: {
        hidden: true,
      },
      formatter: (cellContent, row) => {
        return (
          <div style={{ marginTop: "20px", marginBottom: "24px" }}>
            <AreaChartWatchList width={100} />
          </div>
        );
      },
    },

    {
      dataField: "最新价",
      text: "最新价",
      sort: true,
      style: { width: "25%" },
      headerAttrs: {
        hidden: true,
      },
      headerAlign: (column, colIndex) => "right",

      formatter: (value, row) => {
        let balance = ((value - row.avgprice) * row.holdingshares).toFixed(2);
        let pl = ((value / row.avgprice - 1) * 100).toFixed(2);
        return (
          <div>
              
                <h6
                  style={{
                    paddingTop: "12px",
                    paddingBottom: "0px",
                    fontSize: "16px",
                    textAlign: "right",
                    paddingRight: "30px",
                    color: "#2A2B30",
                    fontFamily: "Futura",
                    fontWeight: "500",
                  }}
                >
                  {row.最新价}
                </h6>
                <h6
                  style={{
                    textAlign: "right",
                    paddingTop: "0px",
                    fontSize: "14px",
                    paddingRight: "30px",
                    color: row.涨跌幅>0? "#EC1421" : "#16CE62",
                    fontFamily: "Futura",
                    fontWeight: "500",
                  }}
                >
                  {row.涨跌幅>0? <>+{row.涨跌幅}%</>: <>{row.涨跌幅}%</> }
                </h6>
          </div>
        );
      },
    },
  ];

  const selectRow = {
    mode: 'radio',
    clickToSelect: true,
    hideSelectAll:true,
    hideSelectColumn: true,
    style:{background:"#F5F6F8"},
    onSelect: (row, isSelect, rowIndex, e) => {
      if (isSelect){
          dispatch(updateStock(row.代码))
          history.push(`/${platformType}/trade`)
      }else{     
        
      }
    },
    
  };

  const rowStyle = { borderColor: "white" };

  return (

    <> 
    <ToolkitProvider
      bootstrap4
      keyField="代码"
      data={watchlistdata? watchlistdata : []}
      columns={columns}
      search
      exportCSV={{
        fileName: "自选股票.csv",
        separator: "|",
        ignoreHeader: true,
        noAutoBOM: false,
      }}
    >
      {(props) => (
        <>
          <div
            style={{
              width: "80%",
              marginLeft: "10%",
              height: "36px",
              marginTop: "12px",
              marginBottom: "12px",
              borderRadius: "4px 4px 4px 4px",
              opacity: "1",
            }}
          >
            <SearchBar
              {...props.searchProps}
              style={{
                background: "#F5F6F8",
                width: searchwidth * 0.8,
                height: "36px",
                borderRadius: "4px 4px 4px 4px",
                opacity: "1",
                fontSize: "14px",
                fontFamily: "Microsoft YaHei UI-Regular, Microsoft YaHei UI",
                fontWeight: "400",
                color: "#C0C3CE",
                lineHeight: "24px",
              }}
              srText={false}
              placeholder="代码/名称/拼音"
            />
          </div>

          <div
            style={{
              height: height * heightratio,
              overflow: "auto",
              marginTop: "12px",
              marginBottom: "0px",
              borderRadius: "4px 4px 4px 4px",
              opacity: "1",
            }}>

         
            {watchlistdata?.length>0? <>
              <BootstrapTable
              {...props.baseProps}
              bordered={false}
              condensed
              bootstrap4={true}
              hover={true}
              // noDataIndication={indication}
              rowStyle={rowStyle}
              selectRow={selectRow}
            />
            
            
            </> 
            :
             <div style={{display:"flex",
             justifyContent:"center",
             marginTop:height * heightratio*0.35,
             }}>
               <div style={{
                 color:"#C0C3CE",
                 width: "169px",
                 height: "24px",
                 fontSize: "14px",
                 fontFamily: "Microsoft YaHei UI-Regular, Microsoft YaHei UI",
                 fontWeight: 400,
                 color: "#C0C3CE",
                 lineHeight: "24px",
               }}>
               您的自选列表空空如也~~
               </div>
               
               </div>

            }
            </div>
           
          

          {/* <div className="search-div">
<ExportCSVButton 
    {...props.csvProps}>
      <Button>导出CSV</Button>
</ExportCSVButton>
</div> */}
        </>
      )}
    </ToolkitProvider>    
    </>
  );
}
