import React from "react";
import "./DesktopCountryList.css";
import { Link } from "react-router-dom";

export default function DesktopCountryList({ countries }) {
  return (
    <div className="DesktopList">
      {countries.map((country) => (
        <div className="desktopList" key={country.name}>
          <Link className="countryName" to={"/country/" + country.name}>
            {country.name}
          </Link>
        </div>
      ))}
    </div>
  );
}
