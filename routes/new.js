const express = require("express");

const router = express.Router();

router.post("/api/todos", async (req, res) => {
  res.status(200).send({});
});

module.exports = router;
