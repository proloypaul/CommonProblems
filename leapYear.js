const year = 1800;

if((year%4 == 0 && year%100 !== 0) || (year%400 == 0)){
    console.log(year + " is leap year");
}else{
    console.log(year + " isn't leap year");
}

// unspected leap year 1900, 1700