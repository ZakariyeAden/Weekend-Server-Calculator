$(document).ready(getStarted);


// Main Function
function getStarted() {
  // Test if it works
  console.log('TEST');
  submitHandler();
}


function submitHandler(){
  // Using GET for the '/calculator' route
  $.ajax({
    method: 'GET',
    url: '/calculator'
    // Then getting the response
  }).then(function(response){
    console.log('Response in Submit', response);
  // Append the operations
    for(let data of response){
      $('#content').append(`
        <li>${data.total}</li>
        <li>${data.num1Value} / ${data.num2Value}</li>
      `)
    }
    // Then getting any Errors
  }).catch(function(error){
    console.log('Request failed in Submit', error);
  })
}