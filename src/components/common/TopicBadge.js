import React from "react";
import "./Navbar.css";

export default function TopicBadge({ topic }) {
  const url = `/events/topics/${topic}`;
  return (
    <a href={url}>
      <span className="badge topic-badge m-1">{topic}</span>
    </a>
  );
}
