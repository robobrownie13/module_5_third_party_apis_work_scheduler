// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.


$(function() {
var timeBlock = $(".time-block");
var currentDay = $("#currentDay");
var saveButton = $(".saveBtn");
var dayFormat = dayjs().format('dddd, MMM DD, YYYY');
var currentHour = dayjs().format('h');
var current24Hour = dayjs().format('H');

  saveButton.on('click', function(){
    var agenda = $(this).siblings('.description').val();
    var hourBlock = $(this).find(".hour").text();//$(this).parent().attr('id')
    localStorage.setItem(agenda, hourBlock);
  });


/* function assign class to past(grey) present(orange) future(green) using if else */
function timeChanges () {
  console.log(timeBlock);
  for(i = 0; i < timeBlock.length; i++){
    var hourBlock = parseInt(timeBlock.attr('id').substring(5));
    timeBlock.toggleClass("past", hourBlock < current24Hour)
    timeBlock.toggleClass("present",hourBlock === current24Hour)
    timeBlock.toggleClass("future",hourBlock > current24Hour);
    // if(hourBlock < currentHour) {
    //   //past(grey)
    // }
    // else if(hourBlock === currentHour) {
    //   //present(orange)
    // }
    // else {
    //   //future(green)
    // }
  };
}
timeChanges();

function displayTime() {
  currentDay.text(dayFormat);
}
$("#hour-8 .description").val(localStorage.getItem("hour-8"));
$("#hour-9 .description").val(localStorage.getItem("hour-9"));
$("#hour-10 .description").val(localStorage.getItem("hour-10"));
$("#hour-11 .description").val(localStorage.getItem("hour-11"));
$("#hour-12 .description").val(localStorage.getItem("hour-12"));
$("#hour-13 .description").val(localStorage.getItem("hour-13"));
$("#hour-14 .description").val(localStorage.getItem("hour-14"));
$("#hour-15 .description").val(localStorage.getItem("hour-15"));
$("#hour-16 .description").val(localStorage.getItem("hour-16"));
$("#hour-17 .description").val(localStorage.getItem("hour-17"));

displayTime();

});



