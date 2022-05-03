import React from "react";
import { Button } from "react-bootstrap";
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import ToolkitProvider, { Search, CSVExport } from 'react-bootstrap-table2-toolkit';
import data from "../expertInfo.json";
import ProgressBar from 'react-bootstrap/ProgressBar';
import { Collapse } from "react-bootstrap";
import UserInfo from "./userInfo";
import CheckUserHoding from "./userHolding";
import CheckUserTradingHistory from "./userTradingHistory";
import UserStateManagement from "./userStateManagement";

const { SearchBar } = Search;
const { ExportCSVButton } = CSVExport;

export default function UsersManageTable() {
  const columns = [
    {
      dataField: 'id',
      text: "序号",
      sort: true
    },
    {
      dataField: 'username',
      text: '用户名',
      sort: true
    },
    {
      dataField: 'school',
      text: "所在大学",
      sort: true,
    },
    {
      text: "查看用户",
      isDummyField: true,
      style: { width: '12%' },
      formatter: (cell, row) => {
        return (
          <div style={{
            margin: 0,
            position: "relative",
            textAlign: 'center',
            transform: "-moz-initial"
          }} >
            {/* <Button variant="outline-primary"  style={{width:"100%"}} size = 'sm'>
                          查看用户
                      </Button>{' '} */}
            {console.log(row)}
            <UserInfo value={row} />
          </div>
        )

      },
      events: {
        onClick: (e, column, columnIndex, row, rowIndex) => {
        }

      }
    },
    {
      text: "查看收益",
      isDummyField: true,
      style: { width: '12%' },
      formatter: (cell, row) => {
        return (
          <div style={{
            margin: 0,
            position: "relative",
            textAlign: 'center',
            transform: "-moz-initial"
          }} >
            {/* <Button variant="outline-primary" style={{width:"100%"}} size = 'sm'>
                          查看收益
                      </Button>{' '} */}
            <CheckUserHoding value={row.id} />
          </div>
        )

      },
      events: {
        onClick: (e, column, columnIndex, row, rowIndex) => {
        }

      }
    },
    {
      text: "交易记录",
      isDummyField: true,
      style: { width: '12%' },
      formatter: (cell, row) => {
        return (
          <div style={{
            margin: 0,
            position: "relative",
            textAlign: 'center',
            transform: "-moz-initial"
          }} >
            {/* <Button variant="outline-primary" style={{width:"100%"}}  size = 'sm'>
                          交易记录
                      </Button>{' '} */}
            <CheckUserTradingHistory value={row.id} />
          </div>
        )

      },
      events: {
        onClick: (e, column, columnIndex, row, rowIndex) => {
        }

      }
    },
    {
      text: "状态管理",
      isDummyField: true,
      style: { width: '12%' },
      formatter: (cell, row) => {
        return (
          <div style={{
            margin: 0,
            position: "relative",
            textAlign: 'center',
            transform: "-moz-initial"
          }} >
            {/* <Button variant="outline-primary" style={{width:"100%"}} size = 'sm'>
                          状态管理
                      </Button>{' '} */}
            <UserStateManagement value={row} />
          </div>
        )

      },
      events: {
        onClick: (e, column, columnIndex, row, rowIndex) => {
        }

      }
    },
  ];


  return (
    <div>
      <h2><Button size='lg'>添加用户/管理员</Button></h2>
      <ToolkitProvider
        bootstrap4
        keyField="id"
        data={data}
        columns={columns}
        search
        exportCSV={{
          fileName: '用户信息.csv',
          separator: '|',
          ignoreHeader: true,
          noAutoBOM: false
        }}
      >
        {
          props => (
            <div>
              <div className="search-div">
                <SearchBar
                  {...props.searchProps}
                  srText={false}
                  placeholder="搜索用户"
                />

              </div>
              <hr />
              <Collapse in={true}>
                <div className="scroll">

                  <BootstrapTable
                    {...props.baseProps}
                    striped
                    hover
                    condensed
                  />


                </div>
              </Collapse>


              <div className="search-div">
                <ExportCSVButton
                  {...props.csvProps}>
                  <Button>导出CSV</Button>
                </ExportCSVButton>
              </div>
            </div>



          )

        }
      </ToolkitProvider>

    </div>

  )
}