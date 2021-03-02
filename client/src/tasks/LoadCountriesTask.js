import axios from "axios";
import { features } from "../data/countries.json";
import legendItems from "../entities/LegendItems";

export default class LoadCountriesTask {
  setState = null;
  mapCountries = features;

  load = (setState) => {
    this.setState = setState;
    axios
      .get("https://geopolitica-dashboard.herokuapp.com/events/countries")
      .then((result) => this.#processData(result.data))
      .catch((error) => console.log(error));
  };

  #processData = (countryMentions) => {
    for (let i = 0; i < this.mapCountries.length; i++) {
      const mapCountry = this.mapCountries[i];
      const countryMention = countryMentions.find(
        (countryMention) => countryMention._id === mapCountry.properties.ADMIN //mapCountry.properties.ISO_A3
      );

      mapCountry.properties.mentionsNumber = 0;
      mapCountry.properties.mentionsText = "";

      if (countryMention != null) {
        const mentions = Number(countryMention.count);
        mapCountry.properties.mentionsNumber = mentions;
        mapCountry.properties.mentionsText = `${mentions} mentions in last 24 hours`;
      }
      this.#setCountryColor(mapCountry);
    }
    this.setState(this.mapCountries);
  };

  #setCountryColor = (mapCountry) => {
    const legendItem = legendItems.find((legendItem) =>
      legendItem.isFor(mapCountry.properties.mentionsNumber)
    );
    if (legendItem != null) {
      mapCountry.properties.color = legendItem.color;
    }
  };
}
