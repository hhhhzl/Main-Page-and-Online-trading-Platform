import { useEffect, useState } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import { Collapse, Modal } from "react-bootstrap";
import data1 from "../../../static/pendingOrder1.json";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import useWindowDimensions from "../../../utils/sizewindow";

const { SearchBar } = Search;
export default function PendingOrderModal({
  showModal,
  searchwidth,
  modalHeight,
  hideModal
}) {
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
  const { width, height } = useWindowDimensions();
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
    </>
  );
}
