import { Modal } from "react-bootstrap";
import React, { useState, useEffect, useRef } from "react";
import "./countdown.css";
import { now, end } from "../../../utils/countdownUtil";

export default function Countdown({ showModal, hideModal }) {
  const intervalRef = useRef();

  let [leftTime, setLeftTime] = useState(end-now);
  const [d, setDays] = useState(""); //天
  const [h, setHours] = useState(""); //小时
  const [m, setMinutes] = useState(""); //分钟
  const [s, setSeconds] = useState(""); //秒

  useEffect(() => {
    if (leftTime > 0) {
      intervalRef.current = setInterval(() => {
        const newNow = Math.round(new Date().getTime()).toString(); // 重新获取当前时间
        let newLeftTime = end - newNow;

        let days = Math.floor(newLeftTime / 1000 / 60 / 60 / 24);
        let hours =
          Math.floor((newLeftTime / 1000 / 60 / 60) % 24) < 10
            ? `0${Math.floor((newLeftTime / 1000 / 60 / 60) % 24)}`
            : Math.floor((newLeftTime / 1000 / 60 / 60) % 24);
        let minutes =
          Math.floor((newLeftTime / 1000 / 60) % 60) < 10
            ? `0${Math.floor((newLeftTime / 1000 / 60) % 60)}`
            : Math.floor((newLeftTime / 1000 / 60) % 60);
        let seconds =
          Math.floor((newLeftTime / 1000) % 60) < 10
            ? `0${Math.floor((newLeftTime / 1000) % 60)}`
            : Math.floor((newLeftTime / 1000) % 60);

        setDays(() => days);
        setHours(() => hours);
        setMinutes(() => minutes);
        setSeconds(() => seconds);
        setLeftTime(() => newLeftTime); //计算新的时间间隔数值
      }, 1000);
    } else {
      setDays(0);
      setLeftTime(0);
      setHours(0);
      setMinutes(0);
      setSeconds(0);
      clearInterval(intervalRef.current);
      hideModal(leftTime);
    }
    return () => clearInterval(intervalRef.current);
  }, [leftTime]); //不传依赖

  return (
    <Modal
      show={showModal}
      onHide={() => hideModal(leftTime)}
      centered
      className="countdown-modal"
    >
      <div className="countdown-modal-text">距离比赛开始</div>
      <div className="countdown-modal-time">
        {" "}
        {d > 0 && leftTime > 0 ? (
          <>
            <span>{`${d}天${h}时`}</span>
          </>
        ) : leftTime > 0 && d <= 0 ? (
          <>{`${h}:${m}:${s}`}</>
        ) : (
          <>0天0小时</>
        )}
      </div>
    </Modal>
  );
}
