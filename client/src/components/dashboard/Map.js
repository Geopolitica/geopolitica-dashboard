import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import GlobalHeatmap from "./GlobalHeatmap";
import Legend from "./Legend";
import LoadCountriesTask from "../../tasks/LoadCountriesTask";
import legendItems from "./../../entities/LegendItems";

export default function Map() {
  const [countries, setCountries] = useState([]);
  const legendItemsInReverse = [...legendItems].reverse();

  const load = () => {
    console.log("load");
    const loadCountriesTask = new LoadCountriesTask();
    loadCountriesTask.load(setCountries);
  };

  useEffect(load, []);
  return (
    <div>
      {countries.length === 0 ? (
        <Loading />
      ) : (
        <div>
          <GlobalHeatmap countries={countries} />
          <Legend legendItems={legendItemsInReverse} />
        </div>
      )}
    </div>
  );
}
