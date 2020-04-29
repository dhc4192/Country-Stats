import React from "react";
import HomeButton from "./HomeButton/HomeButton";
import "./DesktopData.css";

export default function DesktopData({ countries }) {
  return (
    <div className="DesktopData">
      {countries.map((country) => (
        <div>
          <img src={country.flag} width="200px" />
          <p>{country.name}</p>
          <p>{country.nativeName}</p>
          <p>{country.altSpellings}</p>
          <p>{country.capital}</p>

          {country.languages.map((lang) => (
            <p>
              {lang.name}
              {lang.nativeName}
            </p>
          ))}

          <p>{country.borders}</p>
          <p>{country.region}</p>
          <p>{country.subregion}</p>
          <p>{country.population}</p>
          <p>{country.timezones}</p>

          {country.currencies.map((curr) => (
            <p>
              {curr.code}
              {curr.name}
            </p>
          ))}

          <p>{country.callingCodes}</p>
        </div>
      ))}
      <HomeButton />
    </div>
  );
}
