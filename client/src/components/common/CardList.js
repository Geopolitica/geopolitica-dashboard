import React, { Component } from "react";
import EventCard from "./EventCard";
import axios from "axios";

export default class EventList extends Component {
  constructor(props) {
    super(props);
    this.state = { events: [] };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/events/")
      .then((response) => {
        // console.log(response);
        this.setState({ events: response.data });
        console.log(this.state);
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
