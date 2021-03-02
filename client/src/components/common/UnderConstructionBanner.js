import React from "react";

export default function UnderConstructionBanner() {
  return (
    <div className="container">
      <div className="alert alert-warning" role="alert">
        <span>
          This page is still under construction. Feel free to send bugs and
          feature requests to{" "}
          <a href="mailto:info@geopoliti.ca">info@geopoliti.ca</a>.
        </span>
      </div>
    </div>
  );
}
