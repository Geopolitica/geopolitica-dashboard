import React from "react";

export default function Loading() {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="spinner-grow text-success" role="status">
        <span className="visually-hidden"></span>
      </div>
      <div className="spinner-grow text-danger" role="status">
        <span className="visually-hidden"></span>
      </div>
      <div className="spinner-grow text-info" role="status">
        <span className="visually-hidden"></span>
      </div>
    </div>
  );
}
