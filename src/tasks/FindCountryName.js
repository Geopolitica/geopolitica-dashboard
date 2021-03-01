import { features } from "../data/countries.json";

export default function findCountryCode(code) {
  for (const f of features) {
    if (f.properties.ISO_A3 === code) {
      return f.properties.ADMIN;
    }
  }
}
