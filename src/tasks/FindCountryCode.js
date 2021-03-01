import { features } from "../data/countries.json";

export default function findCountryCode(country) {
  for (const f of features) {
    if (f.properties.ADMIN === country) {
      return f.properties.ISO_A3;
    }
  }
}
