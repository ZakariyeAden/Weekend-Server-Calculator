$(document).ready(getStarted);
let operator = '';
// Main Function
function getStarted() {
  // Test if it works
  $('.operator').on('click', function(){
    operator = $(this).html();
  })
  console.log("TEST");
  $("#submit-btn").on("click", postHandler);
  $("#clear").on("click", deleteHandler);
}

function postHandler(e) {
  // Prevent Default. Show in the Console
  e.preventDefault();
  // Get the values
  let num1Value = Number($("#NumberOne").val());
  let num2Value = Number($("#NumberTwo").val());
  let calculation = {
    NumberOne: num1Value,
    NumberTwo: num2Value,
    Operator: operator,
  }
  // POST METHOD and Route
  $.ajax({
    method: "POST",
    url: "/calculate",
    // Getting the data and using the parameter
    data: calculation
  }) // Then send the response recieved and Console Log
    .then(function (response) {
      console.log("Response in POST postHandler", response);
      let result = response.result;

      $('#total').html(`<h3>${result}</h3>`)
      getHandler();
    }) // Then Catch any errors!
    .catch(function (error) {
      console.log("Request failed in POST postHandler", error);
    });
}
function getHandler() {
  // Using GET for the '/calculator' route
  $.ajax({
    method: "GET",
    url: "/calculator",
  })
  // Then getting the response
    .then(function (response) {
      console.log("Response in GET getHandler", response);
      console.log(typeof response.numberOne);
      // Append the operations
      render(response);
    })
    // Then getting any Errors
    .catch(function (error) {
      console.log("Request failed in Submit", error);
    });
}

function deleteHandler() {
  $('#content').empty('');
  $('#total').empty('');
  // $.ajax({
  //   method: "DELETE",
  //   url: "/calculator",
  // })
  // // Then getting the response
  //   .then(function (response) {
  //     console.log("Response in DELETE getHandler", response);
  //   })
  //   .catch(function (error) {
  //     console.log("Request failed in Submit", error);
  //   });
}

function render(response){
  console.log("Response in GET getHandler", response);
  console.log(typeof response.numberOne);
  $('#content').empty('');
  // Append the operations
  for(let i = 0; i < response.length; i++){
    $('#content').append(`
      <li class="calculation">${response[i].NumberOne} ${response[i].Operator} ${response[i].NumberTwo} = ${response[i].result}</li>
    `)
  }
}


