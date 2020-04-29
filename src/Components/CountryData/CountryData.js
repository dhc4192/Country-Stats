import React from "react";
import { withRouter } from "react-router-dom";
import "./CountryData.css";

function CountryData({ country }) {
  if (country === null) {
    return null;
  } else if (country) {
    return (
      <>
        <main key="CountryData" className="CountryData">
          <img className="flagImg" src={country.flag}/>
          <div className="info"><strong>Country:</strong> {country.name}</div>
          <div className="info"><strong>Native Name:</strong> {country.nativeName}</div>
          <div className="info">
            <strong>Alternative Spelling:</strong>
            {country.altSpellings[0]}{" "}
            {country.altSpellings[1]}{" "}
            {country.altSpellings[2]}{" "}
            {country.altSpellings[3]}
          </div>
          <div className="info"><strong>Capital:</strong> {country.capital}</div>
          {country.languages.map((lang) => (
            <div className="info">
              <div><strong>Language:</strong> {lang.name}</div>
              <div><strong>Native Language:</strong> {lang.nativeName}</div>
            </div>
          ))}
          <div className="info">
          <strong>Border:</strong>
            {country.borders[0]}{" "}
            {country.borders[1]}{" "}
            {country.borders[2]}{" "}
            {country.borders[3]}
          </div>
          <div className="info"><strong>Region:</strong> {country.region}</div>
          <div className="info"><strong>Subregion:</strong> {country.subregion}</div>
          <div className="info"><strong>Population:</strong> {country.population}</div>
          <div className="info"><strong>Timezone:</strong> {country.timezones + " "}</div>
          {country.currencies.map((curr) => (
            <div className="info">
              <div><strong>Currency Code:</strong> {curr.code}</div>
              <div><strong>Currency Name:</strong> {curr.name}</div>
            </div>
          ))}
          <div className="info"><strong>Calling Code:</strong> {country.callingCodes}</div>
        </main>
      </>
    );
  } else {
    return "Please select a valid Country!";
  }
}

export default withRouter(CountryData);
