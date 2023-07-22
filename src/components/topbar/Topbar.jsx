import React from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
        {/* for logo at the left side */}
          <span className="logo">Abhiadmin</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
          {/* included below icon using material ui */}
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <img src="images/abhi.jpg" alt="" className="topAvatar" />
        </div>
      </div>
    </div>
  );
}
