import React from "react";
import { withRouter } from "react-router-dom";
import UpButton from "../UpButton/UpButton";
import "./CountryData.css";

function CountryData({ country }) {
  if (country === null) {
    return null;
  } else if (country) {
    return (
      <div className="asdf">
        <main className="CountryData">
          <img className="flagImg" src={country.flag} />
          <div className="info">
            <strong>Country:</strong> {country.name}
          </div>
          <div className="info">
            <strong>Native Name:</strong> {country.nativeName}
          </div>
          <div className="info">
            <strong>Alternative Spelling:</strong>
            {country.altSpellings.join(", ")}
          </div>
          <div className="info">
            <strong>Capital:</strong> {country.capital}
          </div>
          {country.languages.map((lang) => (
            <div key="language" className="info">
              <div>
                <strong>Language:</strong> {lang.name}
              </div>
              <div>
                <strong>Native Language:</strong> {lang.nativeName}
              </div>
            </div>
          ))}
          <div className="info">
            <strong>Border:</strong>
            {country.borders.join(", ")}
          </div>
          <div className="info">
            <strong>Region:</strong> {country.region}
          </div>
          <div className="info">
            <strong>Subregion:</strong> {country.subregion}
          </div>
          <div className="info">
            <strong>Population:</strong> {country.population}
          </div>
          <div className="info">
            <strong>Timezone:</strong> {country.timezones.join(", ")}
          </div>
          {country.currencies.map((curr) => (
            <div key="currencies" className="info">
              <div>
                <strong>Currency Code:</strong> {curr.code}
              </div>
              <div>
                <strong>Currency Name:</strong> {curr.name}
              </div>
            </div>
          ))}
          <div className="info">
            <strong>Calling Code:</strong> {country.callingCodes}
          </div>
          <div className="CountryDataUp">
            <UpButton label="Up" type="Up" />
          </div>
        </main>
      </div>
    );
  } else {
    return "Please select a valid Country!";
  }
}

export default withRouter(CountryData);
