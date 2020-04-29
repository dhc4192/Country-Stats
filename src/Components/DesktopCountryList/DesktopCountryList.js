import React from "react";
import "./DesktopCountryList.css";
import { Link } from "react-router-dom";

export default function DesktopCountryList({ countries }) {
  
  return (
    <>
      {countries.map(country => (
        <div key={country.name}>
          <Link to={"/country/" + country.name}>
            {country.name}
          </Link>
        </div>
      ))}
    </>
  );
}
