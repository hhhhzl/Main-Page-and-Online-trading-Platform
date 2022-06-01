import React, { useState, useEffect, useRef } from "react";
import PageHeader from "../../screen/PageHeader";
import useWindowDimensions from "../../../utils/sizewindow";
import { Form, Button, Image } from "react-bootstrap";
import GoodToShare from "./GoodToShare";
import CommitRecord from "./CommitRecord";
import "./InvestNotes.css";
import Countdown from "../../screen/modal/countdown";
import { timeDifference } from "../../../utils/countdownUtil";
import {getFileName,changeUnit} from "../../../utils/index"

export default function InvestNotes({searchData}) {
  const { width, height } = useWindowDimensions();
  const [fileList, setFileList] = useState([]);
  const uploadFile = React.createRef();
  const listRef = useRef();

  const [showModal, setShowModal] = useState(
    timeDifference() > 0 ? true : false
  );

  const [current, setCurrent] = useState(0);
  const changeCurrent = (index) => {
    setCurrent(index);
  };

  const chooseFile = () => {
    uploadFile.current.click();
  };

  const uuid = () => {
    let s = [];
    let hexDigits = "0123456789abcdef";
    for (let i = 0; i < 36; i++) {
      s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
    }
    s[14] = "4";
    s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1);
    s[8] = s[13] = s[18] = s[23] = "-";
    let uuid = s.join("");
    return uuid;
  };

  const fileChange = (e) => {
    let file = e.target.files;
    if (file.length != 0) {
      for (let i = 0; i < file.length; i++) {
        let suffixArr = file[i].name.split(".");
        let suffix = suffixArr[suffixArr.length - 1];
        console.log(suffix);
        if (suffix == "pdf" || suffix == "docx" || suffix == "doc") {
          // file
          // let id =
          file[i].newFileName = getFileName(file[i].name)
          file[i].id = uuid();
          file[i].suffix = suffix;
          fileList.push(file[i]);
        } else {
          alert("文件格式错误");
        }
      }
      console.log(fileList);
    }
    setFileList([...fileList]);
    e.target.value = "";
  };

  //size大小转换为kb形式
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

  const handleDelete = (id) => {
    let item = fileList.filter((v) => v.id != id);
    console.log(item);
    setFileList(item);
  };

  const hideModal = (leftTime) => {
    if (leftTime <= 0) {
      setShowModal(false);
    }
  };


  return (
    <>
      <PageHeader searchData = {searchData} />
      {/* <Countdown showModal={showModal} hideModal={hideModal}></Countdown> */}
      <div
        style={{
          paddingTop: height * 0.075,
          width: "100%",
          height: height * 0.925,
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
            margin:'0px 48px'
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
                  <div>
                    <div className="file-upload-title">财经洞悉介绍</div>
                    <div className="file-text">
                      <div>
                        赛事期间，UFA将定期抛出热点财经新闻话题，并邀请大学生基于新闻话题撰写独立分析。“财经洞悉”将每两周举行一次，共计六次。
                      </div>
                    </div>
                    <div className="file-upload-title">奖励</div>
                    <div className="file-text">
                      <div>
                        UFA将每周对优秀的作品选手进行采访，并在UFA公众号等平台进行展示。同时，优秀的作品选手将获得由UFA颁发的“优秀财经人”奖状。
                      </div>
                    </div>
                  </div>
                  <div style={{width: "100%",
                    height: "1px",
                    background: "#E5E8EE",
                    borderRadius: "0px 0px 0px 0px",
                    opacity: "1",marginTop:"36px"}}></div>
                  <div className="file-upload-title">本周热题</div>
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
                      disabled={fileList.length>=1}
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
                    <div className="upload-list" key={item.id}>
                      <div className="flie-list">
                        <div className="file-icon">
                          {item.suffix == "pdf" ? (
                            <Image
                              src="/Frame1.png"
                              style={{ width: "36px", height: "36px" }}
                            />
                          ) : (
                            <Image
                              src="/word.png"
                              style={{ width: "36px", height: "36px" }}
                            />
                          )}
                        </div>
                        <div className="file-message">
                          <div className="file-name">{item.newFileName}</div>
                          <div className="file-size">
                            {fileSizeByteToM(item.size)}
                          </div>
                        </div>

                        <div
                          className="delete-wrapper"
                          onClick={() => handleDelete(item.id)}
                        >
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
