import React from "react";
import GlobeIcon from "../../Assets/GlobeIcon.png";
import CC from "./CC/CC";
import "./Header.css";

export default function Header() {
  return (
    <div className="Header">
      <img className="icon" src={GlobeIcon} />
      <h1 className="title">Country Stats</h1>
      <CC label="Converter" type="Converter" />
    </div>
  );
}
