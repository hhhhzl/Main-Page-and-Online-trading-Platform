import { useEffect, useState } from "react";

import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider from "react-bootstrap-table2-toolkit";

import { Card, Collapse } from "react-bootstrap";
import axios from "axios";
import "./plateCard.css";

import useWindowDimensions from "../../utils/sizewindow";

export default function PlateCard({
  dataSource,
  heightProp,
  stockData,
  index,
  handleShowDetails,
  indusAll,
  setfield
}) {
  const { width, height } = useWindowDimensions();
  const [data, setData] = useState([]);
  const [extend, setExtend] = useState(true);
  // const upColor = useState("#EC1421");
  // const downColor = useState("#16CE62");
  const columns = [
    {
      dataField: "代码",
      text: "股票代码",
      sort: true,
      style: {
        width: "15%",
        position: "relative",
        zIndex: "1",
        border: "none",
        padding: "12px 10px",
      },

      formatter: (value, row) => {
        return (
          <div>
            <h6 style={{ textAlign: "left" }} className="stock-text">
              {value}
            </h6>
          </div>
        );
      },
    },
    {
      dataField: "名称",
      text: "股票名称",
      sort: true,
      style: {
        width: "16%",
        border: "none",
        textAlign: "left",
        padding: "12px 10px",
      },
      formatter: (value, row) => {
        return (
          <div>
            <h6 style={{ textAlign: "left" }} className="stock-text">
              {value}
            </h6>
          </div>
        );
      },
    },

    {
      dataField: "最新价",
      text: "价格",
      sort: true,
      style: { width: "18%", border: "none", padding: "12px 0px" },
      formatter: (value, row) => {
        return (
          <div>
            <h6
              className="stock-text"
              style={{ fontFamily: "Futura", fontWeight: "500" }}
            >
              {value}
            </h6>
          </div>
        );
      },
    },

    {
      dataField: "涨跌幅",
      text: "涨跌幅",
      sort: true,
      style: { width: "16%", border: "none", padding: "12px 12px 12px 0px" },
      formatter: (value, row) => {
        return (
          <div>
            {value > 0 ? (
              <>
                <h6
                  className="stock-text"
                  style={{
                    fontFamily: "Futura",
                    fontWeight: "500",
                    color: "#EC1421", //红涨
                  }}
                >
                  +{value}%
                </h6>
              </>
            ) : (
              <>
                <h6
                  className="stock-text"
                  style={{
                    fontFamily: "Futura",
                    fontWeight: "500",
                    color: "#16CE62", //绿跌
                  }}
                >
                  {value}%
                </h6>
              </>
            )}
          </div>
        );
      },
    },
  ];

  return (
    <Card
      onClick={() => {handleShowDetails(indusAll);setfield(dataSource.板块名称)}}
      className="plate-card-container"
      style={{
        marginLeft:
          (index / 4) % 1 === 0 || width < 850
            ? "0px"
            : width < 1550 && index == 2
            ? "0px"
            : "",
      }}
    >
      <div className="plate-name-container">
        <div className="plate-name-text">{dataSource.板块名称}</div>
        {dataSource.涨跌幅 > 0 ? (
          <>
            <div
              className="plate-name-right"
              style={{
                color: "#EC1421",
              }}
            >
              +{dataSource.涨跌幅}%
            </div>
          </>
        ) : (
          <>
            <div
              className="plate-name-right"
              style={{
                color: "#16CE62",
              }}
            >
              {dataSource.涨跌幅}%
            </div>
          </>
        )}
      </div>

      {/* 中线 */}
      <div className="plate-line">
        <div
          className="plate-line-wrapper"
          style={{
            width:
              (dataSource.下跌家数 /
                (dataSource.下跌家数 +
                  dataSource.上涨家数 +
                  dataSource.不涨不跌家数)) *
                100 +
              "%",
            display: dataSource.下跌家数 == 0 ? "none" : "flex",
            justifyContent: "flex-start",
          }}
        >
          <div className="plate-line-down"></div>
          <div
            className="plate-line-text"
            style={{ textAlign: "start", color: "#16CE62" }}
          >
            {dataSource.下跌家数}
          </div>
        </div>
        <div
          className="plate-line-wrapper"
          style={{
            width:
              (dataSource.不涨不跌家数 /
                (dataSource.下跌家数 +
                  dataSource.上涨家数 +
                  dataSource.不涨不跌家数)) *
                100 +
              "%",
            margin: "0px 4px",
          }}
        >
          <div className="plate-line-center"></div>
          <div
            className="plate-line-text"
            style={{ textAlign: "center", color: "#9C9EAC" }}
          >
            {dataSource.不涨不跌家数}
          </div>
        </div>
        <div
          className="plate-line-wrapper"
          style={{
            width:
              (dataSource.上涨家数 /
                (dataSource.下跌家数 +
                  dataSource.上涨家数 +
                  dataSource.不涨不跌家数)) *
                100 +
              "%",
            display: dataSource.上涨家数 == 0 ? "none" : "flex",
            justifyContent: "flex-end",
          }}
        >
          <div className="plate-line-up"></div>
          <div
            className="plate-line-text"
            style={{ textAlign: "end", color: "#EC1421" }}
          >
            {dataSource.上涨家数}
          </div>
        </div>
      </div>

      {/* 表格 */}

      <div>
        <ToolkitProvider
          bootstrap4
          keyField="id"
          data={stockData}
          columns={columns}
          search
          key={0}
        >
          {(props) => (
            <div>
              <Collapse in={true}>
                <div
                  className="stock-table"
                  style={{
                    height: height * heightProp,
                    overflow: "auto",
                    marginBottom: "0px",
                    borderRadius: "4px 4px 4px 4px",
                    opacity: "1",
                  }}
                >
                  <BootstrapTable
                    style="table"
                    {...props.baseProps}
                    bordered={false}
                    hover
                    condensed

                    // noDataIndication={indication}
                  />
                </div>
              </Collapse>
            </div>
          )}
        </ToolkitProvider>{" "}
      </div>
    </Card>
  );
}
