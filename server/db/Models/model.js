const { Sequelize, DataTypes } = require("sequelize");
const db = require("../db");

const Model = db.define(
  "Model",
  {
    // Model attributes are defined here
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      // allowNull defaults to true
    },
  },
  {
    // Other model options go here
  }
);

// export default Model;
