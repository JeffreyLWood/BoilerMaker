//require express, path and morgan logging middleware
const express = require("express");
const app = express();
const path = require("path");
const morgan = require("morgan");
const bodyParser = require("body-parser");

//export app
module.exports = app;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/auth", require("./auth"));

app.use("/api", require("./api"));

//log on each request
app.use(morgan("dev"));

// static middleware for serving up public folder content
app.use(express.static(path.join(__dirname, "../public")));

// routing api
app.use("/api", require("./api"));

// send 404 if pathname is blank else, proceed
app.use((req, res, next) => {
  if (path.extname(req.path).length > 0) {
    res.status(404).end();
  } else {
    next();
  }
});

// get request sends index.html
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

// // console log server start
// const port = process.env.PORT || 3000;
// app.listen(port, function () {
//   console.log(`Your server, listening on port ${port}`);
// });

app.use(function (err, req, res, next) {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || "Internal server error.");
});
