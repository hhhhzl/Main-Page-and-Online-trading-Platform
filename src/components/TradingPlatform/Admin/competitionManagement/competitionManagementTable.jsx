import React from "react";
import { Button } from "react-bootstrap";
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import { Switch, Route, Router, useRouteMatch } from "react-router-dom";
import ToolkitProvider, { Search, CSVExport } from 'react-bootstrap-table2-toolkit';
import data from "../competition.json";
import ProgressBar from 'react-bootstrap/ProgressBar';
import { Collapse } from "react-bootstrap";
import useWindowDimensions from "../../../../utils/sizewindow";
import CompetitionInfo from "./competitionInfo";
import { Link } from "react-router-dom";

// const { SearchBar } = Search;
// const { ExportCSVButton } = CSVExport;

export default function CompetitionManageTable() {
    let match = useRouteMatch();
    const { height, width } = useWindowDimensions();
    const columns = [
        {
            dataField: 'id',
            style: { width: '10%' },
            text: "序号",
            sort: true
        },

        {
            dataField: 'name',
            text: '赛事名称',
            style: { width: '15%' },
            sort: true
        },
        {
            dataField: 'registration_time',
            text: "报名开始时间",
            style: { width: '15%' },
            sort: true,
        },
        {
            dataField: 'start_time',
            text: "赛事开始时间",
            style: { width: '15%' },
            sort: true,
        },
        {
            dataField: 'end_time',
            text: "赛事结束时间",
            style: { width: '15%' },
            sort: true,
        },
        {
            text: "报名团队信息",
            isDummyField: true,
            style: { width: '15%' },
            formatter: (cell, row) => {
                return (
                    <div style={{
                        margin: 0,
                        position: "relative",
                        textAlign: 'center',
                        transform: "-moz-initial"
                    }} >
                        <Link to={`${match.path}/${row.id}`}>
                            <Button variant="outline-primary" style={{ width: "100%" }} size='sm'>
                                团队信息
                            </Button>
                        </Link>
                    </div>
                )
            },
        },
        {
            text: "更改赛事信息",
            isDummyField: true,
            style: { width: '15%' },
            formatter: (cell, row) => {
                return (
                    <div style={{
                        margin: 0,
                        position: "relative",
                        textAlign: 'center',
                        transform: "-moz-initial"
                    }} >
                        <CompetitionInfo value={row} />
                    </div>
                )
            },
        },
    ];


    return (
        <div>
            <h2><Button size='lg'>添加赛事</Button></h2>
            <ToolkitProvider
                bootstrap4
                keyField="id"
                data={data}
                columns={columns}
                search
                exportCSV={{
                    fileName: '赛事信息.csv',
                    separator: '|',
                    ignoreHeader: true,
                    noAutoBOM: false
                }}
            >
                {
                    props => (
                        <div>
                            {/* ========================= */}
                            {/* 因赛事数量较少，默认不需要搜索 */}
                            {/* ========================= */}
                            {/* <SearchBar
                {...props.searchProps}
                      srText={false}
                      placeholder="搜索赛事"
            /> */}


                            <hr />
                            <Collapse in={true}>
                                <div style={{ maxHeight: (width > height) ? "25rem" : "37rem", overflow: "auto" }} >

                                    <BootstrapTable
                                        {...props.baseProps}
                                        striped
                                        hover
                                        condensed
                                    />


                                </div>
                            </Collapse>

                        </div>
                    )
                }
            </ToolkitProvider>

        </div>

    )
}