import React from "react";

import Map from "./Map";
import TrendingTopics from "./TrendingTopics";
import NameList from "../common/CardList";
import WelcomeBanner from "../common/WelcomeBanner";

export default function Dashboard() {
  return (
    <div>
      <WelcomeBanner />
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12 col-lg-7 col-xl-8 offset-xl-0">
            <h3 className="text-muted m-3">Global Heatmap</h3>
            <div className="card shadow mb-4">
              <div className="card-body">
                <Map />
              </div>
            </div>
            <h3 className="text-muted m-3">Trending Topics</h3>
            <div className="card shadow mb-4">
              <div className="card-body">
                <TrendingTopics />
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-xl-4">
            <h3 className="text-muted m-3">Top Events</h3>
            <NameList />
          </div>
        </div>
      </div>
    </div>
  );
}
