let  date = document.getElementById("date");
let  day = document.getElementById("day");
let  month = document.getElementById("month");
let  year = document.getElementById("year");


let current_stat = new Date();
console.log(current_stat);


    currentTime = new Date();
    const weekDays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const allMonth = ["Januray","Feburary","March","April,","May","June","July","August","September","October","November","December"];

    date.innerHTML = current_stat.getDate();
    day.innerHTML = weekDays[current_stat.getDay()];
    month.innerHTML = allMonth[current_stat.getMonth()];
    year.innerHTML = current_stat.getFullYear();
