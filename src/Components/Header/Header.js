import React from "react";
import GlobeIcon from "../../Assets/GlobeIcon.png";
import CC from "./CC/CC";

export default function Header() {
  return (
    <div className="Header">
      <img src={GlobeIcon} />
      <h1>Country Stats</h1>
      <CC label="Converter" type="Converter" />
    </div>
  );
}
