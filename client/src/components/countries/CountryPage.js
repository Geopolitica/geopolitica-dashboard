import React from "react";
import { useParams } from "react-router-dom";

import CountryEvents from "./CountryEvents";
import CountryProfile from "./CountryProfile";
import UnderConstructionBanner from "./../common/UnderConstructionBanner";
import findCountryName from "../../tasks/FindCountryName";

const CountryPage = () => {
  const { code } = useParams();
  console.log(code);
  const countryName = findCountryName(code);
  console.log(countryName);
  return (
    <div>
      <UnderConstructionBanner />
      <div className="container-fluid">
        <h1 className="text-muted m-3">{countryName}</h1>
        <div className="row">
          <div className="col-lg-5 col-xl-4">
            <h4 className="text-muted m-3">Recent Events</h4>
            <CountryEvents code={code} />
          </div>
          <div className="col-4 col-lg-7 col-xl-8 offset-xl-0">
            <h4 className="text-muted m-3">Country Profile</h4>
            <CountryProfile code={code} />
            <h4 className="text-muted m-3">More Information</h4>
            <div className="card shadow mb-4">
              <div className="card-body">
                In future, more modules will appear here. Stay tuned!
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryPage;
