import LegendItem from "./LegendItem";

const legendItems = [
  new LegendItem("7 +", "#002f8d", (cases) => cases > 6, "#ffffff"),
  new LegendItem("6", "#0947ab", (cases) => cases === 6, "#ffffff"),
  new LegendItem("5", "#2d5ec7", (cases) => cases === 5, "#ffffff"),
  new LegendItem("4", "#5175e1", (cases) => cases === 4, "#ffffff"),
  new LegendItem("3", "#6f8dfd", (cases) => cases === 3),
  new LegendItem("2", "#8fa9ff", (cases) => cases === 2),
  new LegendItem("1", "#afc6ff", (cases) => cases === 1),
  new LegendItem("No mentions", "#cee3ff", (cases) => cases === 0),
];

// #00186d,#002f8d,#0947ab,#2d5ec7,#5175e1,#6f8dfd,#8fa9ff,#afc6ff,#cee3ff - slightly purple
// #002088,#0036a8,#004ec7,#0166e5,#1180fe,#549bff,#7ab6ff,#9bd0ff,#baebff - blues
export default legendItems;
