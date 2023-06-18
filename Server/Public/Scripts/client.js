$(document).ready(getStarted);

// Main Function
function getStarted() {
  // Test if it works
  console.log("TEST");
  getHandler();
  $("#submit-btn").on("click", postHandler);
}

function getHandler() {
  // Using GET for the '/calculator' route
  $.ajax({
    method: "GET",
    url: "/calculator",
    // Then getting the response
  })
    .then(function (response) {
      console.log("Response in GET getHandler", response);
      console.log(typeof response.numberOne);
      // Append the operations
      render(response);
      // Then getting any Errors
    })
    .catch(function (error) {
      console.log("Request failed in Submit", error);
    });
}

function postHandler(e) {
  // Prevent Default. Show in the Console
  e.preventDefault();
  // Get the values
  let num1Value = Number($("#NumberOne").val());
  let num2Value = Number($("#NumberTwo").val());

  // POST METHOD and Route
  $.ajax({
    method: "POST",
    url: "/calculator",
    // Getting the data and using the parameter
    data: {
      postTheCalculations: {
        numberOne: num1Value,
        numberTwo: num2Value,
      },
    },
  }) // Then send the response recieved and Console Log
    .then(function (response) {
      console.log("Response in POST postHandler", response);
    }) // Then Catch any errors!
    .catch(function (error) {
      console.log("Request failed in POST postHandler", error);
    });
}


