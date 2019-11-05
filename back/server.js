const exress = require("express");

const app = exress();

app.get("/api/operations", (req, res) => {
  const operations = [
    {
      date: "2016-01-05",
      user_id: 1,
      user_type: "natural",
      type: "cash_in",
      operation: { amount: 200.0, currency: "EUR" }
    },
    {
      date: "2016-01-06",
      user_id: 2,
      user_type: "juridical",
      type: "cash_out",
      operation: { amount: 300.0, currency: "EUR" }
    }
  ];

  res.json(operations);
});

app.listen(4000);
