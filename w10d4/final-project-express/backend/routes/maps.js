const express = require("express");
const maps = express.Router();

/* GET users listing. */
maps.get("/", function (req, res, next) {
  const maps = [{}, {}];

  return res.json(maps);
});

module.exports = maps;
