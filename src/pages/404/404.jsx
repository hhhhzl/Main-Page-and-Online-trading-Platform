import React from "react";
import { Button } from "react-bootstrap";
import { Image } from "react-bootstrap";
import useWindowDimensions from "../../utils/sizewindow";
import { useHistory } from "react-router";
import "./404.css";

const NotFound = () => {
  const { width, height } = useWindowDimensions();
  const history = useHistory();
  const backToHome = () => {
    history.push("/");
  };

  return (
    <div className="not-found" style={{ width: width, height: height }}>
      {width > 1200 ? (
        <Image
          src="/Group 1105@2x.png"
          style={{ width: "600px", height: "480px" }}
        />
      ) : width > 475 ? (
        <Image
          src="/404-pad@2x.png"
          style={{ width: "465px", height: "372px" }}
        />
      ) : (
        <Image
          src="/404-phone@2x.png"
          style={{ width: "343px", height: "275px" }}
        />
      )}
      <div className="not-found-text">真的很抱歉，我们搞丢了页面...</div>
      <div className="back-btn-container">
        <Button
          className="join-match-btn"
          variant="primary"
          size="sm"
          onClick={() => backToHome()}
          style={{
            fontWeight: "600",
            fontFamily: "Microsoft YaHei UI-Bold",
          }}
        >
          回到首页
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
