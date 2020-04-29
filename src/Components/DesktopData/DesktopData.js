import React from "react";
import { useParams, withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import HomeButton from "./HomeButton/HomeButton";
import "./DesktopData.css";

function DesktopData({ countries }) {
  const { name } = useParams();
  const country = countries.find((country) => country.name === name);

  console.log(country);
  if (country) {
    return (
      <div className="DesktopData">
        <Link to="/">
          <HomeButton label="Home" type="Home" />
        </Link>
        <div>
          <img className="flagImg" src={country.flag} />
          <div className="info">
            <strong>Country:</strong> {country.name}
          </div>
          <div className="info">
            <strong>Native Name:</strong> {country.nativeName}
          </div>
          <div className="info">
            <strong>Alternative Spelling:</strong>
            {country.altSpellings[0]} {country.altSpellings[1]}{" "}
            {country.altSpellings[2]} {country.altSpellings[3]}
          </div>
          <div className="info">
            <strong>Capital:</strong> {country.capital}
          </div>
          {country.languages.map((lang) => (
            <div className="info">
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
            {country.borders[0]} {country.borders[1]} {country.borders[2]}{" "}
            {country.borders[3]}
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
            <div className="info">
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
        </div>
        <a class="upbtn" href="#">
          ^
        </a>
      </div>
    );
  } else {
    return null;
  }
}
export default withRouter(DesktopData);
