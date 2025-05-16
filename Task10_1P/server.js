const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 3000;

// Set up middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("public"));

// Routes to serve static files
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

// API endpoint for addition operation
app.post("/calculate", (req, res) => {
  const num1 = parseFloat(req.body.num1);
  const num2 = parseFloat(req.body.num2);

  // Validate inputs to ensure they are numbers
  if (isNaN(num1) || isNaN(num2)) {
    return res.status(400).json({
      error: "Please provide valid numbers",
    });
  }
  // Perform addition operation
  const result = num1 + num2;
  // Return the result as JSON including the operation details
  res.json({
    num1,
    num2,
    operation: "addition",
    result,
  });
});

// Start server
app.listen(port, () => {
  console.log(`Calculator app listening at http://localhost:${port}`);
});
