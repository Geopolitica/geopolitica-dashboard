import React from "react";
import "./Navbar.css";

export default function TopicBadge({ topic }) {
  const url = `/topics/${topic}`;
  return (
    <a href={url}>
      <span key={topic} className="badge topic-badge m-1">
        {topic}
      </span>
    </a>
  );
}
