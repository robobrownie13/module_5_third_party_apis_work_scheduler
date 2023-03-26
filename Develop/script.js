$(function() {
var timeBlock = $(".time-block");
var currentDay = $("#currentDay");
var saveButton = $(".saveBtn");
var dayFormat = dayjs().format('dddd, MMM DD, YYYY');
var current24Hour = dayjs().format('H');

  saveButton.on('click', function(){
    var agenda = $(this).siblings('.description').val();
    var hourId = $(this).parent().attr('id');
    localStorage.setItem(hourId, agenda);
  });

function timeChanges () {
  for(i = 0; i < timeBlock.length; i++){
    var hourBlock = parseInt(timeBlock[i].id.substring(5));
    $(timeBlock[i]).toggleClass("past", hourBlock < current24Hour)
    $(timeBlock[i]).toggleClass("present",hourBlock === current24Hour)
    $(timeBlock[i]).toggleClass("future",hourBlock > current24Hour);

  };
}
timeChanges();

function displayTime() {
  currentDay.text(dayFormat);
}

displayTime();

});

for(let i=8; i<18; i++){
  $(`#hour-${i} .description`).val(localStorage.getItem(`hour-${i}`));
}

// $("#hour-8 .description").val(localStorage.getItem("hour-8"));
// $("#hour-9 .description").val(localStorage.getItem("hour-9"));
// $("#hour-10 .description").val(localStorage.getItem("hour-10"));
// $("#hour-11 .description").val(localStorage.getItem("hour-11"));
// $("#hour-12 .description").val(localStorage.getItem("hour-12"));
// $("#hour-13 .description").val(localStorage.getItem("hour-13"));
// $("#hour-14 .description").val(localStorage.getItem("hour-14"));
// $("#hour-15 .description").val(localStorage.getItem("hour-15"));
// $("#hour-16 .description").val(localStorage.getItem("hour-16"));
// $("#hour-17 .description").val(localStorage.getItem("hour-17"));

