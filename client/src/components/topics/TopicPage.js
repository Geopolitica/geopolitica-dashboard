import React from "react";
import { useParams } from "react-router-dom";

import TopicEvents from "./TopicEvents";
import UnderConstructionBanner from "../common/UnderConstructionBanner";

export default function TopicPage() {
  const { topic } = useParams();
  return (
    <div>
      <UnderConstructionBanner />
      <div className="container-fluid">
        <h1 className="text-muted m-3">
          News related to: "{topic.toLowerCase()}"
        </h1>
        <div className="row">
          <div className="col-lg-5 col-xl-4">
            <h4 className="text-muted m-3">Recent Events</h4>
            <TopicEvents topic={topic} />
          </div>
          <div className="col-4 col-lg-7 col-xl-8 offset-xl-0">
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
}
