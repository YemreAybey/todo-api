const express = require("express");

const router = express.Router();

router.put("/api/todos/:id", async (req, res) => {
  return res.status(200).send({});
});

module.exports = router;
