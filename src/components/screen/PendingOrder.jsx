import { useEffect, useState } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import { Collapse, Modal } from "react-bootstrap";
import data from "../../static/pendingOrder.json";
import data1 from "../../static/pendingOrder1.json";
import { ArrowForwardIos } from "@material-ui/icons";
import ToolkitProvider, {
  Search,
  CSVExport,
} from "react-bootstrap-table2-toolkit";
import useWindowDimensions from "../../utils/sizewindow";

import "./pendingOrder.css";

const { SearchBar } = Search;
export default function PendingOrder({heightProp, searchwidth, modalHeight}) {
  const { width, height } = useWindowDimensions();
  const [current, setCurrent] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const changeCurrent = (index) => {
    setCurrent(index);
  };

  const orderColumns = [
    {
      dataField: "type",
      text: "状态",
      sort: true,
      style: { width: "16%", border: "none", padding: "12px 10px" },
      formatter: (value, row) => {
        return (
          <div>
            {value == "1" ? (
              <>
                <h6
                  style={{
                    color: "#EC1421",
                    fontSize: "14px",
                    fontFamily: "MicrosoftYaHeiUI",
                    fontWeight: "bold",
                    marginTop: "15px",
                  }}
                >
                  买入
                </h6>
              </>
            ) : (
              <>
                <h6
                  style={{
                    color: "#16CE62",
                    fontSize: "14px",
                    fontFamily: "MicrosoftYaHeiUI",
                    fontWeight: "bold",
                    marginTop: "15px",
                  }}
                >
                  卖出
                </h6>
              </>
            )}
          </div>
        );
      },
    },
    {
      dataField: "symbol",
      text: "股票名称",
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
            <h6
              style={{
                fontSize: "14px",
                fontFamily: "MicrosoftYaHeiUI",
                fontWeight: "bold",
                color: "#2A2B30",
                textAlign: "end",
              }}
            >
              {value[0]}
            </h6>
            <h6
              style={{
                fontSize: "14px",
                fontFamily: "Futura-Medium, Futura",
                fontWeight: "500",
                color: "#9C9EAC",
                textAlign: "end",
              }}
            >
              {value[1]}
            </h6>
          </div>
        );
      },
    },
    {
      dataField: "price",
      text: "挂单价格",
      sort: true,
      style: { width: "16%", border: "none" },
      formatter: (value, row) => {
        return (
          <div>
            <h6 className="simple-font" style={{ marginTop: "15px" }}>
              {value.toFixed(2)}
            </h6>
          </div>
        );
      },
    },

    {
      dataField: "orderCount",
      text: "单数",
      sort: true,
      style: { width: "18%", border: "none" },
      formatter: (value, row) => {
        return (
          <div>
            <h6 className="simple-font" style={{ marginTop: "15px" }}>
              {value}
            </h6>
          </div>
        );
      },
    },
    {
      dataField: "positionDate",
      text: "挂单时间",
      sort: true,
      style: { width: "16%", border: "none", paddingRight: "12px" },
      formatter: (value, row) => {
        return (
          <div>
            <h6 className="simple-font" style={{ marginBottom: "0px" }}>
              {value}
            </h6>
            <h6 className="simple-font" style={{ color: "#9C9EAC" }}>
              {row.positionHour}
            </h6>
          </div>
        );
      },
    },
  ];

  const columns = [
    {
      dataField: "symbol",
      text: "股票名称",
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
            <h6
              style={{
                fontSize: "14px",
                fontFamily: "MicrosoftYaHeiUI",
                fontWeight: "bold",
                color: "#2A2B30",
              }}
            >
              {value[0]}
            </h6>
            <h6
              style={{
                fontSize: "14px",
                fontFamily: "Futura-Medium, Futura",
                fontWeight: "500",
                color: "#9C9EAC",
              }}
            >
              {value[1]}
            </h6>
          </div>
        );
      },
    },
    {
      dataField: "holdingshares",
      text: "市值/数量",
      sort: true,
      style: { width: "16%", border: "none" },
      formatter: (value, row) => {
        return (
          <div>
            <h6 className="simple-font">{(value * row.price).toFixed(2)}</h6>
            <h6 className="simple-font" style={{ color: "#9C9EAC" }}>
              {value}
            </h6>
          </div>
        );
      },
    },

    {
      dataField: "price",
      text: "总盈亏",
      sort: true,
      style: { width: "16%", border: "none" },
      formatter: (value, row) => {
        let balance = ((value - row.avgprice) * row.holdingshares).toFixed(2);
        let pl = ((value / row.avgprice - 1) * 100).toFixed(2);
        return (
          <div>
            {balance < 0 ? (
              <>
                <h6 className="simple-font" style={{ color: "#EC1421" }}>
                  +{balance}
                </h6>
                <h6 className="simple-font" style={{ color: "#EC1421" }}>
                  +{pl}%
                </h6>
              </>
            ) : (
              <>
                <h6
                  className="simple-font"
                  style={{
                    color: "#16CE62",
                  }}
                >
                  -{balance}
                </h6>
                <h6 className="simple-font" style={{ color: "#16CE62" }}>
                  -{pl}%
                </h6>
              </>
            )}
          </div>
        );
      },
    },

    {
      dataField: "price",
      text: "成本/现价",
      sort: true,
      style: { width: "18%", border: "none" },
      formatter: (value, row) => {
        return (
          <div>
            <h6 className="simple-font" style={{ color: "#2A2B30" }}>
              {value}
            </h6>
            <h6 className="simple-font" style={{ color: "#9C9EAC" }}>
              {row.avgprice}
            </h6>
          </div>
        );
      },
    },
    {
      dataField: "position",
      text: "仓位",
      sort: true,
      style: { width: "16%", border: "none", paddingRight: "12px" },
      formatter: (value) => {
        return (
          <div>
            <h6 style={{ marginTop: "15px" }} className="simple-font">
              {value}%
            </h6>
          </div>
        );
      },
    },
  ];

  const recordColumns = [
    {
      dataField: "type",
      text: "状态",
      sort: true,
      style: { width: "16%", border: "none", padding: "12px 10px" },
      formatter: (value, row) => {
        return (
          <div>
            {value == "1" ? (
              <>
                <h6
                  style={{
                    color: "#EC1421",
                    fontSize: "14px",
                    fontFamily: "MicrosoftYaHeiUI",
                    fontWeight: "bold",
                    marginTop: "15px",
                  }}
                >
                  买入
                </h6>
              </>
            ) : (
              <>
                <h6
                  style={{
                    color: "#16CE62",
                    fontSize: "14px",
                    fontFamily: "MicrosoftYaHeiUI",
                    fontWeight: "bold",
                    marginTop: "15px",
                  }}
                >
                  卖出
                </h6>
              </>
            )}
          </div>
        );
      },
    },
    {
      dataField: "symbol",
      text: "股票名称",
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
            <h6
              style={{
                fontSize: "14px",
                fontFamily: "MicrosoftYaHeiUI",
                fontWeight: "bold",
                color: "#2A2B30",
                textAlign: "end",
              }}
            >
              {value[0]}
            </h6>
            <h6
              style={{
                fontSize: "14px",
                fontFamily: "Futura-Medium, Futura",
                fontWeight: "500",
                color: "#9C9EAC",
                textAlign: "end",
              }}
            >
              {value[1]}
            </h6>
          </div>
        );
      },
    },
    {
      dataField: "price",
      text: "成交价",
      sort: true,
      style: { width: "16%", border: "none" },
      formatter: (value, row) => {
        return (
          <div>
            <h6 className="simple-font" style={{ marginTop: "15px" }}>
              {value.toFixed(2)}
            </h6>
          </div>
        );
      },
    },

    {
      dataField: "orderCount",
      text: "单数",
      sort: true,
      style: { width: "18%", border: "none" },
      formatter: (value, row) => {
        return (
          <div>
            <h6 className="simple-font" style={{ marginTop: "15px" }}>
              {value}
            </h6>
          </div>
        );
      },
    },
    {
      dataField: "positionDate",
      text: "交易时间",
      sort: true,
      style: { width: "16%", border: "none", paddingRight: "12px" },
      formatter: (value, row) => {
        return (
          <div>
            <h6 className="simple-font" style={{ marginBottom: "0px" }}>
              {value}
            </h6>
            <h6 className="simple-font" style={{ color: "#9C9EAC" }}>
              {row.positionHour}
            </h6>
          </div>
        );
      },
    },
  ];

  const allRecordColumns = [
    {
      dataField: "type",
      text: "状态",
      sort: true,
      style: {
        width: "16%",
        border: "none",
        padding: "12px 10px",
        paddingLeft: "48px",
      },
      formatter: (value, row) => {
        return (
          <div>
            {value == "1" ? (
              <>
                <h6
                  style={{
                    color: "#EC1421",
                    fontSize: "14px",
                    fontFamily: "MicrosoftYaHeiUI",
                    fontWeight: "bold",
                    marginTop: "15px",
                  }}
                >
                  买入
                </h6>
              </>
            ) : (
              <>
                <h6
                  style={{
                    color: "#16CE62",
                    fontSize: "14px",
                    fontFamily: "MicrosoftYaHeiUI",
                    fontWeight: "bold",
                    marginTop: "15px",
                  }}
                >
                  卖出
                </h6>
              </>
            )}
          </div>
        );
      },
    },
    {
      dataField: "symbol",
      text: "股票名称",
      sort: true,
      style: {
        width: "15%",
        position: "relative",
        zIndex: "1",
        border: "none",
        padding: "12px 10px",
        textAlign: "start",
      },

      formatter: (value, row) => {
        return (
          <div>
            <h6
              style={{
                fontSize: "14px",
                fontFamily: "MicrosoftYaHeiUI",
                fontWeight: "bold",
                color: "#2A2B30",
              }}
            >
              {value[0]}
            </h6>
            <h6
              style={{
                fontSize: "14px",
                fontFamily: "Futura-Medium, Futura",
                fontWeight: "500",
                color: "#9C9EAC",
              }}
            >
              {value[1]}
            </h6>
          </div>
        );
      },
    },
    {
      dataField: "price",
      text: "成交价",
      sort: true,
      style: { width: "16%", border: "none", paddingRight: "12px" },
      formatter: (value, row) => {
        return (
          <div>
            <h6 className="simple-font" style={{ marginTop: "15px" }}>
              {value.toFixed(2)}
            </h6>
          </div>
        );
      },
    },

    {
      dataField: "orderCount",
      text: "单数",
      sort: true,
      style: { width: "18%", border: "none", paddingRight: "12px" },
      formatter: (value, row) => {
        return (
          <div>
            <h6 className="simple-font" style={{ marginTop: "15px" }}>
              {value}
            </h6>
          </div>
        );
      },
    },
    {
      dataField: "positionDate",
      text: "交易时间",
      sort: true,
      style: { width: "16%", border: "none", paddingRight: "48px" },
      formatter: (value, row) => {
        return (
          <div>
            <h6 className="simple-font" style={{ marginBottom: "0px" }}>
              {value}
            </h6>
            <h6 className="simple-font" style={{ color: "#9C9EAC" }}>
              {row.positionHour}
            </h6>
          </div>
        );
      },
    },
  ];

  const hideModal = () => {
    setShowModal(false);
  };
  const openModal = () => {
    setShowModal(true);
  };

  useEffect(() => {});

  return (
    <>
      <Modal
        show={showModal}
        onHide={hideModal}
        centered
        className="pending-order-modal"
      >
        <Modal.Header closeButton></Modal.Header>
        <ToolkitProvider
          bootstrap4
          keyField="id"
          data={data1}
          columns={allRecordColumns}
          search
          exportCSV={{
            separator: "|",
            ignoreHeader: true,
            noAutoBOM: false,
          }}
        >
          {(props) => (
            <>
              <div
                style={{
                  // width: "80%",
                  marginLeft: "48px",
                  height: "36px",
                  // marginTop: "38px",
                  marginBottom: "24px",
                  borderRadius: "4px 4px 4px 4px",
                  opacity: "1",
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                }}
              >
                <div className="record-modal-title">交易记录</div>
                <SearchBar
                  {...props.searchProps}
                  style={{
                    background: "#F5F6F8",
                    width: searchwidth * 0.8,
                    height: "36px",
                    borderRadius: "4px 4px 4px 4px",
                    opacity: "1",
                    fontSize: "14px",
                    fontFamily:
                      "Microsoft YaHei UI-Regular, Microsoft YaHei UI",
                    fontWeight: "400",
                    color: "#C0C3CE",
                    lineHeight: "24px",
                    marginLeft: "100px",
                  }}
                  srText={false}
                  placeholder="代码/名称/拼音"
                />
              </div>

              <div
                className="pending-order-table-modal"
                style={{
                  height: height * modalHeight,
                  overflow: "auto",
                  marginBottom: "0px",
                  borderRadius: "4px 4px 4px 4px",
                  opacity: "1",
                }}
              >
                <BootstrapTable
                  {...props.baseProps}
                  bordered={false}
                  condensed
                  bootstrap4={true}
                  hover={true}
                  // rowStyle={rowStyle}
                />
              </div>
            </>
          )}
        </ToolkitProvider>
      </Modal>

      <div className="pending-container">
        <div className="pending-order-wrapper">
          <div className="pending-order-tabs">
            <div
              onClick={() => changeCurrent(0)}
              className={current == 0 ? "active-font" : "normal-font"}
            >
              持仓
            </div>
            <div
              style={{ margin: "0px 24px" }}
              onClick={() => changeCurrent(1)}
              className={current == 1 ? "active-font" : "normal-font"}
            >
              当前挂单
            </div>
            <div
              onClick={() => changeCurrent(2)}
              className={current == 2 ? "active-font" : "normal-font"}
            >
              交易记录
            </div>
          </div>

          <div
            className="order-flex"
            style={{ display: current == 2 ? "flex" : "none" }}
            onClick={openModal}
          >
            <div className="all-order-text" >
              全部
            </div>
            <div className="order-flex">
              <ArrowForwardIos className="all-order-icon"></ArrowForwardIos>
            </div>
          </div>
        </div>

        <>
          {current == 0 ? (
            <>
              <ToolkitProvider
                bootstrap4
                keyField="id"
                data={data}
                columns={columns}
                search
                key={0}
              >
                {(props) => (
                  <div>
                    <hr style={{ marginBottom: "0px" }} />
                    <Collapse in={true}>
                      <div
                        className="pending-order-table"
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
            </>
          ) : current == 1 ? (
            <>
              <ToolkitProvider
                key={1}
                bootstrap4
                keyField="id"
                data={data1}
                columns={orderColumns}
                search
              >
                {(props) => (
                  <div>
                    <hr style={{ marginBottom: "0px" }} />
                    <Collapse in={true}>
                      <div
                        className="pending-order-table"
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
                        />
                      </div>
                    </Collapse>
                  </div>
                )}
              </ToolkitProvider>{" "}
            </>
          ) : (
            <>
              <ToolkitProvider
                key={2}
                bootstrap4
                keyField="id"
                data={data1}
                columns={recordColumns}
                search
              >
                {(props) => (
                  <div>
                    <hr style={{ marginBottom: "0px" }} />
                    <Collapse in={true}>
                      <div
                        className="pending-order-table"
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
                        />
                      </div>
                    </Collapse>
                  </div>
                )}
              </ToolkitProvider>{" "}
            </>
          )}
        </>
      </div>
    </>
  );
}
