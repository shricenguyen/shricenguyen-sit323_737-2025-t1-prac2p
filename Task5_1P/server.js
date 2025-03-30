const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

app.use(express.static(__dirname));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

const addTwoNumbers = (a, b) => {
  return a + b;
};

app.get("/addTwoNumbers", (req, res) => {
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);

  if (isNaN(a) || isNaN(b)) {
    return res.status(400).json({
      message: "Please enter a number",
    });
  }
  const result = addTwoNumbers(a, b);
  res.json({
    status: 200,
    data: result,
  });
});

app.listen(port, "0.0.0.0", () => {
  console.log(`Server is running on port ${port}`);
});
