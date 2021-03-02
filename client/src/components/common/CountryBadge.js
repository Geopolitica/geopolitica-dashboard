import React from "react";
import "./CountryBadge.css";
import findCountryCode from "../../tasks/FindCountryCode";

export default function CountryBadge({ country }) {
  const code = findCountryCode(country);
  console.log(code);
  const url = `/countries/${code}`;
  return (
    <a href={url}>
      <span className="badge country-badge m-1">{country}</span>
    </a>
  );
}
