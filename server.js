const express = require("express");
const indexTodosRouter = require("./routes/index");
const { json } = require("body-parser");

const app = express();
app.use(json());
app.use(indexTodosRouter);
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`I am running on ${PORT}`);
});
