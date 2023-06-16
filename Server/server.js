// Getting Express and Body Parser
const express = require('express');
const bodyParser = require('body-parser');
// Using as App
const app = express();
// Port
const PORT = 5000;
// Express using the Body Parser
app.use(bodyParser.urlencoded({extended: true})); 

// Find static index.html
app.use(express.static("Server/public"));


// Modules
const mathOperations = require('./Public/Modules/index')

// MAKE A PLAN:
// Work on GET, getting the inputs submitted and display
// Make the Equal button the event listener
// Make an Object in module that get the math operations, total, and two numbers. Bundle them up
// Work on POST, Posting the two numbers, total, and displaying the operations
// Gonna need functions that does the math operations in Server
// Might need use event multiple listeners and functions for multiplication
// Also need to figure out to clear or delete 



// THIS IS ONE OF THE INSTUCTIONS:
// Create a user interface where the user can input two values (2 input elements) and the select type of mathematical operation.
//  When the submit (`=` button) is clicked, capture this input, bundle it up in an object,
// and send this object to the server via a POST.
//  There should also be a 'C' button that will clear the user input fields.

// Use the functions Math operations in Server


// Send the Operations
app.get('/calculator', (req,res) => {
  res.send(mathOperations)
})



// Listen is app
app.listen(PORT, () => {
  console.log("listening on port", PORT);
});