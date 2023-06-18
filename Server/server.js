// Getting Express and Body Parser
const express = require('express');
const bodyParser = require('body-parser');
// Using as App
const app = express();
// Port
const PORT = 5000;
// Express using the Body Parser
app.use(bodyParser.urlencoded({extended: true})); 
let total = 0;
// Find static index.html
app.use(express.static("Server/public"));

// Modules
const Operation = require('./Public/Modules/index');


// MAKE A PLAN:
//✅Work on GET, getting the inputs submitted and display
//✅ Make the Equal button the event listener
//✅Make an Object in module that get the math operations, total, and two numbers. Bundle them up
// Gonna need functions that does the math operations in Server
// Might need use event multiple listeners and functions for multiplication
// Work on POST, Posting the two numbers, total, and displaying the operations
// Also need to figure out to clear or delete 





// THIS IS ONE OF THE INSTUCTIONS:
// Create a user interface where the user can input two values (2 input elements) and the select type of mathematical operation.
//  When the submit (`=` button) is clicked, capture this input, bundle it up in an object,
// and send this object to the server via a POST.
//  There should also be a 'C' button that will clear the user input fields.

// Use the functions Math operations in Server


// if($('#plus')){
//   Operation.total = Operation.numberOne + Operation.numberTwo;
//   Operation.push(Operation.total);
//   console.log(Operation.total);
//   return `${Operation.numberOne} ${Operation.mathOperations[0]} ${Operation.numberTwo}`
// }

// Send the response
app.get('/calculator', (req,res) => {
 
  // Operation.total = Operation.numberOne - Operation.numberTwo;
  // console.log('Total test',Operation.total);
  res.send(Operation)
})
// app.get('/total', (req,res) => {
//   res.send(Total)
// })

// POST the response
app.post('/calculator', (req, res) => {
  
  // Console Log the req.body 
  console.log('IN POST, this is the response retrived', req.body);
  
  console.log('Operations',Operation);
  // Number(Operation.total) = Number(Operation.numberOne) - Number(Operation.numberTwo);
  // console.log('Total test',Number(Operation.total));
  
  // Want update and push into the object when we recieve new data
  Operation.push(req.body.postTheCalculations);
  // Always send 201
  res.sendStatus(201);
})

// Listen is app
app.listen(PORT, () => {
  console.log("listening on port", PORT);
});