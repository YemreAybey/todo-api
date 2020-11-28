const express = require("express");

const router = express.Router();

router.get("/api/todos", async (req, res) => {
  res.send({ todos: [1, 2, 3, 4] });
});

module.exports = router;
