import React from "react";
import GlobeIcon from "../../Assets/GlobeIcon.png";

export default function Header() {
  return (
    <div className="Header">
      <img src={GlobeIcon} />
      <h1>Country Stats</h1>
    </div>
  );
}
