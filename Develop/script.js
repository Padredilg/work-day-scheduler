//VARIABLES
var tasksArr = [];

//FUNCTION DECLARATIONS
setInterval(function(){
    var currTime = moment().format("dddd, MMM Do - hh:mm:ss A");
    $("#currentDay").text(currTime);
},1000); 

//refresh page every 10 min
setInterval(timeRefresh(), 1000 * 60 * 10); //1000ms*60*10 === 1s*60*10 === 60s*10 === 1min*10 === 10min  

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
    })
};


//FUNCTION CALLS
colorRows();
//loadTasks();

//LISTENERS
$(".saveBtn").on("click", function(){
    var taskDescription = $(this).siblings(".description").val();
    var taskTime = $(this).siblings(".hour").attr("id");    
});