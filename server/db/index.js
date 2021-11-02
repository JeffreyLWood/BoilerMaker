const db = require("./db");
const app = require("../app");
const Model = require("./models/Model");

// Associations here

module.exports = {
  db,
  models: {
    Model,
  },
};
