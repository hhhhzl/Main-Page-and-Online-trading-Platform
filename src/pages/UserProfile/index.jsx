import React, { useState, useEffect, useRef, useContext } from "react";
import useWindowDimensions from "components/../utils/sizewindow";
import PageHeader from "components/screen/PageHeader";
import Notice from "components/webpage/chat/Notice";
import { getPlatformType } from "utils";
import HeaderCreate from "components/MainPage/header";
import ASide from "components/MainPage/ASide";
import { useHistory } from "react-router-dom";
import PersonalHomepage from "components/screen/PersonalHomepage";
import AuthContext from "context/AuthContext";
import { fetchUser } from "redux/reducers/users/usersSlices";
import { useDispatch, useSelector } from "react-redux";

export default ({ searchData }) => {
  let { apikey, user } = useContext(AuthContext);
  const [load, setload] = useState(true);
  const { width, height } = useWindowDimensions();
  const [platformType, setPlatformType] = useState(getPlatformType());
  const { data } = useSelector((state) => state.userInfo);
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (load) {
      dispatch(fetchUser(user.user_id));
      setload(false);
    }
  }, [load, dispatch, data]);

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
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            marginTop: platformType == null ? "112px" : "48px",
            width: "1200px",
          }}
        >
          <PersonalHomepage userget={data ? data : null} />
        </div>
      </div>
    </>
  );
};
