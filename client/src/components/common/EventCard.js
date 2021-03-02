import React, { Component } from "react";

import TopicBadge from "./TopicBadge";

export default class EventCard extends Component {
  constructor(props) {
    super(props);
    this.state = { topics: [] };
  }

  getTopics() {
    return this.props.event.topics.map((topic) => <TopicBadge topic={topic} />);
  }

  getLocations() {
    const length = this.props.event.country_mentions.length;
    return this.props.event.country_mentions.map((country, i) =>
      length === i + 1 ? country : `${country}, `
    );
  }

  render() {
    return (
      <div className="card shadow m-3">
        <div className="card-body">
          <h4 className="card-title headline">{this.props.event.text}</h4>
          <h6 className="text-muted card-subtitle">
            {<i className="fa fa-map-marker p-2" />}
            {this.getLocations()}
          </h6>
          <span>{this.getTopics()}</span>
        </div>
      </div>
    );
  }
}
