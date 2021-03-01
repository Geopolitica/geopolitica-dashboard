const Map = require("../models/mapModel");

exports.mapJson = function (req, res, next) {
  if (req.params.name) {
    Map.findOne(
      { properties: { name: req.params.name } },
      {},
      function (err, docs) {
        res.json(docs);
      }
    );
  }
};

exports.mapLayers = function (req, res, next) {
  Map.find({}, function (err, docs) {
    res.json(docs);
  });
};

exports.getMap = function (req, res) {
  Map.find({}, {}, function (e, docs) {
    res.render("map", {
      jmap: docs,
    });
  });
};
