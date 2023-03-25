// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var timeBlock = $(".time-block");
var currentDay = $("#currentDay");
var saveButton = $(".saveBtn");
var dayFormat = dayjs().format('dddd, MMM DD, YYYY');
var currentHour = dayjs().hour();
var agenda = $("textarea");






$(function() {

  
  saveButton.on('click', function(){
    var agenda = $(this).siblings('textarea').val();
    var hourBlock = $(this).parent().attr('id');
  
    localStorage.setItem(agenda, hourBlock);
  });


/* function assign class to past(grey) present(orange) future(green) using if else */
function timeChanges () {
  for(i = 0; i < timeBlock.length; i++){
    if(hourBlock < currentHour) {
      //past(grey)
    }
    else if(hourBlock === currentHour) {
      //present(orange)
    }
    else {
      //future(green)
    }
  }
}

function displayTime() {
  currentDay.text(dayFormat);
}
displayTime();

});

  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
