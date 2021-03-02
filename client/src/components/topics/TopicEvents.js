import React, { Component } from "react";
import EventCard from "./../common/EventCard";
import axios from "axios";

export default class TopicEvents extends Component {
  constructor(props) {
    super(props);
    this.state = { events: [] };
  }

  componentDidMount() {
    axios
      .get(`http://localhost:5000/events/topics/${this.props.topic}`)
      .then((response) => {
        this.setState({ events: response.data });
      })
      .catch((error) => console.log(error));
  }

  eventList() {
    return this.state.events.map((event) => <EventCard event={event} />);
  }

  render() {
    return <div>{this.eventList()}</div>;
  }
}
