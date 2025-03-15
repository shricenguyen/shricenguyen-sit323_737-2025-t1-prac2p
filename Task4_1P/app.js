const e = require("express");
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

//middleware to parse the request body
app.use(express.json());

//Welcome message
app.get("/", (req, res) => {
  res.json({
    message: "Welcome to Simple Calculator Microservice",
    endpoints: {
      add: "/api/add?num1=x&num2=y",
      subtract: "/api/subtract?num1=x&num2=y",
      multiply: "/api/multiply?num1=x&num2=y",
      divide: "/api/divide?num1=x&num2=y",
    },
  });
});

// function to verify the valid values of num1 and num2
// if the values are not valid, return false and error message
const verifyValues = (num1, num2) => {
  //check if both num1 and num2 are provided
  if (num1 === undefined || num2 === undefined) {
    return { valid: false, error: "Num1 and Num2 are required" };
  }

  //parse the values to float
  const parsedNum1 = parseFloat(num1);
  const parsedNum2 = parseFloat(num2);

  //check if the values are in valid format
  if (isNaN(parsedNum1) || isNaN(parsedNum2)) {
    return { valid: false, error: "Invalid input. Please enter valid numbers" };
  }

  //return true and parsed values if the values are valid
  return { valid: true, parsedNum1, parsedNum2 };
};

//Endpoint to add two numbers
app.get("/api/add", (req, res) => {
  //get the values of num1 and num2 from the query
  //and validate the values
  //if the values are not valid, return error message
  const { num1, num2 } = req.query;
  const validation = verifyValues(num1, num2);

  if (!validation.valid) {
    return res.status(400).json({ error: validation.error });
  }

  //calculate the result
  //and return the result in json format
  const result = validation.parsedNum1 + validation.parsedNum2;
  res.json({
    calculatingTask: "Addition",
    num1: validation.parsedNum1,
    num2: validation.parsedNum2,
    result: result,
  });
});

//Endpoint to subtract two numbers
app.get("/api/subtract", (req, res) => {
  //get the values of num1 and num2 from the query
  //and validate the values
  //if the values are not valid, return error message
  const { num1, num2 } = req.query;
  const validation = verifyValues(num1, num2);

  if (!validation.valid) {
    return res.status(400).json({ error: validation.error });
  }

  //calculate the result
  //and return the result in json format
  const result = validation.parsedNum1 - validation.parsedNum2;
  res.json({
    calculatingTask: "Subtraction",
    num1: validation.parsedNum1,
    num2: validation.parsedNum2,
    result: result,
  });
});

//Endpoint to multiply two numbers
app.get("/api/multiply", (req, res) => {
  //get the values of num1 and num2 from the query
  //and validate the values
  //if the values are not valid, return error message
  const { num1, num2 } = req.query;
  const validation = verifyValues(num1, num2);

  if (!validation.valid) {
    return res.status(400).json({ error: validation.error });
  }

  //calculate the result
  //and return the result in json format
  const result = validation.parsedNum1 * validation.parsedNum2;
  res.json({
    calculatingTask: "Multiplication",
    num1: validation.parsedNum1,
    num2: validation.parsedNum2,
    result: result,
  });
});

//Endpoint to divide two numbers
app.get("/api/divide", (req, res) => {
  //get the values of num1 and num2 from the query
  //and validate the values
  //if the values are not valid, return error message
  const { num1, num2 } = req.query;
  const validation = verifyValues(num1, num2);

  if (!validation.valid) {
    return res.status(400).json({ error: validation.error });
  }

  //check if the second number is zero
  if (validation.parsedNum2 === 0) {
    return res.status(400).json({ error: "Cannot divide by zero" });
  }

  //calculate the result
  //and return the result in json format
  const result = validation.parsedNum1 / validation.parsedNum2;
  res.json({
    calculatingTask: "Division",
    num1: validation.parsedNum1,
    num2: validation.parsedNum2,
    result: result,
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
