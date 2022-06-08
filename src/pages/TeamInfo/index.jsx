import React, { useState, useEffect, useRef, useContext } from "react";
import PageHeader from "components/screen/PageHeader";
import useWindowDimensions from "components/../utils/sizewindow";
import StockPriceGraphSimplify from "components/screen/StockPriceGraphSimplify";
import StockTradeBar from "components/screen/StockTradeBar";
import StockTradeComponet from "components/screen/StockTradeComponet";
import WatchList from "components/screen/WatchList";
import PendingOrder from "components/screen/PendingOrder";
import KeyIndicators from "components/screen/KeyIndicatorSimple";
import { Dropdown } from "react-bootstrap";
import TeamInformationPage from "components/screen/TeamInformationPageCom";
import { getPlatformType } from "utils";
import HeaderCreate from "components/MainPage/header";
import ASide from "components/MainPage/ASide";
import AuthContext from "context/AuthContext";

export default ({ searchData }) => {
  let { apikey } = useContext(AuthContext);
  const { width, height } = useWindowDimensions();
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
          marginTop: platformType == null ? 0 : height * 0.075,
          width: "100%",
          minHeight: "500px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{ width: "48px", minHeight: "500px", maxWidth: "27.7%" }}
        ></div>

        <div
          style={{
            width: width > 856 ? "856px" : width - 96,
            minHeight: "700px",
            minWidth: "fix-content",
            paddingTop: platformType == null ? "112px" : 0,
          }}
        >
          <TeamInformationPage load={true} />
        </div>
        <div
          style={{
            width: "48px",
            minHeight: "500px",
            maxWidth: "27.7%",
          }}
        ></div>
      </div>
    </>
  );
};
