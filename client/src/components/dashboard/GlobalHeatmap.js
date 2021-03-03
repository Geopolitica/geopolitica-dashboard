import React from "react";
import { MapContainer, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./GlobalHeatmap.css";

export default function GlobalHeatmap({ countries }) {
  const mapStyle = {
    fillColor: "white",
    weight: 1,
    color: "#7ab6ff",
    fillOpacity: 0.7,
    opacity: 1,
  };
  const onEachCountry = (country, layer) => {
    layer.options.fillColor = country.properties.color;
    const name = country.properties.ADMIN;
    const code = country.properties.ISO_A3;
    const mentionsText = country.properties.mentionsText;
    layer.bindPopup(
      `${name}: ${mentionsText} <br>
      <a href="/countries/${code}">Go to profile</a>`
    );
  };
  return (
    <MapContainer style={{ height: "90vh" }} zoom={2} center={[20, 20]}>
      <GeoJSON
        style={mapStyle}
        data={countries}
        onEachFeature={onEachCountry}
      />
    </MapContainer>
  );
}
