import React from "react";
import { Link } from "react-router-dom";
import UpButton from "../UpButton/UpButton";
import "./DesktopCountryList.css";


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
      <div className="DesktopListUp">
        <UpButton label="Up" type="Up" />
      </div>
    </div>
  );
}
