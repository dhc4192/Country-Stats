import React from "react";
import { withRouter } from "react-router-dom";
import "./CountryData.css";

function CountryData({ country }) {
  if (country === null) {
    return null;
  } else if (country) {
    return (
      <div className="CountryData">
        <>
          <img src={country.flag} width="200px" />
          <p>Country: {country.name}</p>
          <p>Native Name: {country.nativeName}</p>
          <p>
            Alternative Spelling: {country.altSpellings[0]}{" "}
            {country.altSpellings[1]} {country.altSpellings[2]}{" "}
            {country.altSpellings[3]}
          </p>
          <p>Capital: {country.capital}</p>

          {country.languages.map((lang) => (
            <span>
              <p>Language: {lang.name}</p>
              <p>Native Language: {lang.nativeName}</p>
            </span>
          ))}

          <p>
            Border: {country.borders[0]} {country.borders[1]}{" "}
            {country.borders[2]} {country.borders[3]}
          </p>
          <p>Region: {country.region}</p>
          <p>Subregion: {country.subregion}</p>
          <p>Population: {country.population}</p>
          <p>Timezone: {country.timezones + " "}</p>

          {country.currencies.map((curr) => (
            <span>
              <p>Currency Code: {curr.code}</p>
              <p>Currency Name: {curr.name}</p>
            </span>
          ))}

          <p>Calling Code: {country.callingCodes}</p>
        </>
      </div>
    );
  } else {
    return "Please select a valid Country!";
  }
}

export default withRouter(CountryData);
