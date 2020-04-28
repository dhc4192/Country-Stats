import React from "react";
import { withRouter, useParams } from "react-router-dom";

export default function CountryData({ country }) {

  
  if (country) {
    return (
      <div className="CountryData">
        <>
          <img src={country.flag} width="200px" />
          <p>{country.name}</p>
          <p>{country.nativeName}</p>
          <p>{country.altSpellings}</p>
          <p>{country.capital}</p>
          {/* {country.languages.map((lang) => (
            <p>
              {lang.name} {lang.nativeName}
            </p>
          ))} */}
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
          <p>{country.callingCode}</p>
        </>
      </div>
    );
  } else {
    return ("Please select a valid Country!")
  }
}
