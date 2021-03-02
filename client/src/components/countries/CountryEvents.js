import React, { Component } from "react";
import axios from "axios";

import EventCard from "./../common/EventCard";

export default class CountryEvents extends Component {
  constructor(props) {
    super(props);
    this.state = { events: [] };
  }

  componentDidMount() {
    console.log(this.props.code);
    axios
      .get(`http://localhost:5000/events/countries/code/${this.props.code}`)
      .then((response) => {
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
