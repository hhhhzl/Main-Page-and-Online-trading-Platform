import React from "react";
import "./tournamentBg.css";
import useWindowDimensions from "../../../utils/sizewindow";
import Image from "react-bootstrap/Image";

export default function TournamentBg() {
  const { width, height } = useWindowDimensions();
  return (
    <div
      id="home"
      className="cover animated"
      style={{
        background:
          width > 1920
            ? "url('/tournament/Group 798@2x.png') center center no-repeat"
            : "url('/tournament/Group 798.png') center center no-repeat",
        width: width,
        height: "720px",
      }}
    >
      <div className="tournament-bg">
        {width > 800 ? (
          <>
            <div className="tournament-ufa">
              <Image
                className="tournament-ufa-image"
                src="/tournament/Group 50@2x.png"
                style={{
                  width: width * 0.178125,
                  height: width * 0.148958,
                  minWidth: "195px",
                  minHeight: "172px",
                }}
              />
            </div>
            <div className="tournament-challenge">
              <Image
                src="/tournament/Group 137@2x.png"
                style={{
                  width: width * 0.246875,
                  height: width * 0.0375,
                  minWidth: "254px",
                  minHeight: "44px",
                }}
              />
            </div>
          </>
        ) : (
          <>
            <div className="tournament-ufa-sm">
              <Image
                className="tournament-ufa-image-sm"
                src="/tournament/Group 1101@2x.png"
                style={{
                  width: "254px",
                  height: "44px",
                }}
              />
            </div>
            <div className="tournament-challenge-sm">
              <Image
                src="/tournament/Group 1100@2x.png"
                style={{
                  width: "195px",
                  height: "172px",
                }}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
}
