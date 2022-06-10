import React from "react";
import "./tournamentBg.css";
import useWindowDimensions from "../../../utils/sizewindow";

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
        
      </div>
    </div>
  );
}
