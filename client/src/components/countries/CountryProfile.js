import React, { Component } from "react";

export default class CountryProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      topics: [],
      capital: "",
      languages: [],
      domain: "",
      organizations: [],
      flag: "",
    };
  }

  unpackObjects(arr) {
    const unpacked = arr.map((el) => el.name);
    return unpacked.join(", ");
  }

  componentDidMount() {
    // fetch(`https://restcountries.eu/rest/v2/name/${this.props.country}`)
    // console.log(this.props);
    fetch(`https://restcountries.eu/rest/v2/alpha/${this.props.code}`)
      .then((res) => res.json())
      // .then((data) => console.log(data))
      .then((data) => {
        this.setState({
          capital: data.capital,
          languages: this.unpackObjects(data.languages),
          domain: data.topLevelDomain,
          organizations: this.unpackObjects(data.regionalBlocs),
          // flag: data[0].flag,
        });
      })
      .catch((error) => console.log(error));
  }

  render() {
    return (
      <div className="card shadow mb-4">
        <div className="row card-body">
          <p class="card-text m-1">
            <strong>Capital:</strong> {this.state.capital}
            <br />
            <strong>Languages:</strong> {this.state.languages}
            <br />
            <strong>Website Domain:</strong> {this.state.domain}
            <br />
            <strong>Organizations:</strong> {this.state.organizations}
          </p>
        </div>
      </div>
    );
  }
}
