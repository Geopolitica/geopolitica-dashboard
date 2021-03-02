const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const TileSchema = new Schema({
  name: String,
  type: Schema.Types.Mixed,
});

module.exports = mongoose.model("Tile", TileSchema, "worldcountries");
