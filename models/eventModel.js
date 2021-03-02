const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const eventSchema = new Schema({
  vendor_id: Number,
  created_at: Date,
  text: String,
  user: String,
  retweet_count: Number,
  favourite_count: Number,
  last_updated_at: Date,
  country_mentions: Object,
  topics: Array,
  hashtags: Array,
  total_interactions: Number,
  article_link: String,
  interactions_per_minute: Number,
});

const Event = mongoose.model("Event", eventSchema, "tweets");

module.exports = Event;
