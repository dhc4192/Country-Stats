import React from "react";
import { withRouter } from "react-router-dom";

function CountryData({ country }) {
  if (country) {
    return (
      <div className="CountryData">
        <>
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
          {/* {country.currencies.map((curr) => (
            <p>
              {curr.code} {curr.name}
            </p>
          ))} */}
          <p>{country.callingCodes}</p>
        </>
      </div>
    );
  } else {
    return "Please select a valid Country!";
  }
}

export default withRouter(CountryData);
