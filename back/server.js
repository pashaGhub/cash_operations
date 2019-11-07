const exress = require("express");
const operations = require("./input");

const app = exress();

// const sortedData = operations.sort((a, b) => a.date > b.date);
// console.log(sortedData);

app.get("/api/operations", (req, res) => {
  res.json(operations);
});

app.listen(4000);
