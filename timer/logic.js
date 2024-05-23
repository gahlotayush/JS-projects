document.addEventListener("DOMContentLoaded", function () {
    let hrs = document.getElementById("hrs");
    let mins = document.getElementById("mins");
    let sec = document.getElementById("sec");
    let date = document.getElementById("date");
    let day = document.getElementById("day");
    let month = document.getElementById("month");
    let year = document.getElementById("year");

    const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    const allMonth = ["Januray", "Feburary", "March", "April,", "May", "June", "July", "August", "September", "October", "November", "December"];

    let currentTime = new Date();
    console.log(currentTime);

    // Update the innerHTML of the elements
    hrs.innerHTML = currentTime.getHours();
    mins.innerHTML = currentTime.getMinutes();
    sec.innerHTML = currentTime.getSeconds();

    // Update the time every second
    setInterval(() => {
        currentTime = new Date();
        hrs.innerHTML = (currentTime.getHours()<10?"0":"") +currentTime.getHours();
        mins.innerHTML = currentTime.getMinutes();
        sec.innerHTML = currentTime.getSeconds();
        date.innerHTML = (currentTime.getDate()<10?"0":"")+currentTime.getDate();
        day.innerHTML = weekdays[currentTime.getDay()];
        month.innerHTML = allMonth[currentTime.getMonth()];
        year.innerHTML = currentTime.getFullYear();
    }, 500);


});

