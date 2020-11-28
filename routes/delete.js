const express = require("express");

const router = express.Router();

router.delete("/api/todos/:id", async (req, res) => {
  res.status(200).send({});
});

module.exports = router;
