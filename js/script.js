//enter name of goal
//enter hours completed
//enter target
//log hours completed 
//on click submit button
//calculate remaining total = (target - log hours)


var calculate = function(event) {
  event.preventDefault();
  var quantity = document.getElementById("quantity").value;
  var target = document.getElementById("target").value;
  var logged = document.getElementById("logged").value;
  document.getElementById("total").value = target - logged;
}

var form = document.getElementById("goals-form");
form.addEventListener('submit', calculate, false);

/*
// Get all the keys from document
var keys = document.querySelectorAll('.contrainer');
var add = false;

// Add onclick event to all the keys and perform operations
for(var i = 0; i < keys.length; i++) {
  keys[i].onclick = function(e) {
    // Get the input and button values
    var input = document.querySelector('#total');
    var inputVal = input.innerHTML;
    var submitBtn = this.innerHTML;
    var clearBtn = this.innterHTML;

// Now, append the key values (submitBtn to the input string and finally use javascript's eval function to get the result// If clear key is pressed, erase everything
    if(clearBtn == 'clear') {
      input.innerHTML = '';
      add = false;
    }
    
    // If eval key is pressed, calculate and display the result
    else if(submitBtn == 'submit') {
      var equation = inputVal;
*/

/*
var calculate = function(event1) {
event1.preventDefault();
  var quantity1 = document.getElementById("quantity1").value;
  var target1 = document.getElementById("target1").value;
  var logged1 = document.getElementById("logged1").value;
  document.getElementById("total1").value = target1 - logged1;
}
var form1 = document.getElementById("goals-form1");
form1.addEventListener('submit1', calculate1, false);
*/

/*
var calculate2 = function(event2) {
  event2.preventDefault();
  var quantity2 = document.getElementById("quantity2").value;
  var target2 = document.getElementById("target2").value;
  var logged2 = document.getElementById("logged2").value;
  document.getElementById("total2").value = target2 - logged2;
}
var form2 = document.getElementById("goals-form2");
form2.addEventListener('submit2', calculate2, false);
*/

//clear form
  $('#clear').click(function(event3) {
    event3.preventDefault();
    $('input').each(function(){
      $(this).closest('input').remove();

/*
$('#clear').click(function(event3) {
    event3.preventDefault();
    $('input').input.innerHTML = '';
    add = false;
*/

  });

});