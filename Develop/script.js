//FUNCTION DECLARATIONS
setInterval(function(){
    var currTime = moment().format("dddd, MMM Do - hh:mm:ss A");
    $("#currentDay").text(currTime);
},1000); 

//re-color rows every 10 min
setTimeout(function(){
    colorRows();
 }, 1000 * 60 * 10); //1000ms*60*10 === 1s*60*10 === 60s*10 === 1min*10 === 10min  

//assign colors to textareas depending on time of day
var colorRows = function(){
    var presentHour = moment().hour();

    $(".hour").each(function(){
        var rowHour = parseInt($(this).attr("id"));
        
        if(rowHour < presentHour){
            $(this).siblings(".description").removeClass("present");
            $(this).siblings(".description").removeClass("future");
            $(this).siblings(".description").addClass("past");
        }
        else if(rowHour == presentHour){
            $(this).siblings(".description").removeClass("past");
            $(this).siblings(".description").removeClass("future");
            $(this).siblings(".description").addClass("present");
        }
        else{
            $(this).siblings(".description").removeClass("past");
            $(this).siblings(".description").removeClass("present");
            $(this).siblings(".description").addClass("future");
        }
    })
};

var loadTasks = function(){
    var description;
    
    for(var i=9; i<=17; i++){
        var hour = i.toString();//hour is the string version of the value of i

        description = localStorage.getItem(hour);
        $('#'+ hour).siblings(".description").val(description);
    }
}

//FUNCTION CALLS
colorRows();
loadTasks();

//LISTENERS
$(".saveBtn").on("click", function(){
    var taskDescription = $(this).siblings(".description").val();
    var taskTime = $(this).siblings(".hour").attr("id");   
    
    localStorage.setItem(taskTime, taskDescription);
});
      