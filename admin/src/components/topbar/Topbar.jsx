import React from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">NetFlix</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
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
          <img src="https://scontent.fhan3-1.fna.fbcdn.net/v/t1.6435-9/186540393_1605226326348150_5352913499399295577_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=Pj6RYaovmVkAX9b4Caw&_nc_ht=scontent.fhan3-1.fna&oh=cb6103b22d8a089e23320c9e94f58cb4&oe=613B290B" alt="" className="topAvatar" />
        </div>
      </div>
    </div>
  );
}
