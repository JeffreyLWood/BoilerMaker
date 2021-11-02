const { db } = require("./db");

const app = require("./app");

const port = process.env.PORT || 3000;

db.sync({ force: true }).then(function () {
  app.listen(port);
  console.log(`Listening on ${port}`);
});
