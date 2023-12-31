// Getting Express and Body Parser
const express = require("express");
const bodyParser = require("body-parser");
// Using as App
const app = express();
// Port
const PORT = 5000;
// Express using the Body Parser
app.use(bodyParser.urlencoded({ extended: true }));
let total = 0;
// Find static index.html
app.use(express.static("Server/public"));

// MAKE A PLAN:
// Work on GET, getting the inputs submitted and display
// Make the Equal button the event listener
// Make an Object in module that get the math operations, total, and two numbers. Bundle them up
// Gonna need functions that does the math operations in Server
// Might need use event multiple listeners and functions for multiplication
// Work on POST, Posting the two numbers, total, and displaying the operations
// Also need to figure out to clear or delete

// Need to select total separately
// Need operations in server and params
// Use if else if statements and equations
// Use Event listeners and functions in client js. Or Could .html in Jquery

// THIS IS ONE OF THE INSTUCTIONS:
// Create a user interface where the user can input two values (2 input elements) and the select type of mathematical operation.
//  When the submit (`=` button) is clicked, capture this input, bundle it up in an object,
// and send this object to the server via a POST.
//  There should also be a 'C' button that will clear the user input fields.

// Use the functions Math operations in Server

// Store
let getCalculation = [];
// Send the response
app.get("/calculator", (req, res) => {
  res.send(getCalculation);
});

// POST the response
app.post("/calculate", (req, res) => {
  // Params
  let numberOne = Number(req.body.NumberOne);
  let numberTwo = Number(req.body.NumberTwo);
  let operator = req.body.Operator;
  let result = 0;
  let calculation = {
    NumberOne: numberOne,
    NumberTwo: numberTwo,
    Operator: operator,
    result: result,
  };

  // Operator
  if (calculation.Operator === "+") {
    calculation.result = calculation.NumberOne + calculation.NumberTwo;
  } else if (calculation.Operator === "-") {
    calculation.result = calculation.NumberOne - calculation.NumberTwo;
  } else if (calculation.Operator === "/") {
    calculation.result = calculation.NumberOne / calculation.NumberTwo;
  } else if (calculation.Operator === "*") {
    calculation.result = calculation.NumberOne * calculation.NumberTwo;
  }
  // Console Log the req.body
  console.log("IN POST, this is the response retrived", req.body);
  // Push the data
  getCalculation.push(calculation);
  // Send the calculation
  res.send(calculation);
});
// app.delete('/calculate', (req,res) => {
//   res.sendStatus(200);
// })
// Listen is app
app.listen(PORT, () => {
  console.log("listening on port", PORT);
});
