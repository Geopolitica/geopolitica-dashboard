let Event = require("../models/eventModel");
const moment = require("moment");
const now = moment().format();
const last24Hours = moment(now).add(-24, "hours").format();

exports.getTopEvents = function (req, res) {
  Event.find({ country_mentions: { $not: { $size: 0 } } })
    .sort([["_id", -1]])
    .limit(8)
    .then((exercises) => res.json(exercises))
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.getCountryMentions = function (req, res) {
  Event.aggregate([
    {
      $match: {
        country_mentions: {
          $ne: null,
          $type: "array",
          $not: {
            $size: 0,
          },
        },
        created_at: { $gte: new Date(last24Hours) },
      },
    },
    {
      $unwind: {
        path: "$country_mentions",
      },
    },
    {
      $group: {
        _id: "$country_mentions",
        count: {
          $sum: 1,
        },
      },
    },
    {
      $sort: {
        count: -1,
      },
    },
  ]).exec(function (err, agg_results) {
    if (err) {
      return next(err);
    }
    res.json(agg_results);
  });
};

exports.getAllTopics = function (req, res) {
  Event.aggregate([
    {
      $match: {
        topics: {
          $ne: null,
        },
        created_at: { $gte: new Date(last24Hours) },
        country_mentions: {
          $not: {
            $size: 0,
          },
        },
      },
    },
    {
      $unwind: {
        path: "$topics",
      },
    },
    {
      $unwind: {
        path: "$country_mentions",
      },
    },
    {
      $unwind: {
        path: "$country_codes",
      },
    },
    {
      $group: {
        _id: "$topics",
        sum: {
          $sum: 1,
        },
        country_mentions: {
          $addToSet: "$country_mentions",
        },
        country_codes: { $addToSet: "$country_codes" },
        ipm: {
          $sum: "$interactions_per_minute",
        },
      },
    },
    {
      $sort: {
        sum: -1,
      },
    },
    {
      $limit: 10,
    },
  ]).exec(function (err, agg_results) {
    if (err) {
      return next(err);
    }
    res.json(agg_results);
  });
};

exports.getTopic = function (req, res) {
  const keyword = req.params.topic;
  // const now = moment().format();
  Event.find({
    topics: {
      $all: [keyword],
    },
  })
    .sort([["_id", -1]])
    .limit(10)
    .then((exercises) => res.json(exercises))
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.getMentionsPerCountry = function (req, res) {
  const country = req.params.country;
  Event.find({
    country_mentions: {
      $all: [country],
    },
  })
    .sort([["created_at", -1]])
    .limit(10)
    .then((exercises) => res.json(exercises))
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.getMentionsPerCountryCode = function (req, res) {
  const code = req.params.code;
  Event.find({
    country_codes: {
      $all: [code],
    },
  })
    .sort([["created_at", -1]])
    .limit(10)
    .then((exercises) => res.json(exercises))
    .catch((err) => res.status(400).json("Error: " + err));
};
