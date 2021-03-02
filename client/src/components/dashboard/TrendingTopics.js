import React, { Component } from "react";
import axios from "axios";
import CountryBadge from "../common/CountryBadge";
import findCountryName from "../../tasks/FindCountryName";

// export default CountryBadge;
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const Topic = (props) => (
  <tr>
    <td>{capitalizeFirstLetter(props.topic._id)}</td>
    <td>
      {props.topic.country_codes.map((code) => (
        <CountryBadge country={findCountryName(code)} />
      ))}
    </td>
    <td>{props.topic.ipm.toFixed(1)}</td>
  </tr>
);

export default class TrendingTopics extends Component {
  constructor(props) {
    super(props);
    this.state = { topics: [] };
  }

  componentDidMount() {
    console.log(this.props);
    axios
      .get("https://geopolitica-dashboard.herokuapp.com/events/topics")
      .then((response) => {
        this.setState({ topics: response.data });
      })
      .catch((error) => console.log(error));
  }

  exerciseList() {
    return this.state.topics.map((currentevent) => {
      return <Topic topic={currentevent} key={currentevent._id} />;
    });
  }

  render() {
    return (
      <table className="table">
        <thead className="thead-light">
          <tr>
            <th>Topics</th>
            <th>Places Mentioned</th>
            <th>Interactions Per Minute</th>
          </tr>
        </thead>
        <tbody>{this.exerciseList()}</tbody>
      </table>
    );
  }
}
