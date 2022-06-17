import React, { useState, useEffect, useRef, useContext } from "react";
import useWindowDimensions from "components/../utils/sizewindow";
import PageHeader from "components/screen/PageHeader";
import Notice from "components/webpage/chat/Notice";
import { getPlatformType } from "utils";
import HeaderCreate from "components/MainPage/header";
import ASide from "components/MainPage/ASide";
import { useHistory } from "react-router-dom";
import AuthContext from "context/AuthContext";
import { useSelector } from "react-redux";

export default ({ searchData }) => {
  const { width, height } = useWindowDimensions();
  const { apikey } = useContext(AuthContext);
  const [platformType, setPlatformType] = useState(getPlatformType());
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {platformType == null ? (
        <>
          <HeaderCreate toggle={toggle} />
          {isOpen ? <ASide isOpen={isOpen} toggle={toggle} /> : null}
        </>
      ) : (
        <PageHeader
          searchData={searchData}
          platformType={platformType}
          showrankingOnly={apikey ? null : true}
        />
      )}
      <div
        style={{
          marginTop: "0px",
          width: "100%",
          minHeight: "500px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{ width: "48px", minHeight: "500px", maxWidth: "18.75%" }}
        ></div>

        <div
          style={{
            top:"0",
            paddingTop:"112px",
            width: width > 1200 ? "1200px" : width - 96,
            minHeight: "500px",
            minWidth: "fix-content",
          }}
        >
          <Notice />
        </div>



         <div
          style={{ width: "48px", minHeight: "500px", maxWidth: "18.75%" }}
        ></div>
      </div>
        

    </>
  );
};
