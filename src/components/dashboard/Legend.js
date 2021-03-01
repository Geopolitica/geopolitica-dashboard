import React from "react";

export default function Legend({ legendItems }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "stretch",
      }}
    >
      {legendItems.map((item) => (
        <div
          key={item.title}
          style={{
            backgroundColor: item.color,
            position: "bottomright",
            flex: 1,
            display: "flex",
            alignItems: "center", // vertical
            justifyContent: "center", // horizontal
            color: item.textColor,
            // height: "10vh",
            // fontWeight: "bolder",
            // fontSize: "1.5em",
          }}
        >
          <span>{item.title}</span>
        </div>
      ))}
    </div>
  );
}
