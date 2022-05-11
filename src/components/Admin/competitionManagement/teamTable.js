import React from "react";
import { Button } from "react-bootstrap";
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import ToolkitProvider, { Search, CSVExport } from 'react-bootstrap-table2-toolkit';
import data from "../expertInfo.json";
import ProgressBar from 'react-bootstrap/ProgressBar';
import { Collapse } from "react-bootstrap";
import UserInfo from "../userManagement/userInfo";
import CheckUserHoding from "../userManagement/userHolding";
import CheckUserTradingHistory from "../userManagement/userTradingHistory";
import UserStateManagement from "../userManagement/userStateManagement";
import { useParams } from "react-router";

const { SearchBar } = Search;
const { ExportCSVButton } = CSVExport;

export default function TeamTable() {

    // id: The id for each competition
    let id = window.location.pathname.substring(window.location.pathname.lastIndexOf('/')+1);

    const columns = [
        {
            dataField: 'id',
            text: "序号",
            sort: true
        },
        {
            dataField: 'name',
            text: '团队名称',
            sort: true
        },
        {
            dataField: 'leader',
            text: "队长",
            sort: true,
        },
        {
            text: "修改团队信息",
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
                        <UserInfo value={row} />
                    </div>
                )

            },
        },
        {
            text: "团队收益",
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
                        <CheckUserHoding value={row.id} />
                    </div>
                )

            },
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
                        <CheckUserTradingHistory value={row.id} />
                    </div>
                )

            },
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
                                    placeholder="搜索团队"
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