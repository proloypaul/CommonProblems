const dateString = "10/11/2009";
function getDayName(dateString){
    let dayName;
    const allDayName = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    const date = new Date(dateString);
    dayName = date.getDay();
    return allDayName[dayName];
    
}
console.log(getDayName(dateString));