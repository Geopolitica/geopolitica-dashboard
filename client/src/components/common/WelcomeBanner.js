import React from "react";

export default function WelcomeBanner() {
  return (
    <div className="container">
      <div className="alert alert-primary" role="alert">
        <span>
          <strong>Welcome!</strong>
          <br />
          Please note that the demo version only includes data from the BBC
          World Service as an example.
        </span>
      </div>
    </div>
  );
}
