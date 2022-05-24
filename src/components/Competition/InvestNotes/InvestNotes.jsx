import React, { useState, useEffect, useRef } from "react";
import PageHeader from "../../screen/PageHeader";
import useWindowDimensions from "../../../utils/sizewindow";
import { Form, Button, Image } from "react-bootstrap";
import GoodToShare from "./GoodToShare";
import CommitRecord from './CommitRecord'
import "./InvestNotes.css";
// import StockPriceGraphSimplify from "../../../screen/StockPriceGraphSimplify";
// import StockTradeBar from "../../../screen/StockTradeBar";
// import StockTradeComponet from "../../../screen/StockTradeComponet";
// import WatchList from "../../../screen/WatchList";
// import PendingOrder from "../../../screen/PendingOrder";
// import KeyIndicators from "../../../screen/KeyIndicatorSimple";

export default function InvestNotes(props) {
  const { width, height } = useWindowDimensions();
  const [fileList, setFileList] = useState([]);
  const [hasFile, setHasFile] = useState(0);
  const uploadFile = React.createRef();
  const listRef = useRef();
  const [current, setCurrent] = useState(0);
  const changeCurrent = (index) => {
    setCurrent(index);
  };

  const chooseFile = () => {
    uploadFile.current.click();
  };

  const fileChange = (e) => {
    let file = e.target.files;
    console.log(uploadFile);
    console.log(e.target.files);

    let formData = new FormData();
    if (file.length != 0) {
      for (let i = 0; i < file.length; i++) {
        // console.log();
        let suffixArr = file[i].name.split(".");
        let suffix = suffixArr[suffixArr.length - 1];
        console.log(suffix);
        if (suffix == "pdf" || suffix == "docx" || suffix == "doc") {
          fileList.push(file[i]);
        } else {
          alert("文件格式错误");
        }
      }
    } else {
      formData.append("file", "");
    }
    setFileList([...fileList]);
    console.log(fileList);
    // fetch("/notice/send", {
    //   method: "POST",
    //   headers: new Headers({
    //     "Access-Control-Allow-Origin": "*",
    //   }),
    //   contentType: false,
    //   processData: false,
    //   body: formData,
    // })
    //   .then((res) => {
    //     return res.json().then((response) => {
    //       console.log(response);
    //     });
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });
  };

  const fileSizeByteToM = (size) => {
    let data = "";
    if (size < 0.1 * 1024) {
      //如果小于0.1KB转化成B
      data = size.toFixed(2) + "B";
    } else if (size < 0.1 * 1024 * 1024) {
      //如果小于0.1MB转化成KB
      data = (size / 1024).toFixed(2) + "KB";
    } else if (size < 0.1 * 1024 * 1024 * 1024) {
      //如果小于0.1GB转化成MB
      data = (size / (1024 * 1024)).toFixed(2) + "MB";
    } else {
      //其他转化成GB
      data = (size / (1024 * 1024 * 1024)).toFixed(2) + "GB";
    }
    let sizestr = data + "";
    let len = sizestr.indexOf(".");
    let dec = sizestr.substr(len + 1, 2);
    if (dec == "00") {
      //当小数点后为00时 去掉小数部分
      return sizestr.substring(0, len) + sizestr.substr(len + 3, 2);
    }
    return sizestr;
  };

  // const publish = () => {
  //   var file = document.getElementById("file");
  //   var formData = new FormData();
  //   if (file.files.length != 0) {
  //     for (var i = 0; i < file.files.length; i++) {
  //       formData.append("image", file.files[i]);
  //     }
  //   } else {
  //     formData.append("image", "");
  //   }
  //   fetch("/notice/send", {
  //     method: "POST",
  //     headers: new Headers({
  //       "Access-Control-Allow-Origin": "*",
  //       "User-Token": this.state.token,
  //     }),
  //     contentType: false,
  //     processData: false,
  //     body: formData,
  //   })
  //     .then((res) => {
  //       return res.json().then((response) => {
  //         console.log(response);
  //       });
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // };

  return (
    <>
      <PageHeader />
      <div
        style={{
          paddingTop: height * 0.075,
          width: "100%",
          minHeight: "500px",
          display: "flex",
          justifyContent: "center",
          background: "#F5F6F8",
        }}
      >
        <div
          style={{ width: "auto", minHeight: "500px", maxWidth: "18.75%" }}
        ></div>

        <div
          style={{
            width: "1200px",
            minHeight: "700px",
            minWidth: "fix-content",
            display: "flex",
            alignItems: "baseline",
            flexDirection: "column",
          }}
          ref={listRef}
        >
          <div className="pending-order-tabs">
            <div
              onClick={() => changeCurrent(0)}
              className={current == 0 ? "active-font" : "normal-font"}
            >
              上传文件
            </div>
            <div
              style={{ margin: "0px 24px" }}
              onClick={() => changeCurrent(1)}
              className={current == 1 ? "active-font" : "normal-font"}
            >
              提交记录
            </div>
            <div
              onClick={() => changeCurrent(2)}
              className={current == 2 ? "active-font" : "normal-font"}
            >
              优秀分享
            </div>
          </div>

          <>
            {current == 0 ? (
              <>
                <div className="file-upload-wrapper">
                  <div className="file-upload-text">
                    <div>
                      重要文案重要文案重要文案重要文案重要文案重要文案重要文案重要文案重要文案
                    </div>
                    <div>
                      重要文案重要文案重要文案重要文案重要文案重要文案重要文案重要文案重要文案重要文案重要文案重要文案重要文案重要文案
                    </div>
                    <div>重要文案重要文案重要文案重要文案重要文案重要文案</div>
                  </div>

                  <div className="upload-btn">
                    {/* <Form >
                <Form.Group >
                  <Form.Control
                    type="file"
                  />
                </Form.Group>
              </Form> */}

                    <Button
                      type="primary"
                      className="publish-upload-file"
                      onClick={chooseFile}
                    >
                      <Image
                        src="/Frame.png"
                        style={{ width: "22px", height: "22px" }}
                      />
                      <span className="publish-upload-file-text">上传 PDF</span>
                      <input
                        ref={uploadFile}
                        type="file"
                        id="file"
                        multiple
                        hidden
                        onChange={fileChange}
                      />
                    </Button>
                  </div>

                  {fileList.map((item, index) => (
                    <div className="upload-list">
                      <div className="flie-list">
                        <div className="file-icon">
                          <Image
                            src="/Frame1.png"
                            style={{ width: "36px", height: "36px" }}
                          />
                        </div>
                        <div className="file-message">
                          <div className="file-name">{item.name}</div>
                          <div className="file-size">
                            {fileSizeByteToM(item.size)}
                          </div>
                        </div>

                        <div className="delete-wrapper">
                          <Image
                            src="/Frame-delete.png"
                            style={{ width: "22px", height: "22px" }}
                          />
                        </div>
                      </div>
                    </div>
                  ))}

                  <div className="file-submit-btn">
                    <Button
                      disabled={fileList.length <= 0}
                      className="upload-file-submit-btn"
                      style={{
                        background:
                          fileList.length > 0
                            ? "linear-gradient(135deg, #2B8CFF 0%, #2346FF 100%)"
                            : "#F5F6F8",
                        color: fileList.length > 0 ? "#FFFFFF" : "#C0C3CE",
                        boxShadow: "none",
                      }}
                    >
                      提交
                    </Button>
                  </div>
                </div>
              </>
            ) : current == 1 ? (
              <>
				<CommitRecord></CommitRecord>
			  </>
            ) : (
              <>
                <GoodToShare></GoodToShare>
              </>
            )}
          </>
        </div>
      </div>
    </>
  );
}
