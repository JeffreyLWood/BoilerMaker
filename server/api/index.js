const router = require("express").Router();
const User = require("../db");
// router.use("/", require("./"));

router.use(function (req, res, next) {
  const err = new Error("Not found.");
  err.satus = 404;
  next(err);
});

module.exports = router;
