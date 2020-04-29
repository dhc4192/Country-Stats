import React from "react";
import "./Description.css";

export default function Description() {
  return (
    <div className="Description">
      <p>
        Country Stats is an informative application. Search for or simply scroll
        through the list of Countries available. After making a selection you
        should be able to view some information about the Country. Details
        include: Name, Region, Language, Currency, etc. <br />
        Also, feel free to check out a currency converter page with the link
        "Converter" above!
      </p>
    </div>
  );
}
