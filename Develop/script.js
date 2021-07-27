// GIVEN I am using a daily planner to create a schedule

// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar

// WHEN I scroll down
// THEN I am presented with time blocks for standard business hours

// WHEN I view the time blocks for that day
// THEN each time block is color-coded to indicate whether it is in the past, present, or future

// WHEN I click into a time block
// THEN I can enter an event

// WHEN I click the save button for that time block
// THEN the text for that event is saved in local storage

// WHEN I refresh the page
// THEN the saved events persist

//Current Date and Time
setInterval(function(){
    var currTime = moment().format("dddd, MMM Do - hh:mm:ss A");
    $("#currentDay").text(currTime);
},1000); 

//assign colors to textareas depending on time of day
var colorRows = function(){
    var presentHour = moment().hour();

    $(".container").each(function(){
        var rowHour = $(this).attr("id");
        
        if(rowHour < presentHour){
            $(this).addClass("past");
        }
        else if(rowHour == presentHour){
            $(this).removeClass("past");
            $(this).addClass("present");
        }
        else{
            $(this).removeClass("present");
            $(this).addClass("future");
        }

        // }
        //make it grey

        //if present hour
        //make it red



        //if future hour
        //make it green
    })

    //give each text area an id and loop through row and column checking if that hour === present hour, or past, or future
};

colorRows();