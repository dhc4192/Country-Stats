import React from "react";
import GlobeIcon from "../../Assets/GlobeIcon.png";
import "./Header.css"
import CC from "./CC/CC";

export default function Header() {
  return (
    <div className="Header">
      <img className="icon" src={GlobeIcon} />
      <h1 className="title">Country Stats</h1>
      <CC label="Converter" type="Converter" />
    </div>
  );
}
