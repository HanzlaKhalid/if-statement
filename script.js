var day = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Satureday", "Sunday"];
var value = prompt("Enter a day");
if (value === day[0] || value === day[1] || value === day[2] || value === day[3] || value === day[4]){
    alert("This is your class day")
}else{
    alert("This not day to class")
}
if(value === day[5] || value === day[6]){
    alert("Holiday")
}
