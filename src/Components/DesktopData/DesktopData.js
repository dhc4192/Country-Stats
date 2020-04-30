import React from "react";
import { useParams, withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import HomeButton from "./HomeButton/HomeButton";
import UpButton from "../UpButton/UpButton";
import "./DesktopData.css";

function DesktopData({ countries }) {
  const { name } = useParams();
  const country = countries.find((country) => country.name === name);

  if (country) {
    return (
      <>
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
              <strong>Alternative Spelling:</strong>{" "}
              {country.altSpellings.join(", ")}
            </div>
            <div className="info">
              <strong>Capital:</strong> {country.capital}
            </div>
            {country.languages.map((lang) => (
              <div key={lang.nativeName} className="info">
                <div>
                  <strong>Language:</strong> {lang.name}
                </div>
                <div>
                  <strong>Native Language:</strong> {lang.nativeName}
                </div>
              </div>
            ))}
            <div className="info">
              <strong>Border:</strong> {country.borders.join(", ")}
            </div>
            <div className="info">
              <div>
                <strong>Region:</strong> {country.region}
              </div>
              <div>
                <strong>Subregion:</strong> {country.subregion}
              </div>
            </div>
            <div className="info">
              <strong>Population:</strong> {country.population}
            </div>
            <div className="info">
              <strong>Area:</strong> {country.area + " km²"}
            </div>
            <div className="info">
              <strong>Timezone:</strong> {country.timezones.join(", ")}
            </div>
            {country.currencies.map((curr) => (
              <div key={curr.name} className="info">
                <div>
                  <strong>Currency Code:</strong> {curr.code}
                </div>
                <div>
                  <strong>Currency Name:</strong> {curr.name}
                </div>
              </div>
            ))}
            <div className="info">
              <div>
                <strong>Alpha2Code:</strong> {country.alpha2Code}
              </div>
              <div>
                <strong>Alpha3Code:</strong> {country.alpha3Code}
              </div>
              <div>
                <strong>Calling Code:</strong> {country.callingCodes}
              </div>
              <div>
                <strong>Numeric Code:</strong> {country.numericCode}
              </div>
            </div>
            <div className="info">
              <strong>Lat-Lng:</strong> {country.latlng.join(", ")}
            </div>
            <div className="DesktopDataUp">
              <UpButton label="Up" type="Up" />
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return null;
  }
}
export default withRouter(DesktopData);
