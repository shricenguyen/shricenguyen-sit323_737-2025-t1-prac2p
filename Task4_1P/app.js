// Initiate the express server and port
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
    throw new Error("Please provide both num1 and num2");
  }

  //parse the values to float
  const parsedNum1 = parseFloat(num1);
  const parsedNum2 = parseFloat(num2);

  //check if the values are in valid format
  if (isNaN(parsedNum1) || isNaN(parsedNum2)) {
    throw new Error("Please provide valid numbers");
  }

  //return true and parsed values if the values are valid
  return { parsedNum1, parsedNum2 };
};

//Endpoint to add two numbers
app.get("/api/add", (req, res) => {
  //get the values of num1 and num2 from the query
  //and validate the values
  //if the values are not valid, return error message
  try {
    const { num1, num2 } = req.query;
    const { parsedNum1, parsedNum2 } = verifyValues(num1, num2);

    //calculate the result
    //and return the result in json format
    const result = parsedNum1 + parsedNum2;
    res.json({
      calculatingTask: "Addition",
      num1: parsedNum1,
      num2: parsedNum2,
      result: result,
    });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

//Endpoint to subtract two numbers
app.get("/api/subtract", (req, res) => {
  //get the values of num1 and num2 from the query
  //and validate the values
  //if the values are not valid, return error message
  try {
    const { num1, num2 } = req.query;
    const { parsedNum1, parsedNum2 } = verifyValues(num1, num2);

    //calculate the result
    //and return the result in json format
    const result = parsedNum1 - parsedNum2;
    res.json({
      calculatingTask: "Subtraction",
      num1: parsedNum1,
      num2: parsedNum2,
      result: result,
    });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

//Endpoint to multiply two numbers
app.get("/api/multiply", (req, res) => {
  //try to get the values of num1 and num2 from the query
  //and validate the values
  //if the values are not valid, throw error message
  try {
    const { num1, num2 } = req.query;
    const { parsedNum1, parsedNum2 } = verifyValues(num1, num2);

    //calculate the result
    //and return the result in json format
    const result = parsedNum1 * parsedNum2;
    res.json({
      calculatingTask: "Multiplication",
      num1: parsedNum1,
      num2: parsedNum2,
      result: result,
    });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

//Endpoint to divide two numbers
app.get("/api/divide", (req, res) => {
  //try to get the values of num1 and num2 from the query
  //and validate the values
  //if the values are not valid, throw error message
  try {
    const { num1, num2 } = req.query;
    const { parsedNum1, parsedNum2 } = verifyValues(num1, num2);

    //throw error if num2 is zero
    if (parsedNum2 === 0) {
      throw new Error("Cannot divide by zero");
    }

    //calculate the result
    //and return the result in json format
    const result = parsedNum1 / parsedNum2;
    res.json({
      calculatingTask: "Division",
      num1: parsedNum1,
      num2: parsedNum2,
      result: result,
    });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// error handling for internal server errors
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    error: "Internal Server Error",
    message: err.message,
  });
});

// start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
