import "./GoodToShare.css";
import React, { useState, useEffect, useRef } from "react";

import data from "../../../static/GoodToShare.json";

import { Image } from "react-bootstrap";

export default function GoodToShare() {
  return (
    <div
		style={{
			background: "#FFFFFF",
			marginTop: "24px"
		}}>
      <div className="share">
        {data.map((item, idx) => (
          <div key={idx} className="share-div">
            <div style={{ padding: "24px 0 0 36px" }}>
              <div className="share-div-title">{item.title}</div>
              <div style={{ paddingTop: "24px" }}>
                {item.files.map((file, idf) => (
                  <div key={idf} className="share-div-centent">
                    <div style={{ paddingLeft: "12px" }}>
                      <Image
                        src={file.imgUrl}
                        style={{ width: "36px", height: "36px" }}
                      ></Image>
                    </div>
                    <div style={{ paddingLeft: "8px" }}>
                      <div className="share-div-filename">{file.filename}</div>
                      <div className="share-dive-filesize">{file.filesize}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
